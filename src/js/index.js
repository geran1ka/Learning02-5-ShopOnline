import {renderBlog} from './module/renderBlog.js';
import {getDataArticle} from './module/serviceApi.js';
import {API_URL_POST} from './module/const.js';
import {renderArticle} from './module/renderArticle.js';
import {timerInit} from './module/timer/timerInit.js';

const init = async () => {
  timerInit();
  const pageBlog = document.querySelector('.blog-page');
  const search = window.location.search;
  const data = await getDataArticle(API_URL_POST, search);

  const blog = renderBlog(data);
  pageBlog?.append(blog);

  const pageArticle = document.querySelector('.article-page');

  const article = await renderArticle();
  pageArticle?.append(article);
};

init();

