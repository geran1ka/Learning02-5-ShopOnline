import { API_URL_POST } from "./const.js";
import { renderBlog } from "./renderBlog.js";
import { getDataArticle } from "./serviceApi.js";

export const paginationController = async (linkBack, linkNext, page, pages) => {
  let url = window.location.href.slice(0, window.location.href.length - window.location.search.length)

  linkBack.addEventListener('click', async e => {
    e.preventDefault();
    if(page > 1) {
      page--;
      
      const data = await getDataArticle(API_URL_POST,`?page=${page}`);
      renderBlog(data);
      window.location.assign(`${url}?page=${page}`);
    ;
    }
    if (page + 1 < pages && page - 1 > 1) {
      if (linkBack.classList.contains('.pagination__link_disabled')) {
        linkBack.classList.remove('pagination__link_disabled')}
      if (linkNext.classList.contains('.pagination__link_disabled')) {
        linkNext.classList.remove('pagination__link_disabled')}
    } else if (page + 1 >= pages) {
      linkNext.classList.add('pagination__link_disabled');
    } else if (page - 1 <= 1) {
      linkBack.classList.add('pagination__link_disabled');
    };
    const data = await getDataArticle(API_URL_POST,`?page=${page}`);
    renderBlog(data);
  })
  linkNext.addEventListener('click', async e => {
    e.preventDefault();
    if(page + 1 < pages) {
      page++;

      const data = await getDataArticle(API_URL_POST,`?page=${page}`);
      renderBlog(data);
      window.location.assign(`${url}?page=${page}`);
    }
  
    if (page < pages && page > 1) {
      linkBack.classList.remove('pagination__link_disabled');
      linkNext.classList.remove('pagination__link_disabled');
    } else if (page >= pages) {
      linkNext.classList.add('pagination__link_disabled');
    } else if (page - 1 <= 1) {
      linkBack.classList.add('pagination__link_disabled')
    };
    

  })

  return page;
}


