import {
  FiArrowRight,
  FiClock,
  FiStar,
  FiShield,
  FiMapPin,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import heroImg from '../../assets/hero.jpg';
import { useAppState } from '../../context/AppState';
import { imagensPratos, formatarPreco } from '../../data/imagens';
import { unidades, cardapios } from '../../data/mockData';

import {
  HeroSection,
  HeroLeft,
  HeroTag,
  HeroHeading,
  HeroDesc,
  HeroBtns,
  BtnPrimary,
  BtnSecondary,
  TrustBar,
  TrustItem,
  TrustDot,
  HeroRight,
  HeroImgWrapper,
  HeroImg,
  PratoBadge,
  PratoLabel,
  PratoNome,
  Section,
  SectionHeader,
  SectionTitle,
  SectionLink,
  CampanhasGrid,
  CampanhaCard,
  DecoCircle,
  TagPill,
  CampanhaTitle,
  CampanhaDesc,
  CampanhaBottom,
  CupomPill,
  UsarLink,
  PratosGrid,
  PratoCard,
  PratoImg,
  PratoBody,
  PratoHeader,
  PratoNomeCard,
  PratoPreco,
  PratoDescCard,
  UnidadesGrid,
  UnidadeCard,
  EstadoRow,
  CidadeNome,
  InfoText,
  HeroContent,
} from './styles';

const campanhas = [
  {
    id: 1,
    tag: '20% OFF',
    tagColor: '#2D7A3A',
    title: 'Terça do Forró',
    desc: '20% off em todos os pratos principais às terças-feiras.',
    cupom: 'FORRO20',
  },
  {
    id: 2,
    tag: 'Brinde',
    tagColor: '#2D7A3A',
    title: 'Primeira Visita',
    desc: 'Ganhe uma tapioca de coco no seu primeiro pedido pelo app.',
    cupom: 'BEMVINDO',
  },
  {
    id: 3,
    tag: '15% OFF',
    tagColor: '#2D7A3A',
    title: 'Combo Nordestino',
    desc: 'Moqueca + baião + cajuína com 15% de desconto.',
    cupom: 'NORDESTE15',
  },
];

export default function Home() {
  const { setUnidadeId, unidadeId } = useAppState();
  const navigate = useNavigate();
  const unidade = unidades.find((u) => u.id === unidadeId) || unidades[0];
  const cardapio = cardapios[unidade.estado] || [];
  const destaques = [
    ...cardapio.filter((item) => item.destaque),
    ...cardapio.filter((item) => !item.destaque),
  ].slice(0, 3);

  const abrirCardapio = (id) => {
    if (id) {
      setUnidadeId(id);
    }
    navigate('/cardapio');
  };

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroLeft>
            <HeroTag>
              <span>✿</span>
              <span>Novo · Clube Raízes de fidelidade</span>
            </HeroTag>

            <HeroHeading>
              O Nordeste
              <br />
              servido{' '}
              <em>
                na
                <br />
                sua mesa
              </em>
              .
            </HeroHeading>

            <HeroDesc>
              Cardápio dinâmico por unidade, pedido em poucos toques e
              acompanhamento em tempo real. Do primeiro acarajé ao último gole
              de cajuína.
            </HeroDesc>

            <HeroBtns>
              <BtnPrimary type="button" onClick={() => abrirCardapio()}>
                Ver cardápio <FiArrowRight />
              </BtnPrimary>
              <BtnSecondary
                type="button"
                onClick={() => navigate('/fidelidade')}
              >
                Clube de fidelidade
              </BtnSecondary>
            </HeroBtns>

            <TrustBar>
              <TrustItem>
                <FiClock /> Pronto em ~30 min
              </TrustItem>
              <TrustDot />
              <TrustItem>
                <FiStar /> <strong>4.9</strong> · 12k avaliações
              </TrustItem>
              <TrustDot />
              <TrustItem>
                <FiShield /> Conforme a LGPD
              </TrustItem>
            </TrustBar>
          </HeroLeft>

          <HeroRight>
            <HeroImgWrapper>
              <HeroImg src={heroImg} alt="Pratos nordestinos variados" />
              <PratoBadge>
                <PratoLabel>Prato da Casa</PratoLabel>
                <PratoNome>Moqueca na panela de barro</PratoNome>
              </PratoBadge>
            </HeroImgWrapper>
          </HeroRight>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionHeader>
          <SectionTitle>
            <h2>Campanhas do mês</h2>
            <p>Cupons ativos direto na cozinha.</p>
          </SectionTitle>
          <SectionLink
            href="/promocoes"
            onClick={(event) => {
              event.preventDefault();
              navigate('/promocoes');
            }}
          >
            Ver todas <FiArrowRight />
          </SectionLink>
        </SectionHeader>

        <CampanhasGrid>
          {campanhas.map((c) => (
            <CampanhaCard key={c.id}>
              <DecoCircle />
              <div>
                <TagPill $color={c.tagColor}>{c.tag}</TagPill>
                <CampanhaTitle>{c.title}</CampanhaTitle>
                <CampanhaDesc>{c.desc}</CampanhaDesc>
              </div>
              <CampanhaBottom>
                <CupomPill>{c.cupom}</CupomPill>
                <UsarLink href="#!">
                  Usar agora <FiArrowRight />
                </UsarLink>
              </CampanhaBottom>
            </CampanhaCard>
          ))}
        </CampanhasGrid>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>
            <h2>Destaques da sua unidade</h2>
            <p>
              O que a cozinha de {unidade.cidade} — {unidade.ponto} está
              servindo hoje.
            </p>
          </SectionTitle>
        </SectionHeader>

        <PratosGrid>
          {destaques.map((p) => (
            <PratoCard key={p.id}>
              <PratoImg>
                <img src={imagensPratos[p.imagem]} alt={p.nome} />
              </PratoImg>
              <PratoBody>
                <PratoHeader>
                  <PratoNomeCard>{p.nome}</PratoNomeCard>
                  <PratoPreco>{formatarPreco(p.preco)}</PratoPreco>
                </PratoHeader>
                <PratoDescCard>{p.desc}</PratoDescCard>
              </PratoBody>
            </PratoCard>
          ))}
        </PratosGrid>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>
            <h2>Onde nos encontrar</h2>
          </SectionTitle>
        </SectionHeader>

        <UnidadesGrid>
          {unidades.map((u) => (
            <UnidadeCard key={u.id} onClick={() => abrirCardapio(u.id)}>
              <EstadoRow>
                <FiMapPin />
                <span>{u.estado}</span>
              </EstadoRow>
              <CidadeNome>{u.cidade}</CidadeNome>
              <InfoText>{u.endereco}</InfoText>
              <InfoText>{u.horario}</InfoText>
            </UnidadeCard>
          ))}
        </UnidadesGrid>
      </Section>
    </>
  );
}
