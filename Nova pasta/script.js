const mensagens = [
  "Você é o melhor presente que a vida me deu 💖",
  "Seu sorriso ilumina meus dias ☀️",
  "Sou grato por cada momento ao seu lado 🌹",
  "Te amo mais do que palavras podem dizer 💘",
  "Prometo te fazer feliz todos os dias 😘"
];

let index = 0;

function mostrarMensagem() {
  if (index < mensagens.length) {
    const div = document.getElementById("mensagens");
    const novaMsg = document.createElement("p");
    novaMsg.textContent = mensagens[index];
    div.appendChild(novaMsg);
    index++;
  } else {
    alert("Você já viu todas as mensagens, meu amor ❤️");
  }
}
