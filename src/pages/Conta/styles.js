import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Page = styled.div`
  min-height: 52vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 72px 20px 96px;
  text-align: center;
`;

export const Avatar = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary};
  color: white;
  font-size: 30px;
  font-weight: 800;
  box-shadow: 0 10px 24px rgba(200, 75, 15, 0.28);
  margin-bottom: 18px;
`;

export const Nome = styled.h1`
  font-family: ${theme.fonts.serif};
  font-size: 34px;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 6px;
`;

export const Email = styled.p`
  color: ${theme.colors.textLight};
  font-size: 15px;
  margin-bottom: 22px;
`;

export const Acoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const PedidosBtn = styled.button`
  display: inline-flex;
  align-items: center;
  border: none;
  border-radius: ${theme.borderRadius.full};
  background: ${theme.colors.secondaryBtn};
  color: white;
  font-size: 14.5px;
  font-weight: 700;
  padding: 11px 18px;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.secondaryBtnHover};
  }
`;

export const SairBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1.5px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  background: white;
  color: ${theme.colors.text};
  font-size: 14.5px;
  font-weight: 600;
  padding: 10px 16px;
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
  svg {
    font-size: 16px;
  }
`;
