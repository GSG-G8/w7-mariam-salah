const mainDiv = document.querySelector('.container');

fetching();
const displayposts = (data) => {
  data.forEach((element) => {
    const postDiv = document.createElement('div');
    const title = document.createElement('h2');
    const postImg = document.createElement('img');
    const like = document.createElement('i');
    const detail = document.createElement('p');
    const date = document.createElement('p');

    postDiv.className = 'posts-div';
    title.textContent = element.title;
    title.className = 'posts-title';
    postImg.src = element.img;
    postImg.className = 'posts-img';
    postImg.alt = element.title;
    like.className = 'far fa-heart';
    detail.textContent = element.detail;
    detail.className = 'posts-detail';
    const [postDate] = element.p_date.split('T');
    date.textContent = postDate;
    date.className = 'posts-date';

    postDiv.appendChild(title);
    postDiv.appendChild(postImg);
    postDiv.appendChild(like);
    postDiv.appendChild(detail);
    postDiv.appendChild(detail);
    postDiv.appendChild(date);
    mainDiv.appendChild(postDiv);
  });
};
