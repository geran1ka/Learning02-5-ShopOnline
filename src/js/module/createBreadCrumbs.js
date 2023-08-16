import {createElem} from './createElem.js';

export const createBreadCrumbs = ({data} = {}) => {
  const bread = createElem('div', {
    className: 'header__bread bread',
  });

  const breadList = createElem('ul', {
    className: 'bread__list',
  });

  const firstItem = createElem('li', {
    className: 'bread__item',
  });

  const firstItemLink = createElem('a', {
    className: 'bread__link',
    href: './index.html',
    textContent: 'Главная',
  });

  firstItem.append(firstItemLink);

  const secondItem = createElem('li', {
    className: 'bread__item',
  });

  const secondItemLink = createElem('a', {
    className: 'bread__link',
    href: './blog.html',
    textContent: 'Блог',
  });

  secondItemLink.addEventListener('click', e => {
    window.history.back();
  });

  secondItem.append(secondItemLink);
  breadList.append(firstItem, secondItem);
  if (data.title) {
    const thirdItem = createElem('li', {
      className: 'bread__item',
    });

    const thirdItemLink = createElem('a', {
      className: 'bread__link',
      href: '#',
      textContent: data.title,
    });

    thirdItem.append(thirdItemLink);
    breadList.append(thirdItem);
  }

  const linkAll = breadList.querySelectorAll('.bread__link');
  const linkLast = linkAll[linkAll.length - 1];
  linkLast.classList.add('bread__link_active');

  bread.append(breadList);
  return bread;
};

