import {createElem} from '../createElem.js';
import {createArticleHeader} from './createArticleHeader.js';
import {createAside} from './createAside.js';
import {createArticle} from './createAticle.js';

export const renderArticle = async () => {
  const wrapper = createElem('div', {
    className: 'container article-container',
  });

  const header = createArticleHeader();
  const {article, footer} = await createArticle();
  const aside = createAside();

  wrapper.append(header, article, footer, aside);

  return wrapper;
};
