const fetching = require('./logic');

const mainDiv = document.getElementById('table-container');

fetching();
const creatBlog = (data) => {
  data.forEach((element) => {
    const title = document.createElement('h2');
    const postImg = document.createElement('img');
    const detail = document.createElement('p');
    const date = document.createElement('p');

    title.textContent = element.title;
    title.className = 'posts-title';
    postImg.src = element.detail;
    postImg.className = 'posts-img';
    detail.textContent = element.img;
    detail.className = 'posts-detail';
    date.textContent = element.p_date;
    date.className = 'posts-date';

    mainDiv.appendChild(title);
    mainDiv.appendChild(postImg);
    mainDiv.appendChild(detail);
    mainDiv.appendChild(date);
  });
};
