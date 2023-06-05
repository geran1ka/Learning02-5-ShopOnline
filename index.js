'use strict';

const listArticle = async () => {
  const result = await fetch('https://gorest.co.in/public-api/posts?page=24');
  const data = await result.json();
  console.log('data: ', data);
};

listArticle()

