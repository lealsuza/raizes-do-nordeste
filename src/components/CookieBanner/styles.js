import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Overlay = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  width: calc(100% - 40px);
  max-width: 660px;
`;

export const Banner = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  border: 1px solid ${theme.colors.border};
`;

export const Icon = styled.span`
  font-size: 20px;
  flex-shrink: 0;
`;

export const Text = styled.p`
  font-size: 13px;
  color: ${theme.colors.textLight};
  line-height: 1.5;
  flex: 1;

  a {
    color: ${theme.colors.primary};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const AcceptBtn = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.full};
  padding: 9px 18px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.18s;

  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;

export const CloseBtn = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.textLight};
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: color 0.15s;

  &:hover {
    color: ${theme.colors.text};
  }
  svg {
    font-size: 18px;
  }
`;
