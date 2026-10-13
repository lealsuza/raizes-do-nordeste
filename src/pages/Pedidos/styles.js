import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Page = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 40px 20px 80px;
`;

export const Titulo = styled.h1`
  font-family: ${theme.fonts.serif};
  font-size: clamp(30px, 4vw, 38px);
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 22px;
`;

export const Lista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Card = styled.article`
  background: #fffaf4;
  border: 1px solid #f3e7d8;
  border-radius: 22px;
  padding: 22px 22px 18px;
  box-shadow: ${theme.shadows.card};
`;

export const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;
`;

export const Quando = styled.p`
  font-size: 12.5px;
  color: #9a8b7c;
  margin-bottom: 6px;
`;

export const Codigo = styled.h2`
  font-size: 16px;
  font-weight: 800;
  color: ${theme.colors.text};
`;

export const Local = styled.p`
  margin-top: 3px;
  font-size: 13.5px;
  color: ${theme.colors.textLight};
`;

export const Totais = styled.div`
  text-align: right;
  flex-shrink: 0;

  span {
    display: block;
    font-size: 11px;
    letter-spacing: 0.8px;
    color: #9a8b7c;
    font-weight: 700;
  }

  strong {
    display: block;
    margin-top: 2px;
    font-size: 26px;
    letter-spacing: -0.4px;
    color: ${theme.colors.primary};
  }

  em {
    display: block;
    margin-top: 2px;
    font-style: normal;
    font-size: 13px;
    font-weight: 700;
    color: ${theme.colors.green};
  }
`;

export const Trilha = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 26px 0 18px;
`;

export const Barra = styled.div`
  position: absolute;
  top: 18px;
  left: 12.5%;
  right: 12.5%;
  height: 5px;
  border-radius: 999px;
  background: #f0e4d4;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${(props) => props.$progresso * 100}%;
    background: linear-gradient(90deg, #f0a020 0%, #c84b0f 55%, #8d1c12 100%);
  }
`;

export const Etapa = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
`;

export const Circulo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.$ativo ? theme.colors.primary : '#f6eee4')};
  color: ${(props) => (props.$ativo ? 'white' : '#c4b3a2')};

  svg {
    font-size: 18px;
  }
`;

export const EtapaNome = styled.span`
  font-size: 12.5px;
  font-weight: 600;
  color: ${(props) => (props.$ativo ? theme.colors.text : '#b3a394')};
  max-width: 90px;
  line-height: 1.25;
`;

export const Divisor = styled.div`
  height: 1px;
  background: #f0e4d4;
  margin-bottom: 14px;
`;

export const Itens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemLinha = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  background: #f7f0e6;
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 14.5px;
  color: ${theme.colors.text};

  strong {
    font-weight: 600;
  }
`;

export const Acao = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

export const Simular = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${theme.colors.secondaryBtn};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.full};
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.secondaryBtnHover};
  }
  svg {
    font-size: 16px;
  }
`;

export const Vazio = styled.p`
  background: #fffaf4;
  border-radius: 18px;
  padding: 28px 20px;
  text-align: center;
  color: ${theme.colors.textLight};
`;
