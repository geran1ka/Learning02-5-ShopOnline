import $ from 'jquery/dist/jquery.js';
import 'jquery-ui/ui/widgets/accordion.js';

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
  const catalog = $('.footer__catalog');
  const info = $('.footer__info');
  const menuCatalog = $('.menu__catalog');
  const menuInfo = $('.menu__info');
  const menuContacts = $('.menu__contacts');
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
      accordionInit(catalog);
      accordionInit(info);
      accordionInit(menuCatalog);
      accordionInit(menuInfo);
      accordionInit(menuContacts);

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