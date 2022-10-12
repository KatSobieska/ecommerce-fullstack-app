export const getAllProducts = (state) => state.products;

export const getProductById = ({ products }, productId) =>
  products.find((product) => product.id === productId);

export const getProductByCategory = ({ products }, category) =>
  products.filter((product) => product.category === category);

export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    default:
      return statePart;
  }
}
