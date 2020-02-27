const mainDiv = document.querySelector('.container');

fetching();
const displayposts = (data) => {
  data.forEach((element) => {
    const postDiv = document.createElement('div');
    const title = document.createElement('h2');
    const postImg = document.createElement('img');
    const detail = document.createElement('p');
    const date = document.createElement('p');
    title.textContent = element.title;
    title.className = 'posts-title';
    postImg.src = element.img;
    // postImg.className = 'posts-img';
    detail.textContent = element.detail;
    detail.className = 'posts-detail';
    date.textContent = element.p_date;
    date.className = 'posts-date';
    mainDiv.appendChild(postDiv);
    postDiv.appendChild(title);
    postDiv.appendChild(postImg);
    mainDiv.appendChild(detail);
    mainDiv.appendChild(date);
  });
};
