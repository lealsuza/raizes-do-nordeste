import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: color-mix(in srgb, ${theme.colors.background} 72%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid
    color-mix(in srgb, ${theme.colors.border} 55%, transparent);
`;

export const NavInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const LogoMark = styled.img`
  width: 42px;
  height: 42px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 8px;
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-weight: 700;
    font-size: 13.5px;
    color: ${theme.colors.text};
    line-height: 1.25;
    white-space: nowrap;
  }

  span:last-child {
    font-size: 11px;
    color: ${theme.colors.textLight};
    line-height: 1.25;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: ${(props) =>
      props.$active ? theme.colors.white : theme.colors.textLight};
    background: ${(props) =>
      props.$active ? theme.colors.primary : 'transparent'};
    padding: 6px 16px;
    border-radius: ${theme.borderRadius.full};
    transition: all 0.18s;
    cursor: pointer;
    display: block;

    &:hover {
      background: ${(props) =>
        props.$active ? theme.colors.primaryHover : '#F0E0D0'};
      color: ${(props) =>
        props.$active ? theme.colors.white : theme.colors.primary};
    }
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

export const UnitWrap = styled.div`
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const UnitSelector = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #f8f0e8;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  color: ${theme.colors.text};
  cursor: pointer;
  transition: all 0.18s;
  white-space: nowrap;

  &:hover {
    border-color: ${theme.colors.primary};
  }

  svg {
    color: ${theme.colors.textLight};
    font-size: 13px;
  }
`;

export const UnitMenu = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 120;
  min-width: 230px;
  margin: 0;
  padding: 6px;
  list-style: none;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.border};
  border-radius: 14px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
`;

export const UnitOption = styled.button`
  width: 100%;
  text-align: left;
  background: ${(props) => (props.$active ? '#FFF3E0' : 'transparent')};
  color: ${(props) =>
    props.$active ? theme.colors.primary : theme.colors.text};
  border: none;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #fff3e0;
  }
`;

export const CartBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 7px;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.full};
  padding: 8px 18px;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s;
  white-space: nowrap;

  &:hover {
    background: ${theme.colors.primaryHover};
  }

  svg {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 8px 14px;
    span {
      display: none;
    }
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -7px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 999px;
  background: #c62828;
  color: white;
  border: 2px solid white;
  font-size: 11px;
  font-weight: 800;
  line-height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 1.5px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  padding: 7px 16px;
  font-size: 13.5px;
  font-weight: 500;
  color: ${theme.colors.text};
  cursor: pointer;
  transition: all 0.18s;
  white-space: nowrap;

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }

  svg {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const HamburgerBtn = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.text};
  padding: 4px;

  svg {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$open ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: color-mix(in srgb, ${theme.colors.background} 82%, transparent);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid
      color-mix(in srgb, ${theme.colors.border} 55%, transparent);
    padding: 16px 20px 24px;
    gap: 4px;
    z-index: 99;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

export const MobileLink = styled.a`
  font-size: 15px;
  font-weight: 500;
  color: ${(props) =>
    props.$active ? theme.colors.primary : theme.colors.text};
  background: ${(props) => (props.$active ? '#FFF3E0' : 'transparent')};
  padding: 12px 16px;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: #fff3e0;
    color: ${theme.colors.primary};
  }
`;

export const MobileDivider = styled.div`
  height: 1px;
  background: ${theme.colors.border};
  margin: 8px 0;
`;

export const MobileUnitList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MobileUnitOption = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  gap: 6px;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 600;
  color: ${(props) =>
    props.$active ? theme.colors.primary : theme.colors.text};
  background: ${(props) => (props.$active ? '#FFF3E0' : '#F8F0E8')};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
`;
