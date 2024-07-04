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
       {
      texto: "lasanha",
      afirmação: "afirmação",   
       },
       {
       texto: "pizza",
         afirmação: "afirmação",
       }
    ]
  }
{
     enunciado: "você gosta de futebol?",
     alternativas:[
       {
       texto: "sim",
         afirmação: "afirmação"
       },
       {
       texto: "não",
         afirmação: "afirmação"
       },
    ]
  }
{
     enunciado: "você tem filhos?",
     alternativas:[
       {
       texto: "sim",
         afirmação: "afirmação"
       },
       {
       texto: "não",
         afirmação: "afimação"
        }
    ]
  }
{
     enunciado: "você tem animais de estimação?",
     alternativas:[
       {
       texto: "sim",
         afirmação: "afirmação"
       },
       {
       texto: "não",
         afirmação: "afirmação"
       }
    ]
  }
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
            const afirmacoes = opcaoSelecionada.afirmacoes;  mudar para opcaoSelecionada.afirmacao
            historiaFinal = += afirmacoes + " "; 
            atual++;
            mostraPergunta();
      }

function mostraResultado(){
    caixaPerguntas.textContent = "pelas suas respostas você uma pessoa muito animada"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}

mostraPergunta();





 






