const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternetivas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas=[
  {
     enunciado: "você gosta de ir ao cinema?",
     alternativas:[
       {
       texto: "sim",
    afirmação: "afirmação",
       },
       {   
       texto: "não",
    afirmação: "afirmação",
       },
  ]
{
     enunciado: "você prefere pizza ou lasanha?",
     alternativas:[
      texto: "lasanha",
       texto: "pizza",
    ]
  }
{
     enunciado: "você gosta de futebol?",
     alternativas:[
       texto: "sim",
       texto: "não",
    ]
  }
{
     enunciado: "você tem filhos?",
     alternativas:[
       texto: "sim",
       texto: "não",
    ]
  }
{
     enunciado: "você tem animais de estimação?",
     alternativas:[
       texto: "sim",
       texto: "não",
    ]
  }
];
 
let atual=0;
let perguntaAtual;

function mostraPerguntas(){
  perguntaAtual=perguntas[atual];
  caixaPerguntas.textContent=perguntaAtual.enunciado;
mostraAlternativas();
}

function mostraAlternativas(){
  for(const alternativas of perguntaAtual.alternativas){
  const botaoAlternativas=document.createElement("button");
  botaoAlternativas.textContent=alternativa;
  caixaAlternativas.appendChild(botaoAlternativas);
  


mostraPergunta();





 






