
export const paginationController = async (linkBack, linkNext, page, pages) => {

  linkBack.addEventListener('click', async e => {
    e.preventDefault();
    if(page > 1) {
      page--;
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
  linkNext.addEventListener('click', e => {
    e.preventDefault();
    if(page + 1 < pages) {
      page++;
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


