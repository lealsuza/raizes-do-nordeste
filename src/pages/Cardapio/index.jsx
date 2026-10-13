import { useEffect, useMemo, useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';

import { useAppState } from '../../context/AppState';
import { imagensPratos, formatarPreco } from '../../data/imagens';
import { unidades, categorias, cardapios } from '../../data/mockData';

import {
  Page,
  Banner,
  BannerKicker,
  BannerTitle,
  BannerMeta,
  StateRow,
  StatePill,
  SearchWrap,
  SearchInput,
  Filters,
  FilterChip,
  Grid,
  Card,
  Photo,
  Destaque,
  CardBody,
  Categoria,
  Nome,
  Desc,
  CardFooter,
  Preco,
  AddBtn,
  Empty,
} from './styles';

export default function Cardapio() {
  const { unidadeId, setUnidadeId, adicionarItem } = useAppState();
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('Todos');
  const [unidadeVista, setUnidadeVista] = useState(unidadeId);

  const unidade = unidades.find((u) => u.id === unidadeId) || unidades[0];

  useEffect(() => {
    setBusca('');
    setCategoria('Todos');
  }, [unidadeId]);

  const itens = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return (cardapios[unidade.estado] || []).filter((item) => {
      const categoriaOk = categoria === 'Todos' || item.categoria === categoria;
      const buscaOk =
        !termo || `${item.nome} ${item.desc}`.toLowerCase().includes(termo);
      return categoriaOk && buscaOk;
    });
  }, [unidade.estado, busca, categoria]);

  const trocarEstado = (id) => {
    setUnidadeId(id);
    setBusca('');
    setCategoria('Todos');
  };

  return (
    <Page>
      <Banner>
        <BannerKicker>Cardápio da unidade</BannerKicker>
        <BannerTitle>
          {unidade.cidade} — {unidade.ponto}
        </BannerTitle>
        <BannerMeta>
          {unidade.endereco} · {unidade.horario}
        </BannerMeta>
        <StateRow>
          {unidades.map((u) => (
            <StatePill
              key={u.id}
              type="button"
              $active={u.id === unidade.id}
              onClick={() => trocarEstado(u.id)}
            >
              {u.cidade}/{u.estado}
            </StatePill>
          ))}
        </StateRow>
      </Banner>

      <SearchWrap>
        <FiSearch />
        <SearchInput
          type="search"
          placeholder="Buscar no cardápio..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          aria-label="Buscar no cardápio"
        />
      </SearchWrap>

      <Filters>
        {categorias.map((cat) => (
          <FilterChip
            key={cat}
            type="button"
            $active={categoria === cat}
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </FilterChip>
        ))}
      </Filters>

      {itens.length === 0 ? (
        <Empty>Nenhum prato encontrado neste cardápio.</Empty>
      ) : (
        <Grid>
          {itens.map((item) => (
            <Card key={item.id}>
              <Photo>
                <img src={imagensPratos[item.imagem]} alt={item.nome} />
                {item.destaque && <Destaque>Destaque</Destaque>}
              </Photo>
              <CardBody>
                <Categoria>{item.categoria}</Categoria>
                <Nome>{item.nome}</Nome>
                <Desc>{item.desc}</Desc>
                <CardFooter>
                  <Preco>{formatarPreco(item.preco)}</Preco>
                  <AddBtn type="button" onClick={() => adicionarItem(item)}>
                    <FiPlus /> Adicionar
                  </AddBtn>
                </CardFooter>
              </CardBody>
            </Card>
          ))}
        </Grid>
      )}
    </Page>
  );
}
