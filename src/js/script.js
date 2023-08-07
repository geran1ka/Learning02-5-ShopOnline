window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth < 640) {
    $('.footer__catalog').accordion({
      active: true,
      collapsible: true,
      heightStyle: 'content',
      icons: {
        header: 'footer__accord-icon',
        activeHeader: 'footer__accord-icon footer__accord-icon_active',
      },
    });

    $('.footer__info').accordion({
      active: true,
      collapsible: true,
      heightStyle: 'content',
      icons: {
        header: 'footer__accord-icon',
        activeHeader: 'footer__accord-icon footer__accord-icon_active',
      },
    });
  } else {

    $('.footer__catalog').accordion('destroy');
    $('.footer__info').accordion('destroy');
  }
});


