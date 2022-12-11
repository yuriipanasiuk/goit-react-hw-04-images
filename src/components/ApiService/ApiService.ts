import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '29525266-43f22ff86b92049909965975c';
const FILTER_RESPONSE = `image_type=photo&orientation=horizontal`;

type Fn = (page: number, query: string) => Promise<any>;

const getImage: Fn = async (page, query) => {
  const url = `?q=${query}&page=${page}&key=${API_KEY}&${FILTER_RESPONSE}&per_page=12`;
  const res = await axios.get(url);

  return res.data.hits;
};

export default getImage;
