// import {createElem} from './createElem.js';

// export const createArticle = async (data) => {
//   const userId = data.data.user_id;

//   const authorName = await (await fetch(`https://gorest.co.in/public-api/users/${userId}`)).json();

// export const createArticle = () => {
//   const cardMain = createElem('div', {
//     className: 'card-main',
//   });

//   const section = createElem('section', {
//     className: 'card',
//   })

//   const container = createElem('container', {
//     className: 'card__container',
//   });

//   const cardTitle = createElem('h2', {
//     className: 'card__title',
//     textContent: '15.6" Игровой ноутбук ASUS G513IE-HN004T',
//   });

//   const cardContent = createElem('div', {
//     className: 'card__content',
//   });

//   const cardImg = createElem('img', {
//     className: 'card__img',
//     src: './img/card/cardNout.jpg',
//     alt: '15.6" Игровой ноутбук ASUS G513IE-HN004T',
//   });

//   const cardInfo = createElem('div', {
//     className: 'card__info',
//   });

//   const cardPrice = createElem('div', {
//     className: 'card__price',
//   });

//   const cardPriceNew = createElem('p', {
//     className: 'card__price-new',
//   });

//   const cardPriceOld = createElem('span', {
//     className: 'card__price-old',
//   });

//   const cardPriceCredit = createElem('p', {
//     className: 'card__price-credit',
//   });

//   cardPrice.append(cardPriceNew, cardPriceOld, cardPriceCredit);

//   const cardBtnWrapper = createElem('div', {
//     className: 'card__btn-wrapper',
//   });

//   const btnAddCart = createElem('button', {
//     className: 'card__btn-cart',
//     textContent: 'Добавить в корзину',
//   });

//   const btnAddFavorite = createElem('button', {
//     className: 'card__btn-favorite',
//     ariaLabel: 'Добавить в избранное',
//     innerHTML: `
//     <svg class="card__svg-favorite" width="33" height="33" viewBox="0 0 33 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//       <g clip-path="url(#clip0_901_1437)">
//       <path d="M22.6875 4.125C20.295 4.125 17.9987 5.23875 16.5 6.99875C15.0012 5.23875 12.705 4.125 10.3125 4.125C6.0775 4.125 2.75 7.4525 2.75 11.6875C2.75 16.885 7.425 21.12 14.5062 27.555L16.5 29.3563L18.4937 27.5413C25.575 21.12 30.25 16.885 30.25 11.6875C30.25 7.4525 26.9225 4.125 22.6875 4.125ZM16.6375 25.5062L16.5 25.6437L16.3625 25.5062C9.8175 19.58 5.5 15.6613 5.5 11.6875C5.5 8.9375 7.5625 6.875 10.3125 6.875C12.43 6.875 14.4925 8.23625 15.2212 10.12H17.7925C18.5075 8.23625 20.57 6.875 22.6875 6.875C25.4375 6.875 27.5 8.9375 27.5 11.6875C27.5 15.6613 23.1825 19.58 16.6375 25.5062Z"/>
//       </g>
//     </svg>
//     `,
//   });

//   cardBtnWrapper.append(btnAddCart, btnAddFavorite);

//   const cardWrapperDeliverySalesman = createElem('div', {
//     className: 'card__wrapper-delsal',
//   });

//   const cardDelivery = createElem('p', {
//     className: 'card__delivery',
//     textContent: 'Доставка',
//   }, {
//     append: createElem('span', {
//       className: 'card__delivery-date',
//       textContent: '1-3 января',
//     }),
//   });

//   const cardSalesman = createElem('p', {
//     className: 'card__salesman',
//     textContent: 'Продавец',
//   }, {
//     append: createElem('span', {
//       className: 'card__salesman-name',
//       textContent: 'ShopOnline',
//     }),
//   });

//   const 

//   const cardDiscountInfo = createElem('div', {
//     className: 'card__discount-info',
//     innerHTML: `
//     <svg class="card__discount-btn" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M19 13.586V10C19 6.783 16.815 4.073 13.855 3.258C13.562 2.52 12.846 2 12 2C11.154 2 10.438 2.52 10.145 3.258C7.185 4.074 5 6.783 5 10V13.586L3.293 15.293C3.19996 15.3857 3.12617 15.4959 3.07589 15.6172C3.0256 15.7386 2.99981 15.8687 3 16V18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18V16C21.0002 15.8687 20.9744 15.7386 20.9241 15.6172C20.8738 15.4959 20.8 15.3857 20.707 15.293L19 13.586ZM19 17H5V16.414L6.707 14.707C6.80004 14.6143 6.87383 14.5041 6.92412 14.3828C6.9744 14.2614 7.00019 14.1313 7 14V10C7 7.243 9.243 5 12 5C14.757 5 17 7.243 17 10V14C17 14.266 17.105 14.52 17.293 14.707L19 16.414V17ZM12 22C12.6193 22.0008 13.2235 21.8086 13.7285 21.4502C14.2335 21.0917 14.6143 20.5849 14.818 20H9.182C9.38566 20.5849 9.76648 21.0917 10.2715 21.4502C10.7765 21.8086 11.3807 22.0008 12 22Z" fill="#3670C7"/>
//     </svg>

