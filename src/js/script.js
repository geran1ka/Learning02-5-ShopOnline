const accordionInit = (elem) => {
  elem.accordion({
    active: true,
    collapsible: true,
    heightStyle: 'content',
    icons: {
      header: 'footer__accord-icon',
      activeHeader: 'footer__accord-icon footer__accord-icon_active',
    },
  });
};

const controllAccordeon = () => {
  const catalog = $('.footer__catalog');
  const info = $('.footer__info');
  let accFlag = false;
  if (window.innerWidth <= 640) {
    accordionInit(catalog);
    accordionInit(info);
    accFlag = true;
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 640) {
      accordionInit(catalog);
      accordionInit(info);

      accFlag = true;
    } else {
      if (accFlag) {
        catalog.accordion('destroy');
        info.accordion('destroy');
        accFlag = false;
      }
    }
  });
};

controllAccordeon();

