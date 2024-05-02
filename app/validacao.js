function verificaSeOChutePossuiValorValido(chute) {
  //!convertendo String para int
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    //!adiciona o novo conteúdo à existente, sem remover o conteúdo anterior
    elementoChute.innerHTML += "<div>Valor inválido</div>";
  }

  if (numeroForMaiorouMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `;
  } else {
    elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `;
  }

  if (chuteForInvalido(numero)) {
    if (chute.toUpperCase() === "GAME OVER") {
      document.body.innerHTML = `
            <h2>GAME OVER!</h2>
            <h3>Pressione o butão para jogar novamente</h3>
            <button id="jogarNovamente" class="btn-jogar">Jogar novamente</button>
            `;
      document.body.style.backgroundColor = "black";
    } else {
      elementoChute.innerHTML += "<div>Valor Inválido</div>";
    }
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorouMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
