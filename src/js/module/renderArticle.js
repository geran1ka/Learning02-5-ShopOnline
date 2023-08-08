import {createElem} from './function/createElem.js';
import {API_URL_POST} from './const.js';
import {createBreadCrumbs} from './createBreadCrumbs.js';
import {createAside} from './createAside.js';
import {createArticle} from './createAticle.js';
import {getDataArticle} from './serviceApi.js';

export const renderArticle = async () => {
  const idU = window.location.search.slice(4);
  const data = await getDataArticle(API_URL_POST, idU);
  const article = createElem('article', {
    className: 'article',
  });

  const container = createElem('div', {
    className: 'container article-container',
  });

  const header = createBreadCrumbs(data);
  const {articleMain, footer} = await createArticle(data);
  const aside = createAside();

  container.append(header, articleMain, footer, aside);
  article.append(container);

  return article;
};
