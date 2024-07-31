const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternetivas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
     enunciado: "você gosta de ir ao cinema?",
     alternativas:[
       {
       texto: "sim",
    afirmação: "parece que você gosta de ir ao cinema",
       },
       {   
       texto: "não",
    afirmação: "afirmação",
       },
    ]
  },
  {
     enunciado: "você prefere pizza ou lasanha?",
     alternativas:[
       {
      texto: "lasanha",
      afirmação: "afirmação",   
       },
       {
       texto: "realmente pizza é melhor",
         afirmação: "afirmação",
       }
    ]
  },
{
     enunciado: "você gosta de futebol?",
     alternativas:[
       {
       texto: "sim",
         afirmação: "parece que você gosta de futebol"
       },
       {
       texto: "não",
         afirmação: "afirmação"
       },
    ]
  },
{
     enunciado: "você tem filhos?",
     alternativas:[
       {
       texto: "sim",
         afirmação: "afimação"
       },
       {
       texto: "não",
         afirmação: "você tem cara de novo para ter filhos mesmo"
        }
    ]
  },
{
     enunciado: "você tem animais de estimação?",
     alternativas:[
       {
       texto: "sim",
         afirmação: "parece que vc gosta de animais"
       },
       {
       texto: "não",
         afirmação: "afirmação"
       }
    ]
  },
];
 
let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPergunta() {
     if(atual >= perguntas.length){
        mostraResultado();
        return;
    }   
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = ""; 
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
            const afirmações = opcaoSelecionada.afirmação
            historiaFinal += afirmações + " "; 
            atual++;
            mostraPergunta();
      }

function mostraResultado(){
    caixaPerguntas.textContent = "pelas suas respostas você uma pessoa muito animada"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();





 






