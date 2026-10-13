import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Page = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 20px 72px;

  @media (max-width: 768px) {
    padding: 24px 20px 56px;
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 22px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
`;

export const Titulo = styled.h1`
  font-size: clamp(28px, 4vw, 36px);
  font-weight: 800;
  letter-spacing: -0.5px;
  color: ${theme.colors.text};
`;

export const Subtitulo = styled.p`
  margin-top: 4px;
  margin-bottom: 8px;
  font-size: 14px;
  color: ${theme.colors.textLight};
`;

export const Card = styled.section`
  background: ${theme.colors.white};
  border-radius: 18px;
  padding: 18px;
  box-shadow: ${theme.shadows.card};
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;

  & + & {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #f0e6da;
  }
`;

export const Foto = styled.img`
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 14px;
  background: #e8ddd3;
`;

export const ItemNome = styled.h2`
  font-size: 15.5px;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const ItemPreco = styled.p`
  margin-top: 2px;
  font-size: 13px;
  color: ${theme.colors.textLight};
`;

export const Qtd = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  background: #f6f0e8;
  border-radius: ${theme.borderRadius.full};
  padding: 4px;
`;

export const QtdBtn = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: white;
  color: ${theme.colors.text};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primary};
  }
  svg {
    font-size: 14px;
  }
`;

export const QtdValor = styled.span`
  min-width: 16px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`;

export const ItemLado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

export const LinhaTotal = styled.strong`
  font-size: 16px;
  color: ${theme.colors.text};
`;

export const Remover = styled.button`
  border: none;
  background: transparent;
  color: #b9a89a;
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: ${theme.colors.primary};
  }
  svg {
    font-size: 16px;
  }
`;

export const BlocoTitulo = styled.h2`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 14px;
`;

export const CupomLinha = styled.form`
  display: flex;
  gap: 10px;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const CupomInput = styled.input`
  flex: 1;
  height: 44px;
  border-radius: ${theme.borderRadius.full};
  border: 1px solid ${theme.colors.border};
  padding: 0 16px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

export const CupomBtn = styled.button`
  height: 44px;
  padding: 0 18px;
  border-radius: ${theme.borderRadius.full};
  border: 1.5px solid ${theme.colors.border};
  background: white;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
`;

export const CupomMsg = styled.p`
  margin-top: 10px;
  font-size: 13px;
  color: ${(props) => (props.$erro ? '#a33a12' : theme.colors.green)};
`;

export const Pagamentos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Pagamento = styled.button`
  min-height: 74px;
  border-radius: 14px;
  border: 1.5px solid
    ${(props) => (props.$active ? '#e7a07a' : theme.colors.border)};
  background: ${(props) => (props.$active ? '#fde8dc' : 'white')};
  color: ${theme.colors.text};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  svg {
    font-size: 18px;
  }
`;

export const Nota = styled.p`
  margin-top: 14px;
  font-size: 12.5px;
  line-height: 1.45;
  color: ${theme.colors.textLight};
`;

export const Resumo = styled.aside`
  background: ${theme.colors.white};
  border-radius: 18px;
  padding: 20px;
  box-shadow: ${theme.shadows.card};
  position: sticky;
  top: 80px;

  @media (max-width: 900px) {
    position: static;
  }
`;

export const ResumoTitulo = styled.h2`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 16px;
`;

export const ResumoLinha = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 14px;
  color: ${theme.colors.textLight};
  margin-bottom: 10px;

  strong {
    color: ${theme.colors.text};
    font-weight: 600;
  }
`;

export const TotalLinha = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 16px 0 18px;
  padding-top: 12px;
  border-top: 1px solid #f0e6da;

  span {
    font-size: 15px;
    font-weight: 700;
  }
  strong {
    font-size: 28px;
    color: ${theme.colors.primary};
    letter-spacing: -0.5px;
  }
`;

export const PagarBtn = styled.button`
  width: 100%;
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
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Pontos = styled.p`
  margin-top: 12px;
  text-align: center;
  font-size: 12.5px;
  color: ${theme.colors.textLight};
`;

export const Vazio = styled.div`
  background: white;
  border-radius: 18px;
  padding: 28px 20px;
  text-align: center;
  color: ${theme.colors.textLight};

  button {
    margin-top: 14px;
    border: none;
    background: ${theme.colors.primary};
    color: white;
    border-radius: ${theme.borderRadius.full};
    padding: 10px 18px;
    font-weight: 700;
    cursor: pointer;
  }
`;
