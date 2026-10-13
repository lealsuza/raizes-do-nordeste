import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppStateContext = createContext(null);

const cupons = {
  FORRO20: { percentual: 0.2 },
  NORDESTE15: { percentual: 0.15 },
  BEMVINDO: { brinde: 'Tapioca de coco de brinde na primeira visita.' },
};

const ler = (chave, fallback) => {
  try {
    const valor = localStorage.getItem(chave);
    return valor ? JSON.parse(valor) : fallback;
  } catch {
    return fallback;
  }
};

const gravar = (chave, valor) => {
  localStorage.setItem(chave, JSON.stringify(valor));
};

export function AppStateProvider({ children }) {
  const navigate = useNavigate();
  const [unidadeId, setUnidadeId] = useState(() => ler('raizes-unidade', 1));
  const [itens, setItens] = useState(() => ler('raizes-itens', []));
  const [usuario, setUsuario] = useState(() => ler('raizes-usuario', null));
  const [contas, setContas] = useState(() => ler('raizes-contas', []));
  const [consentimento, setConsentimento] = useState(() =>
    ler('raizes-consentimento', false),
  );
  const [pedidos, setPedidos] = useState(() => ler('raizes-pedidos', []));
  const [aviso, setAviso] = useState(null);
  const [cupom, setCupom] = useState(null);
  const avisoTimer = useRef(null);

  useEffect(() => () => clearTimeout(avisoTimer.current), []);
  useEffect(() => {
    gravar('raizes-unidade', unidadeId);
    gravar('raizes-itens', itens);
    gravar('raizes-usuario', usuario);
    gravar('raizes-contas', contas);
    gravar('raizes-consentimento', consentimento);
    gravar('raizes-pedidos', pedidos);
  }, [unidadeId, itens, usuario, contas, consentimento, pedidos]);

  const mostrarAviso = (texto) => {
    setAviso({ id: Date.now(), texto });
    clearTimeout(avisoTimer.current);
    avisoTimer.current = setTimeout(() => setAviso(null), 2800);
  };

  const adicionarItem = (item) => {
    setItens((atual) => {
      const existente = atual.find((entrada) => entrada.id === item.id);
      if (existente) {
        return atual.map((entrada) =>
          entrada.id === item.id
            ? { ...entrada, qtd: entrada.qtd + 1 }
            : entrada,
        );
      }
      return [
        ...atual,
        {
          id: item.id,
          nome: item.nome,
          preco: item.preco,
          imagem: item.imagem,
          qtd: 1,
        },
      ];
    });
    mostrarAviso(`${item.nome} adicionado ao carrinho`);
  };

  const alterarQtd = (id, delta) => {
    setItens((atual) =>
      atual.flatMap((entrada) => {
        if (entrada.id !== id) {
          return [entrada];
        }
        const qtd = entrada.qtd + delta;
        return qtd < 1 ? [entrada] : [{ ...entrada, qtd }];
      }),
    );
  };

  const removerItem = (id) => {
    setItens((atual) => atual.filter((entrada) => entrada.id !== id));
  };

  const aplicarCupom = (codigo) => {
    const regra = cupons[codigo.trim().toUpperCase()];
    if (!regra) {
      return false;
    }
    setCupom({ codigo: codigo.trim().toUpperCase(), ...regra });
    return true;
  };

  const limparPedido = () => {
    setItens([]);
    setCupom(null);
  };

  const entrar = ({ email, senha }) => {
    const conta = contas.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.senha === senha,
    );
    if (!conta) {
      return 'E-mail ou senha incorretos.';
    }
    setUsuario({
      nome: conta.nome,
      email: conta.email,
      pontos: conta.pontos || 0,
    });
    setConsentimento(true);
    navigate('/');
    return '';
  };

  const criarConta = ({ nome, email, senha }) => {
    const existe = contas.some(
      (item) => item.email.toLowerCase() === email.toLowerCase(),
    );
    if (existe) {
      return 'Este e-mail já está cadastrado.';
    }
    const conta = { nome: nome.trim(), email: email.trim(), senha, pontos: 0 };
    setContas((atual) => [...atual, conta]);
    setUsuario({ nome: conta.nome, email: conta.email, pontos: 0 });
    setConsentimento(true);
    navigate('/');
    return '';
  };

  const finalizarPedido = ({ pagamento, total, pontos, unidade }) => {
    const alfabeto = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
    let codigo = 'PED-';
    for (let i = 0; i < 5; i += 1) {
      codigo += alfabeto[Math.floor(Math.random() * alfabeto.length)];
    }

    const pedido = {
      id: codigo,
      criadoEm: new Date().toISOString(),
      unidade,
      pagamento,
      total,
      pontos,
      status: 0,
      itens: itens.map((item) => ({
        nome: item.nome,
        qtd: item.qtd,
        total: item.preco * item.qtd,
      })),
    };

    setPedidos((atual) => [pedido, ...atual]);
    if (usuario?.email) {
      const saldo = (usuario.pontos || 0) + pontos;
      setContas((atual) =>
        atual.map((conta) =>
          conta.email.toLowerCase() === usuario.email.toLowerCase()
            ? { ...conta, pontos: saldo }
            : conta,
        ),
      );
      setUsuario({ ...usuario, pontos: saldo });
    }
    setItens([]);
    setCupom(null);
    navigate('/pedidos');
  };

  const avancarStatus = (id) => {
    setPedidos((atual) =>
      atual.map((pedido) =>
        pedido.id === id
          ? { ...pedido, status: Math.min(pedido.status + 1, 3) }
          : pedido,
      ),
    );
  };

  const resgatar = (recompensa) => {
    if (!usuario) {
      abrirLogin();
      return false;
    }
    const saldo = usuario.pontos || 0;
    if (saldo < recompensa.pontos) {
      return false;
    }
    const novoSaldo = saldo - recompensa.pontos;
    setContas((atual) =>
      atual.map((conta) =>
        conta.email.toLowerCase() === usuario.email.toLowerCase()
          ? { ...conta, pontos: novoSaldo }
          : conta,
      ),
    );
    setUsuario({ ...usuario, pontos: novoSaldo });
    mostrarAviso(`${recompensa.nome} resgatado`);
    return true;
  };

  const sair = () => setUsuario(null);

  const excluirDados = () => {
    setUsuario(null);
    setContas([]);
    setConsentimento(false);
    setItens([]);
    setCupom(null);
    setPedidos([]);
    setUnidadeId(1);
    mostrarAviso('Dados excluídos deste dispositivo');
  };

  const aceitarCookies = () => setConsentimento(true);

  const abrirLogin = () => navigate('/login');

  const quantidade = itens.reduce((total, item) => total + item.qtd, 0);

  return (
    <AppStateContext.Provider
      value={{
        unidadeId,
        setUnidadeId,
        itens,
        adicionarItem,
        alterarQtd,
        removerItem,
        quantidade,
        usuario,
        entrar,
        criarConta,
        sair,
        abrirLogin,
        excluirDados,
        consentimento,
        aceitarCookies,
        pedidos,
        finalizarPedido,
        avancarStatus,
        resgatar,
        aviso,
        cupom,
        aplicarCupom,
        limparPedido,
        mostrarAviso,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = () => useContext(AppStateContext);
