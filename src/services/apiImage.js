import axios from 'axios';

// const apiKey = '9657010-5b32a47b9f15e54eb73ad95a0';
// const baseURL = 'https://pixabay.com/api/';
const fetchImage = ({ filter = '', page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${filter}&page=${page}&key=9657010-5b32a47b9f15e54eb73ad95a0&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data);
};
export default { fetchImage };
