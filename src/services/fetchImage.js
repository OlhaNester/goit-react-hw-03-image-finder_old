import axios from 'axios';
const apiKey = '9657010-5b32a47b9f15e54eb73ad95a0';
const baseURL = 'https://pixabay.com/api/';
const fetchImage = ({ filter = '', page = 1, qOnPage = 12 }) => {
  return axios
    .get(
      `${baseURL}?q=${filter}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${qOnPage}`,
    )
    .then(response => {
      console.log(response.data.hits);
      this.setState({ images: response.data.hits });
    })
    .catch(error => console.error());
};
export default fetchImage;
