import acarajeImg from '../assets/acaraje.png';
import baiaoImg from '../assets/baiao.jpg';
import boloImg from '../assets/bolo.png';
import cajuinaImg from '../assets/cajuina.png';
import moquecaImg from '../assets/moqueca.png';
import tapiocaImg from '../assets/tapioca.png';

export const imagensPratos = {
  acaraje: acarajeImg,
  tapioca: tapiocaImg,
  moqueca: moquecaImg,
  baiao: baiaoImg,
  bolo: boloImg,
  cajuina: cajuinaImg,
};

export const formatarPreco = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
