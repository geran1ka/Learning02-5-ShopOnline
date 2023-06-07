import { createArticleHeader } from "./createArticleHeader.js";
import { createAside } from "./createAside.js";
import { createArticle } from "./createAticle.js";
import { createElement } from "./helper.js"

export const renderArticle = () => {
  const wrapper = createElement('div', {
    className: 'wrapper',
  });

  const header = createArticleHeader();
  const {article, footer} = createArticle();
  const aside = createAside();

  wrapper.append(header, article, footer, aside)
  return wrapper;
}