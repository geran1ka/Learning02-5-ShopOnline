import {API_URL_POST} from './const.js';
import {createArticleHeader} from './createArticleHeader.js';
import {createAside} from './createAside.js';
import {createArticle} from './createAticle.js';
import {createElement} from './helper.js';
import {getDataArticle} from './serviceApi.js';

export const renderArticle = async () => {
  const wrapper = createElement('div', {
    className: 'wrapper',
  });

  const data = await getDataArticle(API_URL_POST, window.location.search.slice(4));


  const header = createArticleHeader(data);
  const {article, footer} = await createArticle(data);
  const aside = createAside();

  wrapper.append(header, article, footer, aside);
  return wrapper;
};
