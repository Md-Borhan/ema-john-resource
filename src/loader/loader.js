import { getShoppingCart } from "../utilities/fakedb";

const loaderProducts = async () => {
  const loadedProducts = await fetch("products.json");
  const loadData = await loadedProducts.json();

  const storedCart = getShoppingCart();
  const savedCart = [];

  for (const id in storedCart) {
    const addedProduct = loadData.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  // if you need sent multiple return items using  two ways
  // 1. return [(loadData, savedCart)];
  // 2. return {loadData, savedCart}

  return savedCart;
};

export default loaderProducts;
