const fetching = require('./logic');

const mainDiv = document.getElementById('table-container');

fetching();
const creatBlog = (data) => {
  data.forEach(element => {
    const title = document.createElement('h2');
    const postImg = document.createElement('img');
    const detail = document.createElement('p');
    const date = document.createElement('p');

    title.textContent = "1"
    postImg.src = "1"
    detail.textContent = "1"
    date.textContent = "1"
  });

};
