import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Page = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 36px 20px 72px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Banner = styled.section`
  background: linear-gradient(100deg, #f08a2a 0%, #e05a18 48%, #b42318 100%);
  border-radius: 22px;
  padding: 28px 32px;
  color: white;
  box-shadow: 0 10px 28px rgba(180, 35, 24, 0.18);

  @media (max-width: 768px) {
    padding: 22px 18px;
  }
`;

export const BannerIcone = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.18);
  margin-bottom: 12px;

  svg {
    font-size: 18px;
  }
`;

export const BannerTitulo = styled.h1`
  font-size: clamp(28px, 4vw, 36px);
  font-weight: 800;
  letter-spacing: -0.4px;
  margin-bottom: 6px;
`;

export const BannerTexto = styled.p`
  font-size: 14.5px;
  line-height: 1.45;
  opacity: 0.95;
`;

export const Card = styled.section`
  background: ${theme.colors.white};
  border-radius: 18px;
  padding: 18px 20px;
  box-shadow: ${theme.shadows.card};
`;

export const CardTopo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const Icone = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fde8dc;
  color: ${theme.colors.primary};

  svg {
    font-size: 16px;
  }
`;

export const CardTitulo = styled.h2`
  font-size: 16px;
  font-weight: 800;
  color: ${theme.colors.text};
  margin-bottom: 4px;
`;

export const CardTexto = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${theme.colors.textLight};
`;

export const PrefTitulo = styled.h2`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 6px;
`;

export const ExcluirBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  border: 1px solid ${theme.colors.border};
  background: #fffaf4;
  color: ${theme.colors.text};
  border-radius: ${theme.borderRadius.full};
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
  svg {
    font-size: 15px;
  }
`;

export const Dpo = styled.p`
  margin-top: 14px;
  font-size: 13px;
  color: ${theme.colors.textLight};
`;
