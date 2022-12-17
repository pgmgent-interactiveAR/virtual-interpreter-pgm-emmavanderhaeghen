const App = {
  init() {
    this.cacheElements();
    this.addEventListener();
  },

  cacheElements() {
    // this.handModel = document.querySelector('#hand-model');
    // this.instructions = document.querySelector('#instructions');
    this.textBox = document.querySelector('#text-box');

    this.startBtn = document.querySelector('#start-btn');
    this.stopBtn = document.querySelector('#stop-btn');
    this.textBtn = document.querySelector('#text-btn');
    this.cross = document.querySelector('.cross');
  },

  addEventListener() {
    // add event listener to the text box
    this.textBtn.addEventListener('click', () => {
      this.textBox.classList.toggle('hidden')
      this.cross.classList.toggle('hidden')
    })
  },
};

App.init();