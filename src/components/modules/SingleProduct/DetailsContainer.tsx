import { Divider, Image, Tab, Tabs } from "@nextui-org/react";
import FTStar from "../../../assets/icons/FTStar";
import { TProduct } from "../../../redux/features/Product";
import FTStock from "../../../assets/icons/FTStock";
import FTCheckRound from "../../../assets/icons/FTCheckRound";
import FTCar from "../../../assets/icons/FTCar";
import FTStepper from "../../ui/FTStepper";
import FTButton from "../../ui/FTButton";
import FTCart from "../../../assets/icons/FTCart";
import { useState } from "react";
import { addProductToCart, TCart } from "../../../redux/features/Cart";
import useCartAction from "../../../hooks/useCartAction";
import useHotToast from "../../../hooks/useHotToast";
import { motion } from "framer-motion";

const DetailsContainer = ({
  product,
  actionButtons = true,
}: {
  product: TProduct;
  actionButtons?: boolean;
}) => {
  const { ftToast } = useHotToast();
  const { dispatch, availableQuantity, isExists, cartQuantity } = useCartAction(product);
  const [quantity, setQuantity] = useState<number>(1);
  
  // Create function for handle cart action, create | increase
  const handleCartAction = () => {
    // If current product quantity less then quantity show error message and return;
    if (availableQuantity < quantity) {
      ftToast(
        "error",
        "Error",
        "Sorry, this product is currently out of stock."
      );
      return;
    }
    if(cartQuantity >= 10){
      ftToast(
        "error",
        "Error",
        "You have reached the maximum quantity limit for this item."
      );
      return;
    }
    const cartData: TCart = {
      product: product._id as string,
      price: Number(product.price),
      quantity: quantity,
      // userId: "user_one",
    };

    dispatch(
      addProductToCart({
        cartData,
        actionType: isExists ? "increase" : "create",
      })
    );
    ftToast("success", "Success", "Product successfully added to your cart!");
  };
  return (
    <div
      className={`grid grid-cols-1 ${
        actionButtons ? "md:grid-cols-2" : ""
      } gap-5`}
    >
      <div className="w-full h-full">
        <div className="border border-slate-200 p-5 md:p-10 rounded-lg flex items-center justify-center">
          <Image className="max-h-[350px]" src={product?.images} />
        </div>
      </div>
      <div className="space-y-7">
        <h2 className="text-4xl font-semibold">{product?.name}</h2>
        <h4 className="text-xl text-slate-500 font-medium">
          {product?.price}$
        </h4>
        <div className="flex text-center gap-3 h-6">
          <div className="flex items-center gap-1 bg-yellow-500 p-1 rounded-md text-white">
            <FTStar classNames={{ path: "stroke-white", svg: "w-5 h-5" }} />
            <span>{product?.rating}</span>
          </div>{" "}
          <Divider orientation="vertical" />{" "}
          <span className="text-slate-500">5 Customer Review</span>
        </div>
        <div className="flex items-center gap-x-8 gap-y-2 flex-wrap">
          <div className="flex items-center gap-1">
            <FTStock
              classNames={{
                path: `${
                  availableQuantity > 0 ? "fill-indigo-600" : "fill-red-500"
                }`,
              }}
            />
            <span className="text-slate-500 font-medium">
              {availableQuantity > 0 ? "In Stock" : "Out of stock"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FTCheckRound classNames={{ path: "fill-indigo-600" }} />
            <span className="text-slate-500 font-medium">Guaranteed</span>
          </div>
          <div className="flex items-center gap-1">
            <FTCar classNames={{ path: "fill-indigo-600" }} />
            <span className="text-slate-500 font-medium">
              Standard Delivery
            </span>
          </div>
        </div>
        <p className="text-slate-800">{product?.description}</p>
        <div className="inline-grid grid-cols-2 gap-x-5 gap-y-2">
          <span className="text-slate-500">Warranty</span>
          <span className="text-slate-800">{product?.warranty} Years</span>

          <span className="text-slate-500">Return Policy</span>
          <span className="text-slate-800">
            {product?.returnPolicy} Days Return Policy.
          </span>

          <span className="text-slate-500">Available Product</span>
          <span className="text-slate-800">{availableQuantity} Pics</span>
        </div>

        {actionButtons ? (
          <div className="flex gap-4 items-center">
            <FTStepper
              name="price"
              placeholder="1"
              key="price"
              value={quantity}
              setValue={setQuantity}
              maxValue={availableQuantity < 10 ? availableQuantity : 10}
            />

            <div>
              <FTButton
                isDisabled={availableQuantity < 1}
                onPress={handleCartAction}
                size="lg"
                color="primary"
                startContent={<FTCart classNames={{ path: "stroke-white" }} />}
              >
                Add to Cart
              </FTButton>
            </div>
          </div>
        ) : null}

        <div>
          <Tabs
            variant="underlined"
            classNames={{
              base: "",
              tab: "data-[focus-visible=true]:!outline-none data-[hover-unselected=true]:!opacity-100 group relative before:content-none after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:w-full after:bg-slate-200 after:z-0",
              tabContent:
                "group-hover:!text-indigo-600 text-slate-500 group-data-[selected=true]:!text-indigo-600",
              cursor: "bg-indigo-600 !w-full  !z-10",
              tabList: "!gap-0",
            }}
            fullWidth
            aria-label="Product Description"
            size="lg"
          >
            <Tab
              key="Manufacturer"
              title="Manufacturer"
              className="data-[focus-visible=true]:!outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-grid grid-cols-6 gap-2"
              >
                <span className="text-slate-500 font-medium col-span-2">
                  Name
                </span>
                <span className="text-slate-800 col-span-4">
                  {product?.manufacturerDetails?.name}
                </span>
                <span className="col-span-2 text-slate-500 font-medium">
                  Address
                </span>
                <span className="col-span-4 text-slate-800">
                  {product?.manufacturerDetails?.contactInfo?.address}
                </span>
                <span className="col-span-2 text-slate-500 font-medium">
                  Email
                </span>
                <span className="col-span-4 text-slate-800">
                  {product?.manufacturerDetails?.contactInfo?.email}
                </span>
                <span className="col-span-2 text-slate-500 font-medium">
                  Phone
                </span>
                <span className="col-span-4 text-slate-800">
                  {product?.manufacturerDetails?.contactInfo?.phone}
                </span>
              </motion.div>
            </Tab>
            <Tab
              key="Specification"
              title="Specification"
              className="data-[focus-visible=true]:!outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-2"
              >
                {Object.keys(product?.specifications)?.map((item: string) => (
                  <span
                    key={item}
                    className="text-slate-800 flex items-start gap-2"
                  >
                    <FTCheckRound />{" "}
                    {(product?.specifications as Record<string, string>)[item]}
                  </span>
                ))}
              </motion.div>
            </Tab>
            <Tab
              key="Features"
              title="Features"
              className="data-[focus-visible=true]:!outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-2"
              >
                {product?.features?.map((feature) => (
                  <span
                    key={feature}
                    className="text-slate-800 flex items-start gap-2"
                  >
                    <FTCheckRound /> {feature}
                  </span>
                ))}
              </motion.div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DetailsContainer;