//     <p class="card__discount-title">Узнать о снижении цены</p>
//     `,
//   })

//   c

//   const cardDescription = createElem('div', {
//     className: 'card__description',
//   });

//   const cardDescriptionTitle = createElem('h3', {
//     className: 'card__description-title',
//   });

//   const cardDescriptionText = createElem('p', {
//     className: 'card__description-text',
//     textContent: `
//       ROG Strix G15/17 – это игровая платформа для массового пользователя,
//       работающая на базе операционной системы Windows 10 Pro. Благодаря 
//       мощной конфигурации, которая может включать в себя процессор AMD 
//       Ryzen 9 5900HX и видеокарту GeForce RTX 3070, этот ноутбук подходит 
//       для широкого спектра задач. Его дисплей доступен в двух вариантах: 
//       с киберспортивного уровня частотой обновления в 300 Гц или с высоким 
//       разрешением WQHD. Оба варианта обладают низким временем отклика (3 мс) 
//       и поддерживают адаптивную синхронизацию Adaptive-Sync. Оптимизированная 
//       система охлаждения гарантирует стабильную работу устройства под тяжелыми 
//       нагрузками, поэтому ROG Strix G15/17 позволит вам проявить все свое 
//       мастерство в любой игровой ситуации!
//       `,
//   });


//   articleContent.append(firstParagraf);
//   container.append(articleTitle, articleContent);
//   articleMain.append(container);

//   const footer = createElem('footer', {
//     className: 'article-footer',
//   });

//   const footerContainer = createElem('div', {
//     className: 'article-main__container article-footer__container',
//   });

//   const footerNavigation = createElem('div', {
//     className: 'article-footer__navigation',
//   });

//   const footerLink = createElem('a', {
//     className: 'article-footer__link',
//     href: '#',
//     textContent: 'К списку статей',
//   });

//   footerLink.addEventListener('click', e => {
//     window.history.back();
//   });

//   const footerDevelopment = createElem('div', {
//     className: 'article-footer__development',
//   });

//   const author = createElem('p', {
//     className: 'article-footer__author',
//     textContent: authorName.data.name ? authorName.data.name : 'Аноним',
//   });

//   const footerInfoWrapper = createElem('div', {
//     className: 'article-footer__info',
//   });

//   const footerDate = createElem('div', {
//     className: 'article-footer__date',
//     innerHTML: `
//       <p>22 октября 2021, 12:45</p>
//     `,
//   });

//   const footerCountWrapper = createElem('div', {
//     className: 'article-footer__count-wrapper',
//   });

//   const footerViewsLink = createElem('a', {
//     className: 'article-footer__views-link',
//     href: `#`,
//     innerHTML: `
//       <svg class="footer__views-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
//         <path d="M21.257 11.462C21.731 12.082 21.731 12.919 21.257 13.538C19.764 15.487 16.182 19.5 12 19.5C7.81801 19.5 4.23601 15.487 2.74301 13.538C2.51239 13.2411 2.38721 12.8759 2.38721 12.5C2.38721 12.1241 2.51239 11.7589 2.74301 11.462C4.23601 9.513 7.81801 5.5 12 5.5C16.182 5.5 19.764 9.513 21.257 11.462V11.462Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//         <path d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//       </svg>                    
//       <span class="footer__views-count">1.2K</span>
//     `,
//   });

//   const footerCommentLink = createElem('a', {
//     className: 'article-footer__views-link',
//     href: `#`,
//     innerHTML: `
//       <svg class="footer__views-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//         <g clip-path="url(#clip0_1502_178)">
//           <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z" />
//         </g>
//       </svg>  
//       <span class="footer__comment-count">0</span>
//     `,
//   });

//   footerCommentLink.addEventListener('click', e => {
//     console.log('назад');

//     history.back();
//   });


//   footerCountWrapper.append(footerViewsLink, footerCommentLink);
//   footerInfoWrapper.append(footerDate, footerCountWrapper);
//   footerDevelopment.append(author, footerInfoWrapper);
//   footerNavigation.append(footerLink);
//   footerContainer.append(footerNavigation, footerDevelopment);
//   footer.append(footerContainer);


//   return {articleMain, footer};
// };
