import { Divider } from "@nextui-org/react";
import FTCar from "../../assets/icons/FTCar";
import FTCheckRound from "../../assets/icons/FTCheckRound";
import FTStar from "../../assets/icons/FTStar";
import FTStock from "../../assets/icons/FTStock";
import FTButton from "./FTButton";
import FTExternalLink from "../../assets/icons/FTExternalLink";
import { TProduct } from "../../redux/features/Product";
import FTTrash from "../../assets/icons/FTTrash";
import FTStepper from "./FTStepper";
import { useState } from "react";
import { addProductToCart, TCart } from "../../redux/features/Cart";
import useCartAction from "../../hooks/useCartAction";

type FTListProductCard = {
  product: TProduct;
  classNames?: { base?: string; img?: string };
  disableRing?: boolean;
  disableStepper?: boolean;
  actionButton: {
    action: "delete" | "details";
    handleAction: (id: string) => void;
  };
};

const FTListProductCard = ({
  product,
  actionButton,
  classNames,
  disableRing,
  disableStepper = true,
}: FTListProductCard) => {
  const { action, handleAction } = actionButton ?? {};
  const { dispatch, cartQuantity, productQuantity } = useCartAction(product);
  const [quantity, setQuantity] = useState<number>(cartQuantity);

  const handleCartAction = (action: "increase" | "decrease") => {
    setQuantity((prev) => {
      let currentQuantity: number = prev;
      if (
        action === "increase" &&
        prev < (productQuantity < 10 ? productQuantity : 10)
      ) {
        currentQuantity = prev + 1;
      } else if (action === "decrease" && prev > 1) {
        currentQuantity = prev - 1;
      }

      const cartData: TCart = {
        productId: product._id as string,
        productPrice: Number(product.price),
        quantity: currentQuantity,
        userId: "user_one",
      };

      dispatch(
        addProductToCart({
          cartData,
          actionType: "modify",
        })
      );
      return currentQuantity;
    });
  };

  return (
    <div
      className={`flex flex-col sm:flex-row items-center gap-5 border border-slate-200 p-5 rounded-lg pt-4 transition-all ${
        !disableRing
          ? "hover:ring hover:ring-indigo-600 hover:ring-offset-2"
          : ""
      } ${classNames?.base}`}
    >
      <div
        className={`max-w-40 sm:w-20 sm:basis-20 h-full overflow-auto ${classNames?.img}`}
      >
        <img
          className="w-full h-full object-contain"
          src={product?.images}
          alt={product?.name}
        />
      </div>
      <div className="flex items-center justify-between w-full flex-col sm:flex-row">
        <div className="space-y-1 w-full sm:w-auto">
          <h4 className="text-lg font-semibold text-slate-700">
            {product?.name}
          </h4>
          <div className="flex items-center gap-x-4 gap-y-1 flex-wrap">
            <div className="flex items-center gap-1">
              <FTStock
                classNames={{
                  path: `${
                    Number(product?.stockQuantity) > 0
                      ? "fill-indigo-600"
                      : "fill-red-500"
                  }`,
                  svg: "w-4 h-4",
                }}
              />
              <span className="text-slate-500 font-medium text-sm">
                {Number(product?.stockQuantity) > 0
                  ? "In Stock"
                  : "Out of stock"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FTCheckRound
                classNames={{ path: "fill-indigo-600", svg: "w-4 h-w" }}
              />
              <span className="text-slate-500 font-medium text-sm">
                Guaranteed
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FTCar classNames={{ path: "fill-indigo-600", svg: "w-4 h-w" }} />
              <span className="text-slate-500 font-medium text-sm">
                Standard Delivery
              </span>
            </div>
          </div>
          <div className="flex items-center text-center gap-3 h-6">
            <div className="flex items-center gap-1 bg-yellow-500 p-1 rounded-md text-white">
              <FTStar
                classNames={{ path: "stroke-white", svg: "w-3.5 h-3.5" }}
              />
              <span className="text-xs">{product?.rating}</span>
            </div>{" "}
            <Divider orientation="vertical" />{" "}
            <span className="text-slate-500 text-sm">5 Review</span>
          </div>

          {!disableStepper ? (
            <div className="!mt-2">
              <FTStepper
                size="md"
                name="quantity-in-details"
                placeholder="1"
                key="quantity-in-details"
                value={quantity}
                onChangeAction={handleCartAction}
              />
            </div>
          ) : null}
        </div>
        <div className="flex items-end w-full sm:w-auto mt-5 sm:mt-0 justify-between sm:justify-end  sm:flex-col gap-2">
          <h4 className="text-xl text-slate-500 font-medium">
            {product?.price}$
          </h4>

          {action === "details" ? (
            <FTButton
              onPress={() => handleAction(product._id as string)}
              color="secondary"
              isIconOnly
              size="sm"
            >
              <FTExternalLink
                classNames={{ path: "stroke-slate-700", svg: "w-4 h-4" }}
              />
            </FTButton>
          ) : (
            <FTButton
              size="sm"
              isIconOnly
              color="primary"
              className="bg-red-200 data-[hover=true]:bg-red-200 data-[hover=true]:!ring-red-200 data-[pressed=true]:!bg-red-200"
              onClick={() => handleAction(product._id as string)}
            >
              <FTTrash
                classNames={{ path: "stroke-red-500", svg: "h-4 w-4" }}
              />
            </FTButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default FTListProductCard;
