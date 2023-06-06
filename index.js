'use strict';

import { renderBlog } from "./module/renderBlog.js";
import { getDataArticle } from "./module/serviceApi.js";
import {API_URL} from './module/const.js'




const init = async () => {

  const page = document.querySelector('.page');
  const data = await getDataArticle(API_URL);
  console.log('data: ', data);
  const blog = renderBlog(data);
  page.append(blog);

}

init();