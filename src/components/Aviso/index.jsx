import { FiCheck } from 'react-icons/fi';

import { useAppState } from '../../context/AppState';

import { Faixa, Check } from './styles';

export default function Aviso() {
  const { aviso } = useAppState();
  if (!aviso) {
    return null;
  }

  return (
    <Faixa key={aviso.id} role="status">
      <Check>
        <FiCheck />
      </Check>
      {aviso.texto}
    </Faixa>
  );
}
