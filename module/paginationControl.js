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
    if (page + 1 < pages) {
      page++;
    }
  });

  pagination.addEventListener('click', async () => {
    renderBlog(await getDataArticle(API_URL_POST, `?page=${page}`));
    window.location.assign(`${url}?page=${page}`);
  });

  if (page >= pages) {
    linkNext.classList.add('pagination__link_disabled');
  } else if (page <= 1) {
    linkBack.classList.add('pagination__link_disabled');
  } else {
    if (linkBack.classList.contains('.pagination__link_disabled')) {
      linkBack.classList.remove('pagination__link_disabled');
    }
    if (linkNext.classList.contains('.pagination__link_disabled')) {
      linkNext.classList.remove('pagination__link_disabled');
    }
  }
  return page;
};


