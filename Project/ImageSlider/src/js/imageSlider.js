export default class ImageSlider {
  #sliderNumber = 0;

  #sliderWidth = 0;

  #currentPosition = 0;

  sliderWrapEl;

  sliderListEl;

  nextBtnEl;

  prevBtnEl;

  constructor() {
    this.assignElement();
    this.initSlideNumber();
    this.initSlideWidth();
    this.initSliderListWidth();
  }

  assignElement() {
    this.sliderWrapEl = document.getElementById('#slider-wrap');
    this.sliderListEl = this.sliderWrapEl.querySelector('#slider');
    this.nextBtnEl = this.sliderWrapEl.querySelector('#next');
    this.prevBtnEl = this.sliderWrapEl.querySelector('#previous');
  }

  initSlideNumber() {
    this.#sliderNumber = this.sliderListEl.querySelector('li').length;
    console.log(this.#sliderNumber);
  }

  initSlideWidth() {
    this.#sliderWidth = this.sliderWrapEl.clientWidth;
    console.log(this.#sliderWidth);
  }

  initSliderListWidth() {
    this.sliderListEl.style.width = `${
      this.#sliderNumber * this.#sliderWidth
    }px`;
    console.log(this.sliderListEl.style.width);
  }

  addEvent() {
    this.nextBtnEl.addEventListener('click', () => this.moveToRight.bind(this));
  }

  moveToRight() {
    this.#currentPosition += 1;
  }
}
