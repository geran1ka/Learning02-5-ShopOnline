import {createElem} from './createElem.js';
import {paginationController} from './paginationControl.js';
import {renderPagination} from './renderPagination.js';

export const renderBlog = (data) => {
  const section = createElem('section', {
    className: 'blog',
  });

  const container = createElem('div', {
    className: 'container blog-container',
  });

  const {pagination, linkBack, linkNext, page, pages} = renderPagination(data);
  paginationController(pagination, linkBack, linkNext, page, pages);


  section.append(container);

  const blogContentWrapper = createElem('div', {
    className: 'blog__container',
  });

  const blogList = createElem('ul', {
    className: 'blog__list',
  });

  const itemList = data.data.map(item => {
    const li = createElem('li', {
      className: 'blog__item blog-item',
    });
    const itemImg = createElem('img', {
      className: 'blog-item__img',
      src: item.image ? item.image : './img/blog/no-photo.jpg',
      alt: '#',
    });

    const itemContent = createElem('div', {
      className: 'blog-item__content-wrapper',
    });

    const itemTitle = createElem('h2', {
      className: 'blog-item__title',
    });

    const itemTitleLink = createElem('a', {
      className: 'blog-item__title-link',
      href: `article.html?id=${item.id}`,
      textContent: `${item.title}`,
    });

    itemTitle.append(itemTitleLink);

    const itemInfoWrapper = createElem('div', {
      className: 'blog-item__info',
    });

    const itemData = createElem('div', {
      className: 'blog-item__date date',
    });

    const time = createElem('p', {
      textContent: '22 октября 2021, 12:45',
    });

    itemData.append(time);

    const itemCountWrapper = createElem('div', {
      className: 'blog-item__count-wrapper',
    });

    const linkViewsCounter = createElem('a', {
      className: 'blog-item__views-link',
      href: '#',
      innerHTML: `
        <svg class="blog-item__views-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.257 11.462C21.731 12.082 21.731 12.919 21.257 13.538C19.764 15.487 16.182 19.5 12 19.5C7.81801 19.5 4.23601 15.487 2.74301 13.538C2.51239 13.2411 2.38721 12.8759 2.38721 12.5C2.38721 12.1241 2.51239 11.7589 2.74301 11.462C4.23601 9.513 7.81801 5.5 12 5.5C16.182 5.5 19.764 9.513 21.257 11.462V11.462Z" stroke="#8F8F8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z" stroke="#8F8F8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>                    
        <span class="item__views-count">1.2K</span>
      `,
    });

    const linkViewsComent = createElem('a', {
      className: 'blog-item__views-link',
      href: '#',
      innerHTML: `
        <svg class="blog-item__views-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1502_178)">
            <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z" fill="#8F8F8F"/>
          </g>
        </svg>  
        <span class="item__comment-count">0</span>
      `,
    });

    itemCountWrapper.append(linkViewsCounter, linkViewsComent);
    itemInfoWrapper.append(itemData, itemCountWrapper);
    itemContent.append(itemTitle, itemInfoWrapper);
    li.append(itemImg, itemContent);

    return li;
  });
  blogList.append(...itemList);
  blogContentWrapper.append(blogList);
  container.append(blogContentWrapper, pagination);
  // const urlPageBlog = window.location.href;

  return section;
};
