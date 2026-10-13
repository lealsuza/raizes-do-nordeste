import { FiClock, FiPackage, FiArrowRight } from 'react-icons/fi';
import { MdRestaurant, MdPedalBike } from 'react-icons/md';

import { useAppState } from '../../context/AppState';
import { formatarPreco } from '../../data/imagens';

import {
  Page,
  Titulo,
  Lista,
  Card,
  Topo,
  Quando,
  Codigo,
  Local,
  Totais,
  Trilha,
  Barra,
  Etapa,
  Circulo,
  EtapaNome,
  Divisor,
  Itens,
  ItemLinha,
  Acao,
  Simular,
  Vazio,
} from './styles';

const etapas = [
  { nome: 'Recebido', icone: <FiClock /> },
  { nome: 'Na cozinha', icone: <MdRestaurant /> },
  { nome: "Saiu p' entrega", icone: <MdPedalBike /> },
  { nome: 'Entregue', icone: <FiPackage /> },
];

const formatarData = (iso) =>
  new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

export default function Pedidos() {
  const { pedidos, avancarStatus } = useAppState();

  return (
    <Page>
      <Titulo>Meus pedidos</Titulo>
      {pedidos.length === 0 ? (
        <Vazio>Você ainda não fez pedidos.</Vazio>
      ) : (
        <Lista>
          {pedidos.map((pedido) => (
            <Card key={pedido.id}>
              <Topo>
                <div>
                  <Quando>{formatarData(pedido.criadoEm)}</Quando>
                  <Codigo>Pedido {pedido.id}</Codigo>
                  <Local>
                    {pedido.unidade} · {pedido.pagamento}
                  </Local>
                </div>
                <Totais>
                  <span>TOTAL</span>
                  <strong>{formatarPreco(pedido.total)}</strong>
                  <em>+{pedido.pontos} pontos</em>
                </Totais>
              </Topo>

              <Trilha>
                <Barra $progresso={pedido.status / 3} />
                {etapas.map((etapa, indice) => (
                  <Etapa key={etapa.nome}>
                    <Circulo $ativo={indice <= pedido.status}>
                      {etapa.icone}
                    </Circulo>
                    <EtapaNome $ativo={indice <= pedido.status}>
                      {etapa.nome}
                    </EtapaNome>
                  </Etapa>
                ))}
              </Trilha>

              <Divisor />
              <Itens>
                {pedido.itens.map((item) => (
                  <ItemLinha key={item.nome}>
                    <span>
                      {item.qtd}× {item.nome}
                    </span>
                    <strong>{formatarPreco(item.total)}</strong>
                  </ItemLinha>
                ))}
              </Itens>

              {pedido.status < 3 && (
                <Acao>
                  <Simular
                    type="button"
                    onClick={() => avancarStatus(pedido.id)}
                  >
                    Simular próximo status <FiArrowRight />
                  </Simular>
                </Acao>
              )}
            </Card>
          ))}
        </Lista>
      )}
    </Page>
  );
}
