import axios from 'axios';

const API_KEY = '9b9248b480504200987489a213f6e489';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async(category = 'general', page = 1, query = '') => {
    const url = `${BASE_URL}/top-headlines?category=${category}&apiKey=${API_KEY}&page=${page}&q=${query}`;
    const response = await axios.get(url);
    return response.data;
};