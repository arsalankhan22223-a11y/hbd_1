const button = document.getElementById('wishButton');
const confettiLayer = document.getElementById('confetti-layer');

function launchConfetti() {
  const colors = ['#ff4fa3', '#ffd166', '#7d4dff', '#ffffff', '#7cf7d0'];

  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.top = `-10vh`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${2 + Math.random() * 2}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiLayer.appendChild(piece);

    piece.addEventListener('animationend', () => piece.remove());
  }
}

button.addEventListener('click', () => {
  launchConfetti();
  button.textContent = '🎂 Birthday Magic Activated!';
  button.disabled = true;

  setTimeout(() => {
    button.textContent = 'Celebrate with a surprise';
    button.disabled = false;
  }, 2000);
});
