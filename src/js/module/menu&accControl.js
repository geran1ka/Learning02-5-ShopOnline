import $ from 'jquery/dist/jquery.js';
import 'jquery-ui/ui/widgets/accordion.js';
import {scrollController} from './scrollControl.js';

const catalog = $('.footer__catalog');
const info = $('.footer__info');
const menuCatalog = $('.menu__catalog');
const menuInfo = $('.menu__info');
const menuContacts = $('.menu__contacts');
const menu = $('.header__menu');
const menuBtn = $('.header__btn-menu');
const icon = $('.icon');

const openMenuA = () => {
  icon.addClass('icon_active');
  menuBtn.addClass('header__btn-menu_active');
  menu.slideDown();
  menu.css({display: 'grid'});
  scrollController.disabledScroll();
};

const closeMenuA = () => {
  icon.removeClass('icon_active');
  menuBtn.removeClass('header__btn-menu_active');
  menu.slideUp();
  scrollController.enabledScroll();
};

export const menuControll = () => {
  // menuBtn[0].addEventListener('click', () => {
  //   icon.toggleClass('icon_active');
  //   menu.slideToggle();
  //   menu.css({display: 'grid'});
  // });

  $('body').on('click', (e) => {
    if (e.target === menuBtn[0]) {
      if (e.target.closest('.header__btn-menu_active')) {
        closeMenuA();
      } else {
        openMenuA();
      }
    } else if (
      e.target.closest('.menu__info-link') ||
      e.target.closest('.menu__info-link') ||
      e.target.closest('.menu__contacts-link')
    ) {
      closeMenuA();
    }
  });
};

const accordionInit = (elem, selector) => {
  elem.accordion({
    active: true,
    collapsible: true,
    heightStyle: 'content',
    icons: {
      header: `${selector}`,
      activeHeader: `${selector} ${selector}_active`,
    },
  });
};

export const controllAccordeon = () => {
  let accFlag = false;
  if (window.innerWidth <= 640) {
    accordionInit(catalog, 'footer__accord-icon');
    accordionInit(info, 'footer__accord-icon');
    accordionInit(menuCatalog, 'menu__accord-icon');
    accordionInit(menuInfo, 'menu__accord-icon');
    accordionInit(menuContacts, 'menu__accord-icon');
    accFlag = true;
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 640) {
      accordionInit(catalog, 'footer__accord-icon');
      accordionInit(info, 'footer__accord-icon');
      accordionInit(menuCatalog, 'menu__accord-icon');
      accordionInit(menuInfo, 'menu__accord-icon');
      accordionInit(menuContacts, 'menu__accord-icon');
      accFlag = true;
    } else {
      if (accFlag) {
        catalog.accordion('destroy');
        info.accordion('destroy');
        menuCatalog.accordion('destroy');
        menuInfo.accordion('destroy');
        menuContacts.accordion('destroy');
        accFlag = false;
      }
    }
  });
};
