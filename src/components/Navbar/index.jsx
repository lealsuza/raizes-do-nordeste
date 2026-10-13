import { useEffect, useRef, useState } from 'react';
import {
  FiShoppingCart,
  FiUser,
  FiChevronDown,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { useAppState } from '../../context/AppState';
import { unidades } from '../../data/mockData';

import {
  Nav,
  NavInner,
  LogoArea,
  LogoMark,
  LogoText,
  NavLinks,
  NavLink,
  NavRight,
  UnitWrap,
  UnitSelector,
  UnitMenu,
  UnitOption,
  CartBtn,
  CartBadge,
  LoginBtn,
  HamburgerBtn,
  MobileMenu,
  MobileLink,
  MobileDivider,
  MobileUnitList,
  MobileUnitOption,
} from './styles';

const links = [
  { to: '/', label: 'Início' },
  { to: '/cardapio', label: 'Cardápio' },
  { to: '/pedidos', label: 'Pedidos' },
  { to: '/fidelidade', label: 'Fidelidade' },
];

export default function Navbar() {
  const { unidadeId, setUnidadeId, quantidade, usuario } = useAppState();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [unitOpen, setUnitOpen] = useState(false);
  const unitRef = useRef(null);
  const unidade = unidades.find((u) => u.id === unidadeId) || unidades[0];

  useEffect(() => {
    const fechar = (event) => {
      if (unitRef.current && !unitRef.current.contains(event.target)) {
        setUnitOpen(false);
      }
    };
    document.addEventListener('mousedown', fechar);
    return () => document.removeEventListener('mousedown', fechar);
  }, []);

  const irPara = (to) => {
    navigate(to);
    setMenuOpen(false);
  };

  const escolherUnidade = (id) => {
    setUnidadeId(id);
    setUnitOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      <Nav>
        <NavInner>
          <LogoArea onClick={() => irPara('/')}>
            <LogoMark src={logo} alt="" />
            <LogoText>
              <span>Raízes do Nordeste</span>
              <span>sabor & tradição</span>
            </LogoText>
          </LogoArea>

          <NavLinks>
            {links.map((link) => (
              <NavLink key={link.to} $active={pathname === link.to}>
                <a
                  href={link.to}
                  onClick={(event) => {
                    event.preventDefault();
                    irPara(link.to);
                  }}
                >
                  {link.label}
                </a>
              </NavLink>
            ))}
          </NavLinks>

          <NavRight>
            <UnitWrap ref={unitRef}>
              <UnitSelector
                type="button"
                aria-haspopup="listbox"
                aria-expanded={unitOpen}
                onClick={() => setUnitOpen((open) => !open)}
              >
                {unidade.cidade} — {unidade.ponto}
                <FiChevronDown />
              </UnitSelector>
              {unitOpen && (
                <UnitMenu role="listbox">
                  {unidades.map((u) => (
                    <li key={u.id}>
                      <UnitOption
                        type="button"
                        $active={u.id === unidade.id}
                        onClick={() => escolherUnidade(u.id)}
                      >
                        {u.cidade} — {u.ponto}
                      </UnitOption>
                    </li>
                  ))}
                </UnitMenu>
              )}
            </UnitWrap>
            <CartBtn
              type="button"
              onClick={() => irPara('/carrinho')}
              aria-label="Abrir carrinho"
            >
              <FiShoppingCart />
              <span>Carrinho</span>
              {quantidade > 0 && <CartBadge>{quantidade}</CartBadge>}
            </CartBtn>
            <LoginBtn
              type="button"
              onClick={() => irPara(usuario ? '/conta' : '/login')}
            >
              <FiUser />
              {usuario ? usuario.nome.trim().split(/\s+/)[0] : 'Entrar'}
            </LoginBtn>
            <HamburgerBtn onClick={() => setMenuOpen((o) => !o)}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </HamburgerBtn>
          </NavRight>
        </NavInner>
      </Nav>

      <MobileMenu $open={menuOpen}>
        {links.map((link) => (
          <MobileLink
            key={link.to}
            $active={pathname === link.to}
            href={link.to}
            onClick={(event) => {
              event.preventDefault();
              irPara(link.to);
            }}
          >
            {link.label}
          </MobileLink>
        ))}
        <MobileDivider />
        <MobileUnitList>
          {unidades.map((u) => (
            <MobileUnitOption
              key={u.id}
              type="button"
              $active={u.id === unidade.id}
              onClick={() => escolherUnidade(u.id)}
            >
              {u.cidade} — {u.ponto}
            </MobileUnitOption>
          ))}
        </MobileUnitList>
      </MobileMenu>
    </>
  );
}
