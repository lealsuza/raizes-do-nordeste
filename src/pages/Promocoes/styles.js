import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Page = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  padding: 42px 20px 80px;
`;

export const Titulo = styled.h1`
  font-family: ${theme.fonts.serif};
  font-size: clamp(30px, 4vw, 40px);
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 6px;
`;

export const Subtitulo = styled.p`
  color: ${theme.colors.textLight};
  font-size: 15px;
  margin-bottom: 28px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  position: relative;
  overflow: hidden;
  background: #fffaf4;
  border: 1px solid #f3e7d8;
  border-radius: 18px;
  padding: 22px 22px 18px;
  box-shadow: ${theme.shadows.card};
`;

export const Blob = styled.span`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  background: rgba(232, 176, 140, 0.28);
  width: ${(props) => (props.$pequeno ? '70px' : '120px')};
  height: ${(props) => (props.$pequeno ? '70px' : '120px')};
  top: ${(props) => (props.$pequeno ? 'auto' : '-36px')};
  bottom: ${(props) => (props.$pequeno ? '-24px' : 'auto')};
  right: ${(props) => (props.$pequeno ? '54px' : '-28px')};
  opacity: ${(props) => (props.$pequeno ? 0.7 : 1)};
`;

export const Tag = styled.span`
  display: inline-block;
  background: ${theme.colors.green};
  color: white;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.3px;
  padding: 4px 10px;
  border-radius: ${theme.borderRadius.full};
  margin-bottom: 12px;
`;

export const Nome = styled.h2`
  position: relative;
  font-size: 22px;
  font-weight: 800;
  color: ${theme.colors.text};
  margin-bottom: 6px;
`;

export const Desc = styled.p`
  position: relative;
  font-size: 14.5px;
  line-height: 1.45;
  color: ${theme.colors.textLight};
  margin-bottom: 18px;
  max-width: 340px;
`;

export const CupomLinha = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Codigo = styled.span`
  flex: 1;
  text-align: center;
  background: #f3e6d4;
  color: #8d7b6b;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.6px;
  border-radius: ${theme.borderRadius.full};
  padding: 10px 14px;
`;

export const Copiar = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${theme.colors.secondaryBtn};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.full};
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background: ${theme.colors.secondaryBtnHover};
  }
  svg {
    font-size: 15px;
  }
`;

export const Aplicar = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 14px;
  padding: 0;
  border: none;
  background: none;
  color: ${theme.colors.primary};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
  svg {
    font-size: 15px;
  }
`;
