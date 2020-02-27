const fetching = () => fetch('/posts')
  .then((result) => displayposts(result))
  .catch((error) => document.write('eror database', error));
