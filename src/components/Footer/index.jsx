import { useNavigate } from 'react-router-dom';

import {
  FooterWrapper,
  FooterInner,
  FooterGrid,
  FooterBrand,
  FooterBrandName,
  FooterBrandTagline,
  FooterCol,
  FooterColTitle,
  FooterColLinks,
  FooterUnidade,
  FooterBottom,
} from './styles';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      <FooterInner>
        <FooterGrid>
          <FooterBrand>
            <FooterBrandName>Raízes do Nordeste</FooterBrandName>
            <FooterBrandTagline>
              Do sertão ao litoral, servimos memória, afeto e tempero.
            </FooterBrandTagline>
          </FooterBrand>

          <FooterCol>
            <FooterColTitle>Nossas unidades</FooterColTitle>
            <FooterColLinks>
              <li>
                <FooterUnidade>Salvador — Pelourinho</FooterUnidade>
              </li>
              <li>
                <FooterUnidade>Recife — Marco Zero</FooterUnidade>
              </li>
              <li>
                <FooterUnidade>Fortaleza — Beira Mar</FooterUnidade>
              </li>
              <li>
                <FooterUnidade>São Luís — Centro Histórico</FooterUnidade>
              </li>
            </FooterColLinks>
          </FooterCol>

          <FooterCol>
            <FooterColTitle>Privacidade & Termos</FooterColTitle>
            <FooterColLinks>
              <li>
                <a
                  href="/privacidade"
                  onClick={(event) => {
                    event.preventDefault();
                    navigate('/privacidade');
                  }}
                >
                  Política de Privacidade (LGPD)
                </a>
              </li>
              <li>
                <a
                  href="/promocoes"
                  onClick={(event) => {
                    event.preventDefault();
                    navigate('/promocoes');
                  }}
                >
                  Promoções e cupons
                </a>
              </li>
            </FooterColLinks>
          </FooterCol>
        </FooterGrid>

        <FooterBottom>
          © 2026 Raízes do Nordeste. Feito com dendê e afeto.
        </FooterBottom>
      </FooterInner>
    </FooterWrapper>
  );
}
