const emojis = ['😍', '🌹', '💖', '💞'];
const count = 30;

for (let i = 0; i < count; i++) {
  const emoji = document.createElement('div');
  emoji.className = 'emoji';
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  document.body.appendChild(emoji);

  emoji.style.left = (Math.random() < 0.5 ? Math.random() * 25 : 75 + Math.random() * 25) + 'vw';
  emoji.style.animationDuration = 5 + Math.random() * 5 + 's';
}

const style = document.createElement('style');
style.innerHTML = `
  .emoji {
    position: absolute;
    top: -50px;
    font-size:45px;
    animation-name: fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes fall {
    to {
      transform: translateY(110vh);
    }
  }
`;
document.head.appendChild(style);
