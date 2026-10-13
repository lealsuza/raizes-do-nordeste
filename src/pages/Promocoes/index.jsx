import { FiCopy, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useAppState } from '../../context/AppState';

import {
  Page,
  Titulo,
  Subtitulo,
  Grid,
  Card,
  Blob,
  Tag,
  Nome,
  Desc,
  CupomLinha,
  Codigo,
  Copiar,
  Aplicar,
} from './styles';

const campanhas = [
  {
    id: 1,
    tag: '20% OFF',
    nome: 'Terça do Forró',
    desc: '20% off em todos os pratos principais às terças-feiras.',
    cupom: 'FORRO20',
  },
  {
    id: 2,
    tag: 'Brinde',
    nome: 'Primeira Visita',
    desc: 'Ganhe uma tapioca de coco no seu primeiro pedido pelo app.',
    cupom: 'BEMVINDO',
  },
  {
    id: 3,
    tag: '15% OFF',
    nome: 'Combo Nordestino',
    desc: 'Moqueca + baião + cajuína com 15% de desconto.',
    cupom: 'NORDESTE15',
  },
];

export default function Promocoes() {
  const { mostrarAviso } = useAppState();
  const navigate = useNavigate();

  const copiar = async (cupom) => {
    try {
      await navigator.clipboard.writeText(cupom);
    } catch {
      void 0;
    }
    mostrarAviso(`Cupom ${cupom} copiado`);
  };

  return (
    <Page>
      <Titulo>Promoções & campanhas</Titulo>
      <Subtitulo>Copie o cupom e aplique no carrinho.</Subtitulo>
      <Grid>
        {campanhas.map((campanha) => (
          <Card key={campanha.id}>
            <Blob />
            <Blob $pequeno />
            <Tag>{campanha.tag}</Tag>
            <Nome>{campanha.nome}</Nome>
            <Desc>{campanha.desc}</Desc>
            <CupomLinha>
              <Codigo>{campanha.cupom}</Codigo>
              <Copiar type="button" onClick={() => copiar(campanha.cupom)}>
                <FiCopy /> Copiar
              </Copiar>
            </CupomLinha>
            <Aplicar type="button" onClick={() => navigate('/cardapio')}>
              Aplicar no cardápio <FiArrowRight />
            </Aplicar>
          </Card>
        ))}
      </Grid>
    </Page>
  );
}
