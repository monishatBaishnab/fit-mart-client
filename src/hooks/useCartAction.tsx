import { useState } from "react";
import { addProductToCart } from "../redux/features/Cart";
import { TProduct } from "../redux/features/Product";
import { useFTDispatch, useFTSelector } from "../redux/hooks";

const useCartAction = (product: TProduct) => {
  const dispatch = useFTDispatch();
  const carts = useFTSelector((state) => state.carts);
  const currentCart = carts.find((cart) => cart.productId === product._id);
  const [quantity, setQuantity] = useState<number>(currentCart?.quantity ?? 1);

  const productQuantity = Number(product.stockQuantity);
  const maxQuantity = productQuantity < 10 ? productQuantity : 10;

  const handleCartAction = (action?: string, isDispatch?: boolean) => {
    if (action) {
      setQuantity((prev) => {
        let currentQuantity: number = prev;
        if (action === "inc" && prev < maxQuantity) {
          currentQuantity = prev + 1;
        } else if (action === "dec" && prev > 1) {
          currentQuantity = prev - 1;
        }

        const availableProductQuantity = productQuantity - currentQuantity;
        if (availableProductQuantity >= 0 && isDispatch) {
          dispatch(
            addProductToCart({
              userId: "user_one",
              productId: product?._id as string,
              productPrice: Number(product.price),
              quantity: currentQuantity,
            })
          );
        } else if (availableProductQuantity < 0) {
          console.log("product not available");
        }
        return currentQuantity;
      });
    } else if (action === "" && isDispatch) {
      const availableProductQuantity = productQuantity - quantity;
      if (availableProductQuantity >= 0 && isDispatch) {
        dispatch(
          addProductToCart({
            userId: "user_one",
            productId: product?._id as string,
            productPrice: Number(product.price),
            quantity: quantity,
          })
        );
      } else if (availableProductQuantity < 0) {
        console.log("product not available");
      }
    }
  };
  console.log(carts);
  return {
    handleCartAction,
    quantity,
  };
};

export default useCartAction;
