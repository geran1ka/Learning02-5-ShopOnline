import {renderBlog} from './module/renderBlog.js';
import {getDataArticle} from './module/serviceApi.js';
import {API_URL_POST} from './module/const.js';
import {renderArticle} from './module/renderArticle.js';
import {timerInit} from './module/timer/timerInit.js';
import { controllAccordeon } from './script.js';

const init = async () => {
  timerInit();
  controllAccordeon();
  const pageBlog = document.querySelector('.blog-page');
  const search = window.location.search;
  const data = await getDataArticle(API_URL_POST, search);

  const blog = renderBlog(data);
  pageBlog?.append(blog);

  const pageArticle = document.querySelector('.article-page');

  const article = await renderArticle();
  pageArticle?.append(article);
};

init();

// const accordionInit = (elem) => {
//   elem.accordion({
//     active: true,
//     collapsible: true,
//     heightStyle: 'content',
//     icons: {
//       header: 'footer__accord-icon',
//       activeHeader: 'footer__accord-icon footer__accord-icon_active',
//     },
//   });
// };

// export const controllAccordeon = () => {
//   const catalog = $('.footer__catalog');
//   const info = $('.footer__info');
//   let accFlag = false;
//   if (window.innerWidth <= 640) {
//     accordionInit(catalog);
//     accordionInit(info);
//     accFlag = true;
//   }

//   window.addEventListener('resize', () => {
//     if (window.innerWidth <= 640) {
//       accordionInit(catalog);
//       accordionInit(info);

//       accFlag = true;
//     } else {
//       if (accFlag) {
//         catalog.accordion('destroy');
//         info.accordion('destroy');
//         accFlag = false;
//       }
//     }
//   });
// };

// controllAccordeon();
