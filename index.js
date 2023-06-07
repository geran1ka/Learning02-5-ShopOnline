'use strict';

import { renderBlog } from "./module/renderBlog.js";
import { getDataArticle } from "./module/serviceApi.js";
import {API_URL} from './module/const.js'
import { createArticleHeader} from "./module/createArticleHeader.js";
import { createArticle } from "./module/createAticle.js";
import { renderArticle } from "./module/renderArticle.js";


export const router = Router();
console.log('router: ', router);



const init = async () => {
/*
  const page = document.querySelector('.page');
  const data = await getDataArticle(API_URL);
  console.log('data: ', data);
  const blog = renderBlog(data);
  page.append(blog);
  */



const body = document.querySelector('.article-page');
const article = renderArticle();

body.append(article);
}

init();