import {createElement} from './helper.js';

export const createArticleHeader = (data) => {
  const header = createElement('header', {
    className: 'header',
  });

  const container = createElement('div', {
    className: 'article-container',
  });

  const headerNav = createElement('nav', {
    className: 'header__nav',
  });

  const headerList = createElement('ul', {
    className: 'header__list',
  });

  const firstItem = createElement('li', {
    className: 'header__item',
  });

  const firstItemLink = createElement('a', {
    className: 'header__link',
    href: '/blog.html',
    textContent: 'Главная',
  });

  firstItem.append(firstItemLink);

  const secondItem = createElement('li', {
    className: 'header__item',
  });

  const secondItemLink = createElement('a', {
    className: 'header__link',
    href: '#',
    textContent: 'Блог',
  });

  secondItemLink.addEventListener('click', e => {
    window.history.back();
  });

  secondItem.append(secondItemLink);

  const thirdItem = createElement('li', {
    className: 'header__item',
  });

  const thirdItemLink = createElement('a', {
    className: 'header__link header__link_active',
    href: '#',
    textContent: data.data.title,
  });

  thirdItem.append(thirdItemLink);

  headerList.append(firstItem, secondItem, thirdItem);
  headerNav.append(headerList);
  container.append(headerNav);
  header.append(container);

  return header;
};

