import { FiShield, FiDatabase, FiUser, FiMail, FiTrash2 } from 'react-icons/fi';

import { useAppState } from '../../context/AppState';

import {
  Page,
  Banner,
  BannerIcone,
  BannerTitulo,
  BannerTexto,
  Card,
  CardTopo,
  Icone,
  CardTitulo,
  CardTexto,
  PrefTitulo,
  ExcluirBtn,
  Dpo,
} from './styles';

const topicos = [
  {
    icone: <FiDatabase />,
    titulo: 'Quais dados coletamos',
    texto:
      'Coletamos apenas o necessário para operar o app: nome, e-mail, unidade preferida, histórico de pedidos e saldo de pontos. Não coletamos dados sensíveis nem dados de crianças.',
  },
  {
    icone: <FiUser />,
    titulo: 'Finalidade e base legal',
    texto:
      'Tratamos seus dados com base no seu consentimento e na execução do contrato (art. 7º, I e V da LGPD), estritamente para viabilizar pedidos, entregas, o programa de fidelidade e comunicações relacionadas.',
  },
  {
    icone: <span aria-hidden="true">🍪</span>,
    titulo: 'Cookies e preferências',
    texto:
      'Utilizamos armazenamento local no seu dispositivo para lembrar sua unidade, seu carrinho e suas preferências. Nenhum cookie de rastreio publicitário é utilizado.',
  },
  {
    icone: <FiShield />,
    titulo: 'Pagamentos',
    texto:
      'Pagamentos são processados por parceiros externos certificados PCI-DSS. Este app não armazena números de cartão, códigos ou chaves Pix.',
  },
  {
    icone: <FiMail />,
    titulo: 'Seus direitos (art. 18 LGPD)',
    texto:
      'Você pode a qualquer momento solicitar acesso, correção, portabilidade, anonimização ou exclusão dos seus dados, bem como revogar o consentimento. Basta entrar em contato com nosso encarregado (DPO).',
  },
];

export default function Privacidade() {
  const { consentimento, excluirDados } = useAppState();

  return (
    <Page>
      <Banner>
        <BannerIcone>
          <FiShield />
        </BannerIcone>
        <BannerTitulo>Privacidade & LGPD</BannerTitulo>
        <BannerTexto>
          Transparência sobre como tratamos seus dados na rede Raízes do
          Nordeste.
        </BannerTexto>
      </Banner>

      {topicos.map((topico) => (
        <Card key={topico.titulo}>
          <CardTopo>
            <Icone>{topico.icone}</Icone>
            <div>
              <CardTitulo>{topico.titulo}</CardTitulo>
              <CardTexto>{topico.texto}</CardTexto>
            </div>
          </CardTopo>
        </Card>
      ))}

      <Card>
        <PrefTitulo>Gerenciar suas preferências</PrefTitulo>
        <CardTexto>
          {consentimento
            ? 'Você já aceitou nossa política de privacidade.'
            : 'Você ainda não aceitou nossa política de privacidade.'}
        </CardTexto>
        <ExcluirBtn type="button" onClick={excluirDados}>
          <FiTrash2 />
          Excluir meus dados deste dispositivo
        </ExcluirBtn>
        <Dpo>Encarregado (DPO): dpo@raizesdonordeste.com.br</Dpo>
      </Card>
    </Page>
  );
}
