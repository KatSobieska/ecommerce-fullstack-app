export const getAllArticles = (state) => state.articles;

export const getArticleById = ({ articles }, articleId) =>
  articles.find((article) => article.id === articleId);

export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    default:
      return statePart;
  }
}
