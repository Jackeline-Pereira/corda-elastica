# Corda Elástica

Este é o meu primeiro projeto publicado no GitHub: um componente web interativo em que o usuário arrasta uma corda para esticá-la. Ao soltar, ela volta sozinha para o centro, como uma mola, e a página mostra em porcentagem o quanto ela foi esticada.

Criei o projeto por iniciativa própria para colocar em prática o que venho aprendendo de front-end na graduação em Ciência da Computação.

## Tecnologias

- HTML
- CSS
- JavaScript puro (sem bibliotecas ou frameworks)

## Como rodar

Baixe ou clone o repositório e abra o arquivo `index.html` no navegador. Não é necessário instalar nada.

## Como funciona

- A corda é uma curva desenhada com SVG, e o ponto de controle da curva muda conforme a posição do mouse.
- O arraste usa os eventos `pointerdown`, `pointermove` e `pointerup`, então funciona com mouse e com toque no celular.
- O efeito elástico usa `requestAnimationFrame`: a cada quadro, a distância esticada diminui 15%, o que cria o movimento de mola.
- A porcentagem é calculada comparando a distância atual com o limite máximo de esticada.

## O que aprendi

- Manipular elementos SVG com JavaScript.
- Trabalhar com eventos de ponteiro e converter a posição do mouse para as coordenadas do SVG.
- Criar animações com `requestAnimationFrame`.
- Organizar um projeto em arquivos separados de HTML, CSS e JavaScript.
- Versionar o código com Git e publicá-lo no GitHub.

## data do projeto 
20/09/2024.
