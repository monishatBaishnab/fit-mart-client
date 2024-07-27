import { ChangeEvent, useState } from "react";
import { useCreatePurchaseMutation } from "../redux/api";
import useHotToast from "../hooks/useHotToast";
import useCartAction from "../hooks/useCartAction";
import { deleteAllProductFromCart } from "../redux/features/Cart";
import FTButton from "../components/ui/FTButton";
import FTSelect from "../components/ui/FTSelect";
import FTSelectItem from "../components/ui/FTSelectItem";
import { Divider } from "@nextui-org/react";
import FTBreadcrumbs from "../components/ui/FTBreadcrumbs";
import FTInput from "../components/ui/FTInput";

const initialUserInfo = {
  first_name: "",
  last_name: "",
  email: "",
  mobile: "",
  address: "",
};

const Checkout = () => {
  const { ftToast } = useHotToast();
  const { carts, dispatch, totalPrice } = useCartAction();
  const [paymentMethod, setPaymentMethod] = useState("cash_on_delivery");
  const [createPurchase] = useCreatePurchaseMutation();

  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => ({
      ...prev,
      [e?.target?.name]: e?.target?.value,
    }));
  };

  const handleConfirmOrder = async () => {
    if (
      !userInfo.address ||
      !userInfo.first_name ||
      !userInfo.email ||
      !userInfo.last_name ||
      !userInfo.mobile ||
      !paymentMethod
    ) {
      ftToast(
        "error",
        "Error",
        "All fields are required. Please fill in all the details."
      );
      return;
    }
    console.log(userInfo);
    if (carts?.length < 1) {
      ftToast(
        "error",
        "Error",
        "Cannot place an order. Your cart is currently empty."
      );
      return;
    }

    const cartsData = {
      userInfo,
      paymentMethod,
      totalPrice: totalPrice + 15,
      products: carts,
    };
    console.log(cartsData);
    const res = await createPurchase(cartsData);
    console.log(res);
    if (res?.data?.success) {
      dispatch(deleteAllProductFromCart());
      setUserInfo(initialUserInfo);
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
            <div className="grid grid-cols-2 gap-5">
              <FTInput
                onChange={(e) => handleChange(e)}
                name="first_name"
                label="First Name"
                placeholder="Jhon"
              />
              <FTInput
                onChange={(e) => handleChange(e)}
                name="last_name"
                label="Last Name"
                placeholder="Deo"
              />
              <FTInput
                onChange={(e) => handleChange(e)}
                name="email"
                type="email"
                label="Email"
                placeholder="user@gmail.com"
              />
              <FTInput
                onChange={(e) => handleChange(e)}
                name="mobile"
                label="Mobile"
                placeholder="+8801****"
              />
              <div className="col-span-2">
                <FTInput
                  onChange={(e) => handleChange(e)}
                  name="address"
                  label="Address"
                  placeholder="Write your current address."
                />
              </div>
              <div className="col-span-2">
                <FTSelect
                  label="Payment Method"
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
            </div>
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

export default Checkout;
