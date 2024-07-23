import FTBreadcrumbs from "../components/ui/FTBreadcrumbs";
import FTEmptyCard from "../components/ui/FTEmptyCard";
import FTListProductCard from "../components/ui/FTListProductCard";
import FTSelect from "../components/ui/FTSelect";
import FTSelectItem from "../components/ui/FTSelectItem";
import { useGetProductsQuery } from "../redux/api";
import { deleteProductFromCart, TCart } from "../redux/features/Cart";
import { TProduct } from "../redux/features/Product";
import { useFTDispatch, useFTSelector } from "../redux/hooks";

const Cart = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery(undefined);
  const dispatch = useFTDispatch();
  const carts = useFTSelector((state) => state.carts);
  let cartProducts: TProduct[] = [];
 
  if (!isLoading || !isError) {
    cartProducts = carts?.map((cart: TCart) => {
      for (const product of products?.data ?? []) {
        if (product?._id === cart?.productId) {
          return product;
        }
      }
    });
  }

  const handleAction = (id: string) => {
    dispatch(deleteProductFromCart(id));
  };

  return (
    <div>
      <FTBreadcrumbs />
      <div className="container">
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
                  key={product._id}
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
            <h3 className="text-3xl font-semibold text-slate-700">My Cart</h3>
            <div className="space-y-2 mt-5">
              {/* <h4>Total Price: {totalPrice.toFixed(2)}</h4> */}
              <div>
                <FTSelect
                  // onChange={(e) => handleChange(e)}
                  name="payment-type"
                  placeholder="Select a payment type."
                  label="Payment Type"
                  defaultSelectedKeys={["cash-on-delivery"]}
                >
                  <FTSelectItem key="cash-on-delivery">
                    Cash On Delivery
                  </FTSelectItem>
                </FTSelect>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
