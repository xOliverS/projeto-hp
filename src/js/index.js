const btns = document.querySelectorAll(".botao");
const personagem = document.querySelectorAll(".personagem");

btns.forEach((buton, indice) => {
  buton.addEventListener("click", () => {
    
    desselecionarBotao();
    desselecionarPersonagem();

    buton.classList.add("selecionado");
    personagem[indice].classList.add("selecionado");

  });
});

function desselecionarPersonagem() {
  const personageSelecionado = document.querySelector(
    ".personagem.selecionado"
  );
  personageSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
