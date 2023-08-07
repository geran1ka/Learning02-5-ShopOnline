import {API_URL_POST} from './const.js';
import {renderBlog} from './renderBlog.js';
import {getDataArticle} from './serviceApi.js';

export const paginationController = async (pagination, linkBack, linkNext, page, pages) => {
  const url = window.location.href.slice(0, window.location.href.length - window.location.search.length);

  linkBack.addEventListener('click', async e => {
    e.preventDefault();
    if (page > 1) {
      page--;
    }
  });
  linkNext.addEventListener('click', async e => {
    e.preventDefault();
    if (page + 1 <= pages) {
      page++;
    }
  });

  pagination.addEventListener('click', async e => {
    e.preventDefault();
    if (e.target.closest('.blog-pagination__link')) {
      renderBlog(await getDataArticle(API_URL_POST, `?page=${page}`));
      window.location.assign(`${url}?page=${page}`);
    }

    if (e.target.closest('.blog-pagination__item')) {
      console.log(e.target.textContent);
      renderBlog(await getDataArticle(API_URL_POST, `?page=${e.target.textContent}`));
      window.location.assign(`${url}?page=${e.target.textContent}`);
    }
  });

  if (page >= pages) {
    linkNext.classList.add('blog-pagination__link_disabled');
    linkNext.setAttribute('disabled', 'disabled');
  } else if (page <= 1) {
    linkBack.classList.add('blog-pagination__link_disabled');
    linkBack.setAttribute('disabled', 'disabled');
  } else {
    if (linkBack.classList.contains('.blog-pagination__link_disabled')) {
      linkBack.classList.remove('blog-pagination__link_disabled');
      linkBack.setAttribute('disabled', 'disabled');
    }
    if (linkNext.classList.contains('.blog-pagination__link_disabled')) {
      linkNext.classList.remove('blog-pagination__link_disabled');
      linkNext.removeAttribute('disabled');
    }
  }
  return page;
};


