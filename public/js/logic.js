const fetching = () => {
  return fetch('/blogger')
    .then((result) => displayPlogs(result))
    .catch((error) => document.write('eror database', error));
};
