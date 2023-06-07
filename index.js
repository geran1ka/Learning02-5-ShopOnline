import { renderBlog } from "./module/renderBlog.js";
import { getDataArticle } from "./module/serviceApi.js";
import {API_URL_POST} from './module/const.js'
import { createArticleHeader} from "./module/createArticleHeader.js";
import { createArticle } from "./module/createAticle.js";
import { renderArticle } from "./module/renderArticle.js";
import { renderPagination } from "./module/renderPagination.js";
import { paginationController } from "./module/paginationControl.js";




const init = async () => {
  const pag = document.querySelector('.page');
  const data = await getDataArticle(API_URL_POST,'?page=24');
  console.log('data: ', data);
  const {blog, container} = renderBlog(data);
  const {pagination, linkBack, linkNext, paginationList, page, pages} = renderPagination(data);
  console.log(linkNext);
  container.append(pagination)

  paginationController(linkBack, linkNext, page, pages);
  console.log(paginationController(linkBack, linkNext, page));

  console.log(page);

  pag?.append(blog);
  



const body = document.querySelector('.article-page');
const article = await renderArticle();
body?.append(article);

}

init();