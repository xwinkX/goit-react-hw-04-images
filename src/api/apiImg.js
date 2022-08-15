const apiKey = '28142937-a3dfb3cd180998f959efa9eff';
const baseUrl = 'https://pixabay.com/api/';

export const apiImg = (imagesName, page) =>
  fetch(
    `${baseUrl}?q=${imagesName}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
