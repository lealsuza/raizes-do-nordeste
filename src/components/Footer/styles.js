import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const FooterWrapper = styled.footer`
  background: transparent;
  border-top: 1px solid ${theme.colors.border};
  padding: 56px 0 32px;

  @media (max-width: 768px) {
    padding: 40px 0 24px;
  }
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const FooterBrand = styled.div``;

export const FooterBrandName = styled.h3`
  font-size: 15px;
  font-weight: 800;
  color: ${theme.colors.text};
  margin-bottom: 6px;
`;

export const FooterBrandTagline = styled.p`
  font-size: 13.5px;
  color: ${theme.colors.textLight};
  line-height: 1.55;
  max-width: 260px;
`;

export const FooterCol = styled.div``;

export const FooterColTitle = styled.h4`
  font-size: 13px;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 14px;
`;

export const FooterColLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 9px;

  li a {
    font-size: 13.5px;
    color: ${theme.colors.textLight};
    transition: color 0.15s;
    cursor: pointer;
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

export const FooterUnidade = styled.span`
  font-size: 13.5px;
  color: ${theme.colors.textLight};
  cursor: default;
`;

export const FooterBottom = styled.div`
  text-align: center;
  font-size: 13px;
  color: ${theme.colors.textLight};
`;
