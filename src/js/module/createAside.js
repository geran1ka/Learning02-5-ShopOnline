import {createElem} from './createElem.js';

export const createAside = () => {
  const aside = createElem('aside', {
    className: 'aside',
  });

  const container = createElem('div', {
    className: 'aside-container',
  });

  const asideBlockOne = createElem('div', {
    className: 'aside__block-one',
    innerHTML: `
      <h2 class="aside__title"><a href="#">Горящие туры в Стамбул от 20 000 руб.</a></h2>
      <p class="aside__description">Окунись в настоящую восточную сказку</p>
    `,
  });

  const asideBlockTwo = createElem('div', {
    className: 'aside__block-two',
    innerHTML: `
      <h2 class="aside__title"><a href="#">Новый RENAULT DUSTER</a></h2>
      <p class="aside__description">Легендарный внедорожник в новом дизайне</p>
    `,
  });

  container.append(asideBlockOne, asideBlockTwo);
  aside.append(container);

  return aside;
};
