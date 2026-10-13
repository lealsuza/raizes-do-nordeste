import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Page = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Titulo = styled.h1`
  font-family: ${theme.fonts.serif};
  font-size: clamp(28px, 4vw, 36px);
  font-weight: 700;
  color: ${theme.colors.text};
  text-align: center;
`;

export const Subtitulo = styled.p`
  margin-top: 8px;
  margin-bottom: 28px;
  text-align: center;
  color: ${theme.colors.textLight};
  font-size: 15px;
`;

export const Card = styled.form`
  width: 100%;
  max-width: 440px;
  background: #fffaf4;
  border: 1px solid #f0e4d4;
  border-radius: 22px;
  padding: 22px;
  box-shadow: ${theme.shadows.card};
`;

export const Abas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  background: #f3e6d6;
  border-radius: ${theme.borderRadius.full};
  padding: 4px;
  margin-bottom: 22px;
`;

export const Aba = styled.button`
  border: none;
  border-radius: ${theme.borderRadius.full};
  padding: 10px 12px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  background: ${(props) => (props.$active ? '#fffaf4' : 'transparent')};
  color: ${(props) => (props.$active ? theme.colors.text : '#8d7b6b')};
`;

export const Campo = styled.label`
  display: block;
  margin-bottom: 14px;
  font-size: 13.5px;
  font-weight: 600;
  color: ${theme.colors.text};

  input {
    display: block;
    width: 100%;
    height: 46px;
    margin-top: 6px;
    border-radius: ${theme.borderRadius.full};
    border: 1px solid #eadccb;
    background: white;
    padding: 0 16px;
    font-size: 14px;
    font-weight: 500;
    outline: none;
  }

  input:focus {
    border-color: ${theme.colors.primary};
  }
`;

export const Erro = styled.p`
  margin: -4px 0 12px;
  font-size: 13px;
  color: #a33a12;
`;

export const Enviar = styled.button`
  width: 100%;
  margin-top: 6px;
  border: none;
  border-radius: ${theme.borderRadius.full};
  background: ${theme.colors.primary};
  color: white;
  font-size: 15px;
  font-weight: 700;
  padding: 13px 18px;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;

export const Protecao = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 18px;
  font-size: 13px;
  color: ${theme.colors.textLight};

  svg {
    font-size: 14px;
  }
`;

export const Aceite = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 4px 0 16px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.45;
  color: ${theme.colors.textLight};
  cursor: pointer;

  input {
    appearance: none;
    width: 18px;
    height: 18px;
    margin-top: 1px;
    flex-shrink: 0;
    border: 1.5px solid ${theme.colors.primary};
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }

  input:checked {
    background: ${theme.colors.primary};
    box-shadow: inset 0 0 0 3px white;
  }
`;

export const PoliticaLink = styled.button`
  border: none;
  background: none;
  padding: 0;
  color: ${theme.colors.text};
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
`;
