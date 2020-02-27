const fetching = () =>
  fetch('/posts')
    .then((result) => result.json())
    .then((posts) => displayposts(posts))
    .catch((error) => console.error('eror database', error));
