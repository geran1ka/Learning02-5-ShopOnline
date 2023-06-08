import {renderBlog} from './module/renderBlog.js';
import {getDataArticle} from './module/serviceApi.js';
import {API_URL_POST} from './module/const.js';
import {renderArticle} from './module/renderArticle.js';
import {renderPagination} from './module/renderPagination.js';
import {paginationController} from './module/paginationControl.js';


const init = async () => {
  const pageBlog = document.querySelector('.page-blog');
  const search = window.location.search;
  const data = await getDataArticle(API_URL_POST, search);

  const {blog, container} = renderBlog(data);
  const {pagination, linkBack, linkNext, page, pages, selectPagination} = renderPagination(data);
  container.append(pagination);
  paginationController(pagination, linkBack, linkNext, page, pages, selectPagination);
  pageBlog?.append(blog);

  const pageArticle = document.querySelector('.page-article');

  if (pageArticle) {
    const article = await renderArticle();
    pageArticle?.append(article);
  }
};

init();
