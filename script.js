let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

// Exibe tentativas iniciais
document.getElementById("tentativas").textContent =
  `Tentativas restantes: ${tentativasRestantes}`;

function verificarPalpite() {
  const palpite = parseInt(document.getElementById("palpite").value);

  // Validação do input
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    document.getElementById("mensagem").textContent =
      "Digite um número válido entre 1 e 100.";
    return;
  }

  tentativasRestantes--;

  if (palpite === numeroSecreto) {
    document.getElementById("mensagem").textContent =
      `Parabéns! Você acertou o número ${numeroSecreto}!`;
    fimDeJogo();
  } else if (tentativasRestantes === 0) {
    document.getElementById("mensagem").textContent =
      `Você perdeu! O número secreto era ${numeroSecreto}.`;
    fimDeJogo();
  } else if (palpite < numeroSecreto) {
    document.getElementById("mensagem").textContent = "O número secreto é maior.";
  } else {
    document.getElementById("mensagem").textContent = "O número secreto é menor.";
  }

  // Atualiza tentativas restantes
  document.getElementById("tentativas").textContent =
    `Tentativas restantes: ${tentativasRestantes}`;
}

function fimDeJogo() {
  document.getElementById("palpite").disabled = true;
  document.getElementById("reiniciar").style.display = "inline-block";
  document.getElementById("tentativas").textContent = "";
}

function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativasRestantes = 10;

  document.getElementById("palpite").disabled = false;
  document.getElementById("palpite").value = "";
  document.getElementById("mensagem").textContent = "";
  document.getElementById("tentativas").textContent =
    `Tentativas restantes: ${tentativasRestantes}`;
  document.getElementById("reiniciar").style.display = "none";
}
