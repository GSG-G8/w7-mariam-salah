const creatBlog = require('./dom');

const fetching = () => {
  return fetch('/posts')
    .then((result) => creatBlog(result))
    .catch((error) => document.write('eror database', error));
};

module.exports = fetching;
