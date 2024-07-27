import FTBreadcrumbs from "../components/ui/FTBreadcrumbs";
import FTButton from "../components/ui/FTButton";
import FTEmptyCard from "../components/ui/FTEmptyCard";
import FTListProductCard from "../components/ui/FTListProductCard";
import { useGetProductsQuery } from "../redux/api";
import { deleteProductFromCart, TCart } from "../redux/features/Cart";
import { TProduct } from "../redux/features/Product";
import useCartAction from "../hooks/useCartAction";
import useHotToast from "../hooks/useHotToast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { ftToast } = useHotToast();
  const navigate = useNavigate();
  const { data: products, isLoading, isError } = useGetProductsQuery(undefined);
  const { carts, dispatch, totalPrice } = useCartAction();
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

  const handleAction = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your product will be removed from your cart.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      customClass: {
        confirmButton: "!bg-indigo-600",
        cancelButton: "!bg-red-500",
        container: "!bg-indigo-600/10 backdrop-blur-sm",
        title: "text-slate-700",
        footer: "",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductFromCart(id));

        ftToast("success", "Success", "Product removed from your cart.");
      }
    });
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
                  <span>Total</span>{" "}
                  <span className="text-slate-900">
                    {totalPrice.toFixed(2)}$
                  </span>
                </h5>
              </div>
              <FTButton
                fullWidth
                onPress={() => {
                  carts?.length > 0
                    ? navigate("/checkout")
                    : ftToast(
                        "error",
                        "Error",
                        "Your cart is currently empty."
                      );
                }}
                color="primary"
                size="lg"
                className="!mt-5"
              >
                Proceed to Checkout
              </FTButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
