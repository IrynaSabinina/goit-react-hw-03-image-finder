import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/';
const API_KEY = '28362853-f4179f2b0382cbb2305a6e9dc';
let page = 1;
export const api = search => {
  return axios.get(`api/?key=${API_KEY}&q=${search}&page=${page}$per_page=12'`);

  //     .then(res => res.json())
  //     .then(images => this.setState({ images }))
  //     .finally(() => this.setState({ loading: false }));
  //   console.log(images);
};
