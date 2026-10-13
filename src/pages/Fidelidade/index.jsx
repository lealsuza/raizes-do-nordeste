import { FiMapPin, FiStar, FiGift } from 'react-icons/fi';

import { useAppState } from '../../context/AppState';

import {
  Page,
  Banner,
  Estrela,
  Kicker,
  Saudacao,
  BannerTexto,
  PontosLinha,
  PontosCaixa,
  PontosRotulo,
  PontosValor,
  NivelAtual,
  Progresso,
  ProgressoTexto,
  Barra,
  BarraCheia,
  Secao,
  SecaoTitulo,
  Niveis,
  NivelCard,
  NivelMeta,
  NivelNome,
  NivelDesc,
  Recompensas,
  Recompensa,
  Icone,
  RecompensaNome,
  RecompensaPts,
  Trocar,
} from './styles';

const niveis = [
  { nome: 'Cordel', minimo: 0, desc: 'Acúmulo de pontos e ofertas do mês' },
  {
    nome: 'Xilogravura',
    minimo: 200,
    desc: '10% off em sobremesas + brinde no aniversário',
  },
  {
    nome: 'Ouro do Sertão',
    minimo: 800,
    desc: 'Frete grátis, prioridade na fila e degustações exclusivas',
  },
];

const recompensas = [
  { id: 'cajuina', nome: 'Cajuína cortesia', pontos: 100, icone: '🥤' },
  { id: 'sobremesa', nome: 'Sobremesa grátis', pontos: 250, icone: '🍰' },
  { id: 'baiao', nome: 'Combo Baião de Dois', pontos: 500, icone: '🍲' },
  { id: 'jantar', nome: 'Jantar para dois', pontos: 1000, icone: '🍽️' },
];

export default function Fidelidade() {
  const { usuario, resgatar } = useAppState();
  const pontos = usuario?.pontos || 0;
  const primeiroNome = usuario?.nome?.trim().split(/\s+/)[0] || '';
  const nivel =
    [...niveis].reverse().find((item) => pontos >= item.minimo) || niveis[0];
  const proximo = niveis.find((item) => item.minimo > pontos);
  const progresso = proximo
    ? Math.min(100, (pontos / proximo.minimo) * 100)
    : 100;

  return (
    <Page>
      <Banner>
        <Estrela aria-hidden="true">
          <svg viewBox="0 0 72 72" fill="none">
            <path
              d="M36 6l4.2 16.2L56 22l-12.4 9.2L48 48 36 38.8 24 48l4.4-16.8L16 22l15.8.2L36 6z"
              stroke="white"
              strokeWidth="2.4"
            />
            <path
              d="M58 10v10M53 15h10"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="18" cy="54" r="3" stroke="white" strokeWidth="2" />
          </svg>
        </Estrela>
        <Kicker>CLUBE RAÍZES</Kicker>
        <Saudacao>Olá{primeiroNome ? `, ${primeiroNome}` : ''}!</Saudacao>
        <BannerTexto>
          A cada R$ 1,00 você ganha 1 ponto. Suba de nível e desbloqueie
          benefícios exclusivos.
        </BannerTexto>
        <PontosLinha>
          <PontosCaixa>
            <PontosRotulo>Seus pontos</PontosRotulo>
            <PontosValor>{pontos}</PontosValor>
            <NivelAtual>Nível: {nivel.nome}</NivelAtual>
          </PontosCaixa>
          <Progresso>
            <ProgressoTexto>
              {proximo ? (
                <>
                  Faltam <strong>{proximo.minimo - pontos} pontos</strong> para
                  o nível {proximo.nome}
                </>
              ) : (
                <>
                  Você chegou ao nível <strong>{nivel.nome}</strong>
                </>
              )}
            </ProgressoTexto>
            <Barra>
              <BarraCheia $valor={progresso} />
            </Barra>
          </Progresso>
        </PontosLinha>
      </Banner>

      <Secao>
        <SecaoTitulo>Níveis do clube</SecaoTitulo>
        <Niveis>
          {niveis.map((item) => (
            <NivelCard key={item.nome} $atual={item.nome === nivel.nome}>
              <NivelMeta>
                <FiMapPin /> A PARTIR DE {item.minimo}PTS
              </NivelMeta>
              <NivelNome>{item.nome}</NivelNome>
              <NivelDesc>{item.desc}</NivelDesc>
            </NivelCard>
          ))}
        </Niveis>
      </Secao>

      <Secao>
        <SecaoTitulo>Troque seus pontos</SecaoTitulo>
        <Recompensas>
          {recompensas.map((item) => {
            const liberado = pontos >= item.pontos;
            return (
              <Recompensa key={item.id}>
                <Icone>{item.icone}</Icone>
                <RecompensaNome>{item.nome}</RecompensaNome>
                <RecompensaPts>
                  <FiStar /> {item.pontos} pontos
                </RecompensaPts>
                <Trocar
                  type="button"
                  disabled={!liberado}
                  onClick={() => resgatar(item)}
                >
                  <FiGift /> {liberado ? 'Trocar' : 'Bloqueado'}
                </Trocar>
              </Recompensa>
            );
          })}
        </Recompensas>
      </Secao>
    </Page>
  );
}
