import { Divider } from "@nextui-org/react";
import FTCar from "../../assets/icons/FTCar";
import FTCheckRound from "../../assets/icons/FTCheckRound";
import FTStar from "../../assets/icons/FTStar";
import FTStock from "../../assets/icons/FTStock";
import FTButton from "./FTButton";
import FTExternalLink from "../../assets/icons/FTExternalLink";
import { TProduct } from "../../redux/features/Product";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

type TState = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>
};

type FTSearchProductCard = {
  product: TProduct;
  onClose: () => void;
  states: TState;
};

const FTSearchProductCard = ({
  product,
  onClose,
  states,
}: FTSearchProductCard) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${product?._id}`);
    onClose();
    states?.setSearch("");
  };
  return (
    <div className="flex flex-col sm:flex-row items-center gap-5 border border-slate-200 p-5 rounded-lg pt-4 transition-all hover:ring hover:ring-indigo-600 hover:ring-offset-2">
      <div className="sm:w-20 sm:basis-20 h-full overflow-auto">
        <img
          className="w-full h-full object-contain"
          src={product?.images}
          alt={product?.name}
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="space-y-1">
          <h4 className="text-lg font-semibold text-slate-700">
            {product?.name}
          </h4>
          <div className="flex items-center gap-4">
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
            <div className="hidden md:flex items-center gap-1">
              <FTCheckRound
                classNames={{ path: "fill-indigo-600", svg: "w-4 h-w" }}
              />
              <span className="text-slate-500 font-medium text-sm">
                Guaranteed
              </span>
            </div>
            <div className="hidden md:flex items-center gap-1">
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
            <span className="text-slate-500 text-sm">5 Customer Review</span>
          </div>
        </div>
        <div className="flex items-end justify-end  flex-col gap-2">
          <h4 className="text-xl text-slate-500 font-medium">
            {product?.price}$
          </h4>
          <FTButton
            onPress={handleClick}
            color="secondary"
            isIconOnly
            size="sm"
          >
            <FTExternalLink
              classNames={{ path: "stroke-slate-700", svg: "w-4 h-4" }}
            />
          </FTButton>
        </div>
      </div>
    </div>
  );
};

export default FTSearchProductCard;
