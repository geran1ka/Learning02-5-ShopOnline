import {renderBlog} from './module/renderBlog.js';
import {getDataArticle} from './module/serviceApi.js';
import {API_URL_POST, headerContainer} from './module/const.js';
import {renderArticle} from './module/renderArticle.js';
import {timerInit} from './module/timer/timerInit.js';
import {controllAccordeon, menuControll} from './module/menu&accControl.js';
import { createCard } from './module/createCard.js';
import { createBreadCrumbs } from './module/createBreadCrumbs.js';

const init = async () => {
  menuControll();

  timerInit();
  controllAccordeon();
  const pageBlog = document.querySelector('.blog-page');
  const search = window.location.search;
  const data = await getDataArticle(API_URL_POST, search);

  // const bread = createBreadCrumbs(data);
  // headerContainer?.append(bread);

  const blog = renderBlog(data);
  pageBlog?.append(blog);

  const pageArticle = document.querySelector('.article-page');

  const article = await renderArticle();
  pageArticle?.append(article);

  // const card = createCard();
  // console.log('card: ', card);
  // const pageCard = document.querySelector('.page-card');
  // pageCard?.prepend(card);
};

init();
