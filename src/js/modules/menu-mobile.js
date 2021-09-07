import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    if (events === undefined) this.events = ['click', 'touchstart'];
    else this.events = events;

    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add('active');
    this.menuButton.classList.add('active');
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove('active');
      this.menuButton.classList.remove('active');
    });
  }

  addMenuMobileEvents() {
    if (this.menuButton) {
      this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));
    }
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
  }
}
