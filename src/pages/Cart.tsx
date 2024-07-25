import { useState } from "react";
import FTBreadcrumbs from "../components/ui/FTBreadcrumbs";
import FTButton from "../components/ui/FTButton";
import FTEmptyCard from "../components/ui/FTEmptyCard";
import FTListProductCard from "../components/ui/FTListProductCard";
import FTSelect from "../components/ui/FTSelect";
import FTSelectItem from "../components/ui/FTSelectItem";
import { useCreatePurchaseMutation, useGetProductsQuery } from "../redux/api";
import {
  deleteAllProductFromCart,
  deleteProductFromCart,
  TCart,
} from "../redux/features/Cart";
import { TProduct } from "../redux/features/Product";
import useCartAction from "../hooks/useCartAction";
import useHotToast from "../hooks/useHotToast";
import { Divider } from "@nextui-org/react";

const Cart = () => {
  const { ftToast } = useHotToast();
  const { data: products, isLoading, isError } = useGetProductsQuery(undefined);
  const { carts, dispatch } = useCartAction();
  const [paymentMethod, setPaymentMethod] = useState("cash_on_delivery");
  const [createPurchase] = useCreatePurchaseMutation();
  let cartProducts: TProduct[] = [];

  if (!isLoading || !isError) {
    cartProducts = carts?.map((cart: TCart) => {
      for (const product of products?.data ?? []) {
        if (product?._id === cart?.product) {
          return product;
        }
      }
    });
  }

  const totalPrice: number = carts.reduce((price, cart) => {
    const cartPrice = Number(cart.price) * Number(cart.quantity);
    return (price += cartPrice);
  }, 0);

  const handleAction = (id: string) => {
    dispatch(deleteProductFromCart(id));
    ftToast("success", "Success", "Product removed from your cart.");
  };

  const handleConfirmOrder = async () => {
    const cartsData = {
      user: "user_one",
      paymentMethod,
      totalPrice: totalPrice + 15,
      products: carts,
    };
    if (carts?.length < 1) {
      ftToast(
        "error",
        "Error",
        "Cannot place an order. Your cart is currently empty."
      );
      return;
    }
    const res = await createPurchase(cartsData);

    if (res?.data?.success) {
      dispatch(deleteAllProductFromCart());
      ftToast(
        "success",
        "Success",
        "Your order has been approved and is being processed."
      );
    }
  };

  return (
    <div>
      <FTBreadcrumbs />
      <div className="container">
        <h2 className="text-3xl font-semibold text-slate-700 mb-5">Yor Cart</h2>
        
        <div className="grid md:grid-cols-5 gap-5">
          <div className="md:col-span-3 space-y-5">
            {isLoading || isError || !cartProducts?.length ? (
              <FTEmptyCard
                key="cart-products"
                title="Add products to cart."
                description="Your have no products added on cart. Please added products on cart."
              />
            ) : (
              cartProducts?.map((product: TProduct) => (
                <FTListProductCard
                  classNames={{
                    base: "sm:flex-row md:!flex-col lg:!flex-row",
                    img: "md:w-40 md:basis-full lg:w-20 lg:basis-20",
                  }}
                  key={product?._id}
                  product={product}
                  disableRing
                  disableStepper={false}
                  actionButton={{
                    action: "delete",
                    handleAction,
                  }}
                />
              ))
            )}
          </div>
          <div className="md:col-span-2">
            <h5 className="text-lg font-semibold text-slate-700">
              Order Summery
            </h5>
            <div className="space-y-2 mt-5">
              <div className="space-y-3">
                <h5 className="text-slate-500 flex items-center justify-between font-medium">
                  <span>Subtotal</span>{" "}
                  <span className="text-slate-900">
                    {totalPrice.toFixed(2)}$
                  </span>
                </h5>
                <h5 className="text-slate-500 flex items-center justify-between font-medium">
                  <span>Discount</span>{" "}
                  <span className="text-red-500">0.00$</span>
                </h5>
                <h5 className="text-slate-500 flex items-center justify-between font-medium">
                  <span>Delivery Fee</span>{" "}
                  <span className="text-slate-900">15.00$</span>
                </h5>
                <Divider orientation="horizontal" />{" "}
                <h5 className="flex items-center justify-between font-medium text-slate-900">
                  <span>Total</span>{" "}
                  <span>{(totalPrice + 15).toFixed(2)}$</span>
                </h5>
              </div>
              <div>
                <FTSelect
                  // onChange={(e) => handleChange(e)}
                  name="payment-type"
                  placeholder="Select a payment type."
                  aria-labelledby="payment-method"
                  defaultSelectedKeys={["cash_on_delivery"]}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <FTSelectItem key="cash_on_delivery">
                    Cash On Delivery
                  </FTSelectItem>
                </FTSelect>
              </div>
              <FTButton
                fullWidth
                onPress={handleConfirmOrder}
                color="primary"
                size="lg"
                className="!mt-5"
              >
                Confirm Order
              </FTButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
