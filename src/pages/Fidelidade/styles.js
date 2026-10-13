import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Page = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 20px 80px;
`;

export const Banner = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(105deg, #f08a2a 0%, #e25816 46%, #b42318 100%);
  border-radius: 22px;
  padding: 28px 28px 24px;
  color: white;
  box-shadow: 0 12px 28px rgba(180, 35, 24, 0.18);

  @media (max-width: 768px) {
    padding: 22px 18px;
  }
`;

export const Estrela = styled.div`
  position: absolute;
  top: 22px;
  right: 28px;
  width: 72px;
  height: 72px;
  opacity: 0.9;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const Kicker = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 8px;
`;

export const Saudacao = styled.h1`
  font-size: clamp(32px, 4vw, 42px);
  font-weight: 800;
  letter-spacing: -0.6px;
  margin-bottom: 8px;
`;

export const BannerTexto = styled.p`
  max-width: 460px;
  font-size: 15px;
  line-height: 1.45;
  margin-bottom: 22px;
`;

export const PontosLinha = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const PontosCaixa = styled.div`
  min-width: 132px;
  background: rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  padding: 12px 16px 10px;
`;

export const PontosRotulo = styled.span`
  display: block;
  font-size: 12px;
  opacity: 0.9;
`;

export const PontosValor = styled.strong`
  display: block;
  font-size: 40px;
  line-height: 1.05;
  letter-spacing: -1px;
`;

export const NivelAtual = styled.span`
  display: block;
  margin-top: 2px;
  font-size: 13px;
`;

export const Progresso = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ProgressoTexto = styled.p`
  font-size: 14.5px;
  margin-bottom: 10px;

  strong {
    font-weight: 800;
  }
`;

export const Barra = styled.div`
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.28);
  overflow: hidden;
`;

export const BarraCheia = styled.div`
  height: 100%;
  width: ${(props) => props.$valor}%;
  border-radius: 999px;
  background: white;
`;

export const Secao = styled.section`
  margin-top: 34px;
`;

export const SecaoTitulo = styled.h2`
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 16px;
  letter-spacing: -0.3px;
`;

export const Niveis = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const NivelCard = styled.article`
  background: #fffaf4;
  border-radius: 16px;
  padding: 16px 18px 18px;
  box-shadow: ${theme.shadows.card};
  border: 1.5px solid ${(props) => (props.$atual ? '#e7a07a' : 'transparent')};
`;

export const NivelMeta = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.6px;
  color: ${theme.colors.primary};
  margin-bottom: 8px;

  svg {
    font-size: 13px;
  }
`;

export const NivelNome = styled.h3`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 4px;
`;

export const NivelDesc = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: ${theme.colors.textLight};
`;

export const Recompensas = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Recompensa = styled.article`
  background: #fffaf4;
  border-radius: 16px;
  padding: 16px;
  box-shadow: ${theme.shadows.card};
`;

export const Icone = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #f6efe6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 14px;
`;

export const RecompensaNome = styled.h3`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 4px;
`;

export const RecompensaPts = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13.5px;
  color: ${theme.colors.textLight};
  margin-bottom: 14px;

  svg {
    font-size: 13px;
    color: #c4a574;
  }
`;

export const Trocar = styled.button`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  border-radius: ${theme.borderRadius.full};
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  background: ${(props) =>
    props.disabled ? '#f0c36a' : theme.colors.secondaryBtn};
  color: white;
  opacity: ${(props) => (props.disabled ? 0.85 : 1)};

  &:hover {
    background: ${(props) =>
      props.disabled ? '#f0c36a' : theme.colors.secondaryBtnHover};
  }
  svg {
    font-size: 15px;
  }
`;
