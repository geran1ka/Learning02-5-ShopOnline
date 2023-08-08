import {createElem} from './function/createElem.js';

export const createBreadCrumbs = ({data} = {}) => {
  const header = createElem('header', {
    className: 'article-header',
  });

  const container = createElem('div', {
    className: 'article__container',
  });

  const headerNav = createElem('nav', {
    className: 'article-header__nav',
  });

  const headerList = createElem('ul', {
    className: 'article-header__list',
  });

  const firstItem = createElem('li', {
    className: 'article-header__item',
  });

  const firstItemLink = createElem('a', {
    className: 'article-header__link',
    href: './index.html',
    textContent: 'Главная',
  });

  firstItem.append(firstItemLink);

  const secondItem = createElem('li', {
    className: 'article-header__item',
  });

  const secondItemLink = createElem('a', {
    className: 'article-header__link',
    href: './blog.html',
    textContent: 'Блог',
  });

  secondItemLink.addEventListener('click', e => {
    window.history.back();
  });

  secondItem.append(secondItemLink);
  headerList.append(firstItem, secondItem);
  if (data.title) {
    const thirdItem = createElem('li', {
      className: 'article-header__item',
    });

    const thirdItemLink = createElem('a', {
      className: 'article-header__link',
      href: '#',
      textContent: data.title,
    });

    thirdItem.append(thirdItemLink);
    headerList.append(thirdItem);
  }

  const linkAll = headerList.querySelectorAll('.article-header__link');
  const linkLast = linkAll[linkAll.length - 1];
  linkLast.classList.add('article-header__link_active')
  
  headerNav.append(headerList);
  container.append(headerNav);
  header.append(container);

  return header;
};

