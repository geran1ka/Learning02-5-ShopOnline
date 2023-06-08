export const paginationController = async (pagination, linkBack, linkNext, page, pages, selectPagination) => {
  const url = window.location.href.slice(0, window.location.href.length - window.location.search.length);
  selectPagination.selectedIndex = window.localStorage.getItem('select');
  pagination.addEventListener('click', async ({target}) => {
    if (target.closest('.pagination__link')) {
      if (target.closest('.pagination__link-back')) {
        if (page > 1) {
          if (+selectPagination.value !== 0) {
            page = page - +selectPagination.value < 1 ? 1 : page - +selectPagination.value;
          } else {
            page -= 1;
          }
        }
      }
      if (target.closest('.pagination__link-next')) {
        if (page + 1 < pages) {
          if (+selectPagination.value !== 0) {
            page = page + +selectPagination.value > pages ? pages : page + +selectPagination.value;
          } else {
            page += 1;
          }
        }
      }
      let index = selectPagination.selectedIndex;
      window.localStorage.setItem('select', index);
      window.location.assign(`${url}?page=${page}`);
    }
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


