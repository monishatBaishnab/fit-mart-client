import { TProduct } from "../redux/features/Product";
import { useFTDispatch, useFTSelector } from "../redux/hooks";

const useCartAction = (product?: TProduct) => {
  // Find number of products is available
  const productQuantity = Number(product?.stockQuantity);

  const dispatch = useFTDispatch();
  const carts = useFTSelector((state) => state.carts);

  // Find the current product in cart
  const isExistsProductOnCart = carts.find(
    (cart) => cart.product === product?._id
  );

  // If found current product in cart set cart quantity value {isExistsProductOnCart?.quantity} or set value 0
  const cartQuantity = isExistsProductOnCart?.quantity
    ? Number(isExistsProductOnCart?.quantity)
    : 0;

  // Create current quantity variable and set value is product quantity.
  let availableQuantity = productQuantity;

  // If found current product in cart then set the calculate value.
  if (cartQuantity !== 0) {
    availableQuantity -= cartQuantity;
  }

  const totalPrice: number = carts.reduce((price, cart) => {
    const cartPrice = Number(cart.price) * Number(cart.quantity);
    return (price += cartPrice);
  }, 0);
  return {
    dispatch,
    carts,
    productQuantity,
    cartQuantity,
    availableQuantity,
    totalPrice,
    isExists: Object.keys(isExistsProductOnCart ?? {}).length ? true : false
  };
};

export default useCartAction;
