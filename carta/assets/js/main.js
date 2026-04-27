const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const noText = document.getElementById('noText');
const yesMessage = document.getElementById('yesMessage');
const heartsLayer = document.getElementById('heartsLayer');
const questionActions = document.getElementById('questionActions');

let heartsInterval = null;

if (noBtn) {
  noBtn.addEventListener('click', () => {
    noBtn.classList.add('d-none');
    if (noText) {
      noText.classList.remove('d-none');
    }
    if (yesBtn) {
      yesBtn.classList.remove('d-none');
    }
  });
}

if (yesBtn) {
  yesBtn.addEventListener('click', () => {
    if (yesMessage) {
      yesMessage.classList.remove('d-none');
    }

    if (noText) {
      noText.classList.add('d-none');
    }

    if (questionActions) {
      questionActions.classList.add('is-hidden');
    } else {
      yesBtn.classList.add('d-none');
      if (noBtn) noBtn.classList.add('d-none');
    }

    createHearts(6);

    if (!heartsInterval) {
      heartsInterval = setInterval(() => {
        createHearts(3);
      }, 2000);
    }
  });
}

function createHearts(total) {
  if (!heartsLayer) return;

  for (let i = 0; i < total; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = ['💛', '🌻', '💙'][Math.floor(Math.random() * 3)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${5 + Math.random() * 2.5}s`;
    heart.style.setProperty('--x-shift', `${-40 + Math.random() * 80}px`);
    heart.style.fontSize = `${18 + Math.random() * 20}px`;

    heartsLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }
}
