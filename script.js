const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternetivas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas=[
  {
     enunciado: "você gosta de ir ao cinema?",
     alternativas:[
       "sim",
       "não",
    ]
  }
{
     enunciado: "você prefere pizza ou lasanha?",
     alternativas:[
       "lasanha",
       "pizza",
    ]
  }
{
     enunciado: "você gosta de futebol?",
     alternativas:[
       "sim",
       "não",
    ]
  }
{
     enunciado: "você tem filhos?",
     alternativas:[
       "sim",
       "não",
    ]
  }
{
     enunciado: "você tem animais de estimação?",
     alternativas:[
       "sim",
       "não",
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





 






