import {createElem} from '../createElem.js';

export const createBlogHeader = () => {
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
  headerNav.append(headerList);
  container.append(headerNav);
  header.append(container);

  return header;
};

