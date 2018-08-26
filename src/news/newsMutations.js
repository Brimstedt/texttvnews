

export const setNews = 'NEWS_SET';

export default {
  [setNews] (state, { news }) {
    state.newsItems = news;
  },
};
