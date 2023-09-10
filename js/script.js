'use strict';

function Sorteio() {
  this.display = document.querySelector('.input-nome');
  this.h1 = document.querySelector('h1');
  this.availableNames = ['Felipe', 'Guilherme', 'Patrícia', 'Thiago'];
  this.round = 0;

  this.start = () => this.generateBtn();

  this.generateBtn = () => {
    document.addEventListener('click', (e) => {
      try {
        const el = e.target;
        if (el.classList.contains('gerar-nome')) this.drawName();
        if (el.classList.contains('apagar-nome')) this.clear();
      } catch (x) {}
    });
  };

  this.drawName = () => {
    const resetListText = document.querySelector('.reset-list');
    if (resetListText) resetListText.remove();

    const randomNumber = Math.floor(Math.random() * this.availableNames.length);
    this.display.value = this.availableNames[randomNumber];
    this.availableNames.splice(randomNumber, 1);
    this.display.focus();
    this.round++;

    if (this.round === 4) {
      this.resetRound();
      this.createElement('Lista resetada!', this.h1);
    }
  };

  this.createElement = (message, elementSource) => {
    const p = document.createElement('p');
    p.innerHTML = message;
    p.classList.add('reset-list');
    elementSource.insertAdjacentElement('afterend', p);
  };

  this.resetRound = () => {
    this.availableNames = ['Felipe', 'Guilherme', 'Patrícia', 'Thiago'];
    this.round = 0;
  };
  this.clear = () => (this.display.value = '');
}

const sorteio = new Sorteio();
sorteio.start();
