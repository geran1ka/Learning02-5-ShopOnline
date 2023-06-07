import { createElement } from "./helper.js"

export const createAside = () => {
  const aside = createElement('aside', {
    className: 'aside',
  });

  const container = createElement('div', {
    className: 'aside-container',
  });

  const asideBlockOne = createElement('div', {
    className: 'aside__block-one',
    innerHTML: `
      <h2 class="aside__title"><a href="#">Горящие туры в Стамбул от 20 000 руб.</a></h2>
      <p class="aside__description">Окунись в настоящую восточную сказку</p>
    `,
  });

  const asideBlockTwo = createElement('div', {
    className: 'aside__block-two',
    innerHTML: `
      <h2 class="aside__title"><a href="#">Новый RENAULT DUSTER</a></h2>
      <p class="aside__description">Легендарный внедорожник в новом дизайне</p>
    `,
  });

  container.append(asideBlockOne, asideBlockTwo);
  aside.append(container);
  return aside;
}