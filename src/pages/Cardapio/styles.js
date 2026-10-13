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

export const Banner = styled.section`
  background: linear-gradient(100deg, #f08a2a 0%, #e06a1c 42%, #c44512 100%);
  border-radius: 22px;
  padding: 28px 32px 24px;
  color: white;
  box-shadow: 0 10px 28px rgba(196, 69, 18, 0.22);

  @media (max-width: 768px) {
    padding: 22px 18px 18px;
    border-radius: 18px;
  }
`;

export const BannerKicker = styled.p`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  opacity: 0.9;
  margin-bottom: 6px;
`;

export const BannerTitle = styled.h1`
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 800;
  letter-spacing: -0.6px;
  line-height: 1.1;
  margin-bottom: 8px;
`;

export const BannerMeta = styled.p`
  font-size: 14px;
  opacity: 0.92;
`;

export const StateRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
`;

export const StatePill = styled.button`
  border-radius: ${theme.borderRadius.full};
  padding: 7px 14px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  background: ${(props) => (props.$active ? '#fff' : 'transparent')};
  color: ${(props) => (props.$active ? theme.colors.text : '#fff')};
  border: 1.5px solid
    ${(props) => (props.$active ? '#fff' : 'rgba(255,255,255,0.75)')};

  &:hover {
    background: ${(props) =>
      props.$active ? '#fff' : 'rgba(255,255,255,0.16)'};
  }
`;

export const SearchWrap = styled.div`
  position: relative;
  margin: 22px 0 16px;

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: ${theme.colors.textLight};
    font-size: 16px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 46px;
  border-radius: ${theme.borderRadius.full};
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.white};
  padding: 0 18px 0 42px;
  font-size: 14px;
  color: ${theme.colors.text};
  outline: none;

  &::placeholder {
    color: #9a8b7c;
  }
  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 26px;
`;

export const FilterChip = styled.button`
  border-radius: ${theme.borderRadius.full};
  padding: 8px 16px;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  background: ${(props) =>
    props.$active ? theme.colors.primary : theme.colors.white};
  color: ${(props) => (props.$active ? '#fff' : theme.colors.text)};
  border: 1px solid
    ${(props) => (props.$active ? theme.colors.primary : theme.colors.border)};

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${(props) => (props.$active ? '#fff' : theme.colors.primary)};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  background: ${theme.colors.white};
  border-radius: 18px;
  overflow: hidden;
  box-shadow: ${theme.shadows.card};
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #e8ddd3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const Destaque = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${theme.colors.green};
  color: white;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${theme.borderRadius.full};
`;

export const CardBody = styled.div`
  padding: 18px 18px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Categoria = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #8d7d70;
  margin-bottom: 6px;
`;

export const Nome = styled.h2`
  font-size: 17px;
  font-weight: 800;
  color: ${theme.colors.text};
  line-height: 1.25;
  margin-bottom: 6px;
`;

export const Desc = styled.p`
  font-size: 13.5px;
  line-height: 1.5;
  color: ${theme.colors.textLight};
  margin-bottom: 16px;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
`;

export const Preco = styled.span`
  font-size: 18px;
  font-weight: 800;
  color: ${theme.colors.primary};
`;

export const AddBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: white;
  color: ${theme.colors.primary};
  border: 1.5px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.full};
  padding: 8px 14px;
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s;

  &:hover {
    background: ${theme.colors.primary};
    color: white;
  }

  svg {
    font-size: 15px;
  }
`;

export const Empty = styled.p`
  text-align: center;
  color: ${theme.colors.textLight};
  font-size: 15px;
  padding: 32px 0 12px;
`;
