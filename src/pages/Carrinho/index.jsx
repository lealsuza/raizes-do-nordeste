import { useState } from 'react';
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiCreditCard,
  FiFileText,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useAppState } from '../../context/AppState';
import { imagensPratos, formatarPreco } from '../../data/imagens';
import { unidades } from '../../data/mockData';

import {
  Page,
  Layout,
  Coluna,
  Titulo,
  Subtitulo,
  Card,
  Item,
  Foto,
  ItemNome,
  ItemPreco,
  Qtd,
  QtdBtn,
  QtdValor,
  ItemLado,
  LinhaTotal,
  Remover,
  BlocoTitulo,
  CupomLinha,
  CupomInput,
  CupomBtn,
  CupomMsg,
  Pagamentos,
  Pagamento,
  Nota,
  Resumo,
  ResumoTitulo,
  ResumoLinha,
  TotalLinha,
  PagarBtn,
  Pontos,
  Vazio,
} from './styles';

const formas = [
  { id: 'pix', label: 'Pix' },
  { id: 'credito', label: 'Crédito' },
  { id: 'vale', label: 'Vale Refeição' },
];

function PixIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.8 14.7 5.5 12 8.2 9.3 5.5 12 2.8Zm6.7 6.7 2.7 2.5-2.7 2.7-2.5-2.7 2.5-2.5ZM12 15.8l2.7 2.7L12 21.2 9.3 18.5 12 15.8ZM5.3 9.5l2.5 2.5-2.5 2.7L2.6 12l2.7-2.5Z"
      />
    </svg>
  );
}

export default function Carrinho() {
  const {
    itens,
    alterarQtd,
    removerItem,
    unidadeId,
    abrirLogin,
    usuario,
    cupom,
    aplicarCupom,
    finalizarPedido,
  } = useAppState();
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState('');
  const [cupomMsg, setCupomMsg] = useState('');
  const [cupomErro, setCupomErro] = useState(false);
  const [pagamento, setPagamento] = useState('pix');

  const unidade = unidades.find((u) => u.id === unidadeId) || unidades[0];
  const subtotal = itens.reduce(
    (total, item) => total + item.preco * item.qtd,
    0,
  );
  const desconto = cupom?.percentual ? subtotal * cupom.percentual : 0;
  const total = Math.max(subtotal - desconto, 0);
  const pontos = Math.floor(total);

  const enviarCupom = (event) => {
    event.preventDefault();
    const ok = aplicarCupom(codigo);
    setCupomErro(!ok);
    setCupomMsg(
      ok ? `Cupom ${codigo.trim().toUpperCase()} aplicado.` : 'Cupom inválido.',
    );
  };

  const finalizar = () => {
    if (!itens.length) {
      return;
    }
    if (!usuario) {
      abrirLogin();
      return;
    }
    const forma = formas.find((item) => item.id === pagamento);
    finalizarPedido({
      pagamento: forma.label,
      total,
      pontos,
      unidade: `${unidade.cidade} — ${unidade.ponto}`,
    });
  };

  return (
    <Page>
      <Titulo>Seu pedido</Titulo>
      <Subtitulo>
        Retirada / entrega em {unidade.cidade} — {unidade.ponto}
      </Subtitulo>

      <Layout>
        <Coluna>
          {itens.length === 0 ? (
            <Vazio>
              Seu carrinho está vazio.
              <div>
                <button type="button" onClick={() => navigate('/cardapio')}>
                  Ver cardápio
                </button>
              </div>
            </Vazio>
          ) : (
            <Card>
              {itens.map((item) => (
                <Item key={item.id}>
                  <Foto src={imagensPratos[item.imagem]} alt="" />
                  <div>
                    <ItemNome>{item.nome}</ItemNome>
                    <ItemPreco>{formatarPreco(item.preco)} · un</ItemPreco>
                    <Qtd>
                      <QtdBtn
                        type="button"
                        aria-label="Diminuir"
                        onClick={() => alterarQtd(item.id, -1)}
                      >
                        <FiMinus />
                      </QtdBtn>
                      <QtdValor>{item.qtd}</QtdValor>
                      <QtdBtn
                        type="button"
                        aria-label="Aumentar"
                        onClick={() => alterarQtd(item.id, 1)}
                      >
                        <FiPlus />
                      </QtdBtn>
                    </Qtd>
                  </div>
                  <ItemLado>
                    <LinhaTotal>
                      {formatarPreco(item.preco * item.qtd)}
                    </LinhaTotal>
                    <Remover
                      type="button"
                      aria-label={`Remover ${item.nome}`}
                      onClick={() => removerItem(item.id)}
                    >
                      <FiTrash2 />
                    </Remover>
                  </ItemLado>
                </Item>
              ))}
            </Card>
          )}

          <Card>
            <BlocoTitulo>Cupom de desconto</BlocoTitulo>
            <CupomLinha onSubmit={enviarCupom}>
              <CupomInput
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                placeholder="Digite o cupom (ex.: FORRO20)"
                aria-label="Cupom de desconto"
              />
              <CupomBtn type="submit">Aplicar</CupomBtn>
            </CupomLinha>
            {cupomMsg && <CupomMsg $erro={cupomErro}>{cupomMsg}</CupomMsg>}
            {cupom?.brinde && <CupomMsg>{cupom.brinde}</CupomMsg>}
          </Card>

          <Card>
            <BlocoTitulo>Forma de pagamento</BlocoTitulo>
            <Pagamentos>
              {formas.map((forma) => (
                <Pagamento
                  key={forma.id}
                  type="button"
                  $active={pagamento === forma.id}
                  onClick={() => setPagamento(forma.id)}
                >
                  {forma.id === 'pix' && <PixIcon />}
                  {forma.id === 'credito' && <FiCreditCard />}
                  {forma.id === 'vale' && <FiFileText />}
                  {forma.label}
                </Pagamento>
              ))}
            </Pagamentos>
            <Nota>
              O pagamento é processado por parceiro externo. Nenhum dado
              sensível é armazenado neste app (conforme LGPD).
            </Nota>
          </Card>
        </Coluna>

        <Resumo>
          <ResumoTitulo>Resumo</ResumoTitulo>
          <ResumoLinha>
            <span>Subtotal</span>
            <strong>{formatarPreco(subtotal)}</strong>
          </ResumoLinha>
          {desconto > 0 && (
            <ResumoLinha>
              <span>Desconto</span>
              <strong>− {formatarPreco(desconto)}</strong>
            </ResumoLinha>
          )}
          <ResumoLinha>
            <span>Taxa de serviço</span>
            <strong>Grátis</strong>
          </ResumoLinha>
          <TotalLinha>
            <span>Total</span>
            <strong>{formatarPreco(total)}</strong>
          </TotalLinha>
          <PagarBtn type="button" disabled={!itens.length} onClick={finalizar}>
            Finalizar e pagar
          </PagarBtn>
          <Pontos>Você ganhará {pontos} pontos no Clube Raízes.</Pontos>
        </Resumo>
      </Layout>
    </Page>
  );
}
