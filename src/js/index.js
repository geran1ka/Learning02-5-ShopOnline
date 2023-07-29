// import {timerControl} from './timer/timerControl.js';
import {renderBlog} from './module/renderBlog.js';
import {getDataArticle} from './module/serviceApi.js';
import {API_URL_POST} from './module/const.js';
import {renderArticle} from './module/renderArticle.js';
import {renderPagination} from './module/renderPagination.js';
import {paginationController} from './module/paginationControl.js';
import {timerInit} from './timer/timerInit.js';

const init = async () => {
  timerInit();
  const pageBlog = document.querySelector('.page-blog');
  const search = window.location.search;
  const data = await getDataArticle(API_URL_POST, search);

  const {blog, container} = renderBlog(data);
  const {pagination, linkBack, linkNext, page, pages} = renderPagination(data);
  container.append(pagination);
  paginationController(pagination, linkBack, linkNext, page, pages);
  pageBlog?.append(blog);

  const pageArticle = document.querySelector('.page-article');

  const article = await renderArticle();
  pageArticle?.append(article);
};

init();


