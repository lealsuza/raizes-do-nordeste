import { useState } from 'react';
import { FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useAppState } from '../../context/AppState';

import {
  Page,
  Titulo,
  Subtitulo,
  Card,
  Abas,
  Aba,
  Campo,
  Erro,
  Enviar,
  Protecao,
  Aceite,
  PoliticaLink,
} from './styles';

export default function Login() {
  const { entrar, criarConta } = useAppState();
  const navigate = useNavigate();
  const [aba, setAba] = useState('entrar');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [aceite, setAceite] = useState(false);
  const [erro, setErro] = useState('');

  const enviar = (event) => {
    event.preventDefault();
    if (!email.trim() || !email.includes('@') || senha.trim().length < 4) {
      setErro(
        'Informe um e-mail válido e uma senha com pelo menos 4 caracteres.',
      );
      return;
    }

    if (aba === 'criar') {
      if (!nome.trim()) {
        setErro('Informe seu nome.');
        return;
      }
      if (!aceite) {
        setErro('Aceite a Política de Privacidade para criar a conta.');
        return;
      }
      setErro(criarConta({ nome, email, senha }));
      return;
    }

    setErro(entrar({ email: email.trim(), senha }));
  };

  return (
    <Page>
      <Titulo>Entre no Clube Raízes</Titulo>
      <Subtitulo>Peça, acompanhe e ganhe pontos.</Subtitulo>

      <Card onSubmit={enviar}>
        <Abas>
          <Aba
            type="button"
            $active={aba === 'entrar'}
            onClick={() => {
              setAba('entrar');
              setErro('');
            }}
          >
            Entrar
          </Aba>
          <Aba
            type="button"
            $active={aba === 'criar'}
            onClick={() => {
              setAba('criar');
              setErro('');
            }}
          >
            Criar conta
          </Aba>
        </Abas>

        {aba === 'criar' && (
          <Campo>
            Nome
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              autoComplete="name"
            />
          </Campo>
        )}
        <Campo>
          E-mail
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </Campo>
        <Campo>
          Senha
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            autoComplete={aba === 'criar' ? 'new-password' : 'current-password'}
          />
        </Campo>

        {aba === 'criar' && (
          <Aceite>
            <input
              type="checkbox"
              checked={aceite}
              onChange={(e) => setAceite(e.target.checked)}
            />
            <span>
              Li e aceito a{' '}
              <PoliticaLink
                type="button"
                onClick={() => navigate('/privacidade')}
              >
                Política de Privacidade
              </PoliticaLink>{' '}
              e autorizo o tratamento dos meus dados conforme a LGPD.
            </span>
          </Aceite>
        )}

        {erro && <Erro>{erro}</Erro>}
        <Enviar type="submit">
          {aba === 'criar' ? 'Criar conta' : 'Entrar'}
        </Enviar>
      </Card>

      <Protecao>
        <FiLock />
        Seus dados são protegidos conforme a LGPD.
      </Protecao>
    </Page>
  );
}
