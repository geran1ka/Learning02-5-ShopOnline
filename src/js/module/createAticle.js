import {createElem} from './function/createElem.js';

export const createArticle = async (data) => {
  const userId = data.data.user_id;

  const authorName = await (await fetch(`https://gorest.co.in/public-api/users/${userId}`)).json();

  const articleMain = createElem('div', {
    className: 'article-main',
  });

  const container = createElem('container', {
    className: 'article-main__container',
  });

  const articleTitle = createElem('h2', {
    className: 'article-main__title',
    textContent: data.data.title,
  });

  const articleContent = createElem('div', {
    className: 'article-main__content',
  });

  const firstParagraf = createElem('p', {
    className: 'article-main__text',
    textContent: data.data.body,
  });

  articleContent.append(firstParagraf);
  container.append(articleTitle, articleContent);
  articleMain.append(container);

  const footer = createElem('footer', {
    className: 'article-footer',
  });

  const footerContainer = createElem('div', {
    className: 'article-main__container article-footer__container',
  });

  const footerNavigation = createElem('div', {
    className: 'article-footer__navigation',
  });

  const footerLink = createElem('a', {
    className: 'article-footer__link',
    href: '#',
    textContent: 'К списку статей',
  });

  footerLink.addEventListener('click', e => {
    window.history.back();
  });

  const footerDevelopment = createElem('div', {
    className: 'article-footer__development',
  });

  const author = createElem('p', {
    className: 'article-footer__author',
    textContent: authorName.data.name ? authorName.data.name : 'Аноним',
  });

  const footerInfoWrapper = createElem('div', {
    className: 'article-footer__info',
  });

  const footerDate = createElem('div', {
    className: 'article-footer__date',
    innerHTML: `
      <p>22 октября 2021, 12:45</p>
    `,
  });

  const footerCountWrapper = createElem('div', {
    className: 'article-footer__count-wrapper',
  });

  const footerViewsLink = createElem('a', {
    className: 'article-footer__views-link',
    href: `#`,
    innerHTML: `
      <svg class="footer__views-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.257 11.462C21.731 12.082 21.731 12.919 21.257 13.538C19.764 15.487 16.182 19.5 12 19.5C7.81801 19.5 4.23601 15.487 2.74301 13.538C2.51239 13.2411 2.38721 12.8759 2.38721 12.5C2.38721 12.1241 2.51239 11.7589 2.74301 11.462C4.23601 9.513 7.81801 5.5 12 5.5C16.182 5.5 19.764 9.513 21.257 11.462V11.462Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>                    
      <span class="footer__views-count">1.2K</span>
    `,
  });

  const footerCommentLink = createElem('a', {
    className: 'article-footer__views-link',
    href: `#`,
    innerHTML: `
      <svg class="footer__views-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1502_178)">
          <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z" />
        </g>
      </svg>  
      <span class="footer__comment-count">0</span>
    `,
  });

  footerCommentLink.addEventListener('click', e => {
    console.log('назад');

    history.back();
  });


  footerCountWrapper.append(footerViewsLink, footerCommentLink);
  footerInfoWrapper.append(footerDate, footerCountWrapper);
  footerDevelopment.append(author, footerInfoWrapper);
  footerNavigation.append(footerLink);
  footerContainer.append(footerNavigation, footerDevelopment);
  footer.append(footerContainer);


  return {articleMain, footer};
};
