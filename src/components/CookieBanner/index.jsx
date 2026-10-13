import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useAppState } from '../../context/AppState';

import { Overlay, Banner, Icon, Text, AcceptBtn, CloseBtn } from './styles';

export default function CookieBanner() {
  const navigate = useNavigate();
  const { consentimento, aceitarCookies } = useAppState();
  const [fechado, setFechado] = useState(false);

  if (consentimento || fechado) {
    return null;
  }

  return (
    <Overlay>
      <Banner>
        <Icon>🍪</Icon>
        <Text>
          Usamos cookies e dados pessoais para melhorar sua experiência,
          conforme a{' '}
          <a
            href="/privacidade"
            onClick={(event) => {
              event.preventDefault();
              navigate('/privacidade');
            }}
          >
            LGPD
          </a>
          . Você pode gerenciar suas preferências a qualquer momento.
        </Text>
        <AcceptBtn onClick={aceitarCookies}>Aceitar e continuar</AcceptBtn>
        <CloseBtn onClick={() => setFechado(true)}>
          <FiX />
        </CloseBtn>
      </Banner>
    </Overlay>
  );
}
