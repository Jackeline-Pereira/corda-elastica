
// Elementos da página
const svg = document.getElementById('corda');
const linha = document.getElementById('linha');
const alca = document.getElementById('alca');
const texto = document.getElementById('porcentagem');

// Constantes da corda
const INICIO_X = 20;
const FIM_X = 380;
const CENTRO_Y = 100;
const MAX = 80; // o quanto a corda pode esticar

// Estado
let arrastando = false;
let distanciaAtual = 0; // guarda o quanto a corda está esticada
let animacao;           // guarda a animação em andamento

// Converte a posição do mouse para as coordenadas do SVG
function posicaoY(evento) {
  const caixa = svg.getBoundingClientRect();
  return (evento.clientY - caixa.top) * (200 / caixa.height);
}

// Atualiza a corda, a alça e a porcentagem
function atualizar(yAlca) {
  // limita a distância entre -MAX e +MAX
  const distancia = Math.max(-MAX, Math.min(MAX, yAlca - CENTRO_Y));
  distanciaAtual = distancia;

  // a curva passa só pela metade do caminho até o ponto de controle,
  // por isso multiplicamos por 2 para a alça ficar "grudada" na corda
  const yControle = CENTRO_Y + distancia * 2;

  linha.setAttribute('d', `M ${INICIO_X} ${CENTRO_Y} Q 200 ${yControle} ${FIM_X} ${CENTRO_Y}`);
  alca.setAttribute('cy', CENTRO_Y + distancia);
  texto.textContent = Math.round(Math.abs(distancia) / MAX * 100) + '%';
}

// Efeito elástico: a corda volta sozinha para o centro
function voltar() {
  distanciaAtual = distanciaAtual * 0.85; // diminui 15% a cada quadro

  if (Math.abs(distanciaAtual) < 0.5) { // já está quase no centro?
    atualizar(CENTRO_Y);                // encaixa no centro
    return;                             // e para a animação
  }

  atualizar(CENTRO_Y + distanciaAtual);
  animacao = requestAnimationFrame(voltar); // pede o próximo quadro
}

// Eventos do arrastar
alca.addEventListener('pointerdown', (e) => {
  cancelAnimationFrame(animacao); // para a animação se ela ainda estiver rodando
  arrastando = true;
  alca.setPointerCapture(e.pointerId); // continua arrastando mesmo se o mouse sair da alça
});

alca.addEventListener('pointermove', (e) => {
  if (arrastando) atualizar(posicaoY(e));
});

alca.addEventListener('pointerup', () => {
  arrastando = false;
  voltar();
});