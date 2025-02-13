import 'the-new-css-reset/css/reset.css';
import '../styles/main.scss';

class MobileNav {
  constructor() {
    this.burgerButton = document.querySelector('.header__burger-button');
    this.menu = document.querySelector('.header__frame');
    this.body = document.body;
  }

  init() {
    this.initMobileNav();
  }

  initMobileNav() {
    if (this.burgerButton && this.menu) {
      this.burgerButton.addEventListener('click', () => {
        this.menu.classList.toggle('active');
        this.burgerButton.classList.toggle('active');
        this.body.classList.toggle('scroll-lock');
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const mobileNav = new MobileNav();
  mobileNav.init();
});
