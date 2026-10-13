import { useEffect } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useAppState } from '../../context/AppState';

import {
  Page,
  Avatar,
  Nome,
  Email,
  Acoes,
  PedidosBtn,
  SairBtn,
} from './styles';

export default function Conta() {
  const { usuario, sair } = useAppState();
  const navigate = useNavigate();
  const primeiroNome = usuario?.nome?.trim().split(/\s+/)[0] || '';

  useEffect(() => {
    if (!usuario) {
      navigate('/login', { replace: true });
    }
  }, [usuario, navigate]);

  if (!usuario) {
    return null;
  }

  return (
    <Page>
      <Avatar>{primeiroNome.charAt(0).toUpperCase()}</Avatar>
      <Nome>Olá, {primeiroNome}!</Nome>
      <Email>{usuario.email}</Email>
      <Acoes>
        <PedidosBtn type="button" onClick={() => navigate('/pedidos')}>
          Meus pedidos
        </PedidosBtn>
        <SairBtn
          type="button"
          onClick={() => {
            sair();
            navigate('/');
          }}
        >
          <FiLogOut /> Sair
        </SairBtn>
      </Acoes>
    </Page>
  );
}
