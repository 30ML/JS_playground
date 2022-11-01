export default class ImageSlider {
  #sliderNumber = 0;

  #sliderWidth = 0;

  #currentPosition = 0;

  #intervalId;

  #autoplay = true;

  sliderWrapEl;

  sliderListEl;

  nextBtnEl;

  prevBtnEl;

  indicatorWrapEl;

  controlWrapEl;

  constructor() {
    this.assignElement();
    this.initSlideNumber();
    this.initSlideWidth();
    this.initSliderListWidth();
    this.addEvent();
    this.createIndicator();
    this.setIndicator();
    this.initAutoplay();
  }

  assignElement() {
    this.sliderWrapEl = document.getElementById('slider-wrap');
    this.sliderListEl = this.sliderWrapEl.querySelector('#slider');
    this.nextBtnEl = this.sliderWrapEl.querySelector('#next');
    this.prevBtnEl = this.sliderWrapEl.querySelector('#previous');
    this.indicatorWrapEl = this.sliderWrapEl.querySelector('#indicator-wrap');
    this.controlWrapEl = this.sliderWrapEl.querySelector('#control-wrap');
  }

  initSlideNumber() {
    this.#sliderNumber = this.sliderListEl.querySelectorAll('li').length;
  }

  initSlideWidth() {
    this.#sliderWidth = this.sliderWrapEl.clientWidth;
  }

  initSliderListWidth() {
    this.sliderListEl.style.width = `${
      this.#sliderNumber * this.#sliderWidth
    }px`;
  }

  initAutoplay() {
    this.#intervalId = setInterval(this.moveToRight.bind(this), 3000);
  }

  addEvent() {
    this.nextBtnEl.addEventListener('click', this.moveToRight.bind(this));
    this.prevBtnEl.addEventListener('click', this.moveToLeft.bind(this));
    this.indicatorWrapEl.addEventListener(
      'click',
      this.onClickIndicator.bind(this),
    );
    this.controlWrapEl.addEventListener('click', this.togglePlay.bind(this));
  }

  moveToRight() {
    this.#currentPosition += 1;
    if (this.#currentPosition === this.#sliderNumber) this.#currentPosition = 0;
    this.sliderListEl.style.left = `-${
      this.#sliderWidth * this.#currentPosition
    }px`;
    if (this.#autoplay) {
      clearInterval(this.#intervalId);
      this.initAutoplay();
    }
    this.setIndicator();
  }

  moveToLeft() {
    this.#currentPosition -= 1;
    if (this.#currentPosition === -1)
      this.#currentPosition = this.#sliderNumber - 1;
    this.sliderListEl.style.left = `-${
      this.#sliderWidth * this.#currentPosition
    }px`;
    if (this.#autoplay) {
      clearInterval(this.#intervalId);
      this.initAutoplay();
    }
    this.setIndicator();
  }

  createIndicator() {
    const docFragment = document.createDocumentFragment();
    for (let i = 0; i < this.#sliderNumber; i += 1) {
      const li = document.createElement('li');
      li.dataset.index = i;
      docFragment.appendChild(li);
    }
    this.indicatorWrapEl.querySelector('ul').appendChild(docFragment);
  }

  setIndicator() {
    this.indicatorWrapEl.querySelector('li.active')?.classList.remove('active');
    this.indicatorWrapEl
      .querySelector(`ul li:nth-child(${this.#currentPosition + 1})`)
      .classList.add('active');
  }

  onClickIndicator(event) {
    const indexPosition = parseInt(event.target.dataset.index, 10);
    if (Number.isInteger(indexPosition)) {
      this.#currentPosition = indexPosition;
      this.sliderListEl.style.left = `-${
        this.#sliderWidth * this.#currentPosition
      }px`;
      this.setIndicator();
    }
  }

  togglePlay(event) {
    if (event.target.dataset.status === 'play') {
      this.#autoplay = true;
      this.controlWrapEl.classList.add('play');
      this.controlWrapEl.classList.remove('pause');
      this.initAutoplay();
    } else {
      this.#autoplay = false;
      this.controlWrapEl.classList.add('pause');
      this.controlWrapEl.classList.remove('play');
      clearInterval(this.#intervalId);
    }
  }
}
