import styled, { keyframes } from 'styled-components';

import floralBg from '../../assets/floral-bg.jpg';
import { theme } from '../../styles/theme';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const HeroSection = styled.section`
  background-color: ${theme.colors.background};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${floralBg});
    background-size: 480px auto;
    background-repeat: repeat;
    opacity: 0.08;
    pointer-events: none;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 20px 72px;

  @media (max-width: 1024px) {
    gap: 40px;
    padding: 48px 20px 64px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
    padding: 40px 20px 56px;
    text-align: center;
  }
`;

export const HeroLeft = styled.div`
  flex: 1 1 0;
  min-width: 0;
  animation: ${fadeUp} 0.6s ease-out both;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(200, 75, 15, 0.25);
  border-radius: ${theme.borderRadius.full};
  padding: 5px 14px;
  margin-bottom: 26px;

  span {
    font-size: 12.5px;
    font-weight: 500;
    color: ${theme.colors.primary};
  }
`;

export const HeroHeading = styled.h1`
  font-size: clamp(32px, 5vw, 58px);
  font-weight: 800;
  line-height: 1.08;
  color: ${theme.colors.text};
  margin-bottom: 20px;
  letter-spacing: -1px;

  em {
    font-style: italic;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.serif};
    font-weight: 700;
  }
`;

export const HeroDesc = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${theme.colors.textLight};
  max-width: 420px;
  margin-bottom: 36px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const HeroBtns = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 44px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const BtnPrimary = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.full};
  padding: 13px 26px;
  font-size: 14.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${theme.colors.primaryHover};
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(200, 75, 15, 0.32);
  }

  svg {
    font-size: 17px;
  }
`;

export const BtnSecondary = styled.button`
  display: inline-flex;
  align-items: center;
  background: ${theme.colors.secondaryBtn};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.full};
  padding: 13px 26px;
  font-size: 14.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${theme.colors.secondaryBtnHover};
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(232, 160, 32, 0.35);
  }
`;

export const TrustBar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 14px;
  }
`;

export const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: ${theme.colors.textLight};

  svg {
    font-size: 14px;
    color: ${theme.colors.primary};
    flex-shrink: 0;
  }
  strong {
    color: ${theme.colors.text};
    font-weight: 600;
  }
`;

export const TrustDot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: ${theme.colors.border};
  flex-shrink: 0;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const HeroRight = styled.div`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  justify-content: center;
  animation: ${fadeUp} 0.6s ease-out 0.15s both;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeroImgWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.xl};
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.16);

  @media (max-width: 1024px) {
    height: 340px;
  }

  @media (max-width: 768px) {
    height: 280px;
    border-radius: ${theme.borderRadius.lg};
  }
`;

export const PratoBadge = styled.div`
  position: absolute;
  bottom: 20px;
  left: -16px;
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: 12px 18px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 180px;

  @media (max-width: 768px) {
    left: 12px;
    bottom: 16px;
  }
`;

export const PratoLabel = styled.span`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${theme.colors.textLight};
`;

export const PratoNome = styled.span`
  font-size: 13.5px;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const Section = styled.section`
  background: transparent;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 20px;

  @media (max-width: 768px) {
    padding: 48px 20px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 36px;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const SectionTitle = styled.div`
  h2 {
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 800;
    color: ${theme.colors.text};
    margin-bottom: 4px;
    letter-spacing: -0.5px;
  }
  p {
    font-size: 14px;
    color: ${theme.colors.textLight};
  }
`;

export const SectionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.primary};
  white-space: nowrap;
  cursor: pointer;
  transition: opacity 0.15s;
  margin-top: 4px;

  &:hover {
    opacity: 0.75;
  }
  svg {
    font-size: 15px;
  }
`;

export const CampanhasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CampanhaCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 18px;
  padding: 24px;
  box-shadow: ${theme.shadows.card};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.22s;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: ${theme.shadows.cardHover};
    transform: translateY(-3px);
  }
`;

export const DecoCircle = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(220, 150, 120, 0.18);
  pointer-events: none;
`;

export const TagPill = styled.span`
  display: inline-block;
  background: ${(props) => props.$color || theme.colors.green};
  color: white;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: ${theme.borderRadius.full};
  margin-bottom: 12px;
  letter-spacing: 0.3px;
`;

export const CampanhaTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 6px;
  line-height: 1.25;
`;

export const CampanhaDesc = styled.p`
  font-size: 13px;
  color: ${theme.colors.textLight};
  line-height: 1.5;
`;

export const CampanhaBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CupomPill = styled.span`
  background: #f0eae2;
  color: ${theme.colors.textLight};
  font-size: 11.5px;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: ${theme.borderRadius.full};
  letter-spacing: 0.5px;
  font-family: 'Courier New', monospace;
`;

export const UsarLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
  color: ${theme.colors.primary};
  cursor: pointer;
  transition: opacity 0.15s;
  white-space: nowrap;

  &:hover {
    opacity: 0.75;
  }
  svg {
    font-size: 14px;
  }
`;

export const PratosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const PratoCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 18px;
  overflow: hidden;
  box-shadow: ${theme.shadows.card};
  transition: all 0.22s;
  cursor: pointer;

  &:hover {
    box-shadow: ${theme.shadows.cardHover};
    transform: translateY(-4px);
  }
`;

export const PratoImg = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #e8ddd3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${PratoCard}:hover & img {
    transform: scale(1.04);
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const PratoBody = styled.div`
  padding: 18px 18px 20px;
`;

export const PratoHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
`;

export const PratoNomeCard = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: ${theme.colors.text};
  line-height: 1.3;
  flex: 1;
`;

export const PratoPreco = styled.span`
  font-size: 14.5px;
  font-weight: 700;
  color: ${theme.colors.primary};
  white-space: nowrap;
`;

export const PratoDescCard = styled.p`
  font-size: 13px;
  color: ${theme.colors.textLight};
  line-height: 1.55;
`;

export const UnidadesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const UnidadeCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: 20px;
  box-shadow: ${theme.shadows.card};
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${theme.colors.primary};
    box-shadow: 0 4px 16px rgba(200, 75, 15, 0.1);
    transform: translateY(-2px);
  }
`;

export const EstadoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;

  svg {
    color: ${theme.colors.primary};
    font-size: 14px;
    flex-shrink: 0;
  }
  span {
    font-size: 11.5px;
    font-weight: 700;
    color: ${theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const CidadeNome = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 5px;
`;

export const InfoText = styled.p`
  font-size: 13px;
  color: ${theme.colors.textLight};
  line-height: 1.5;
`;
