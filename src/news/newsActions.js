import NewsApi from '@/news/NewsApi';
import * as newsTypes from '@/news/newsMutations';

export const loadNews = ({commit}) => {
  NewsApi.loadNews()
    .then((news) => {
      commit(newsTypes.setNews, {news});
    });
};
