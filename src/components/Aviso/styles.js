import styled, { keyframes } from 'styled-components';

const descer = keyframes`
  from { opacity: 0; transform: translate(-50%, -24px); }
  to   { opacity: 1; transform: translate(-50%, 0); }
`;

export const Faixa = styled.div`
  position: fixed;
  top: 74px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: calc(100% - 32px);
  padding: 12px 18px;
  background: #e7f8ee;
  border: 1px solid #b7e4c7;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(45, 122, 58, 0.12);
  color: #1b4332;
  font-size: 14px;
  font-weight: 600;
  animation: ${descer} 0.28s ease-out both;
  pointer-events: none;
`;

export const Check = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #2d7a3a;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    font-size: 14px;
  }
`;
