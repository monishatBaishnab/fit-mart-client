import { Tooltip } from "@nextui-org/react";
import FTStar from "../../assets/icons/FTStar";
import FTButton from "./FTButton";
import FTCart from "../../assets/icons/FTCart";
import { TProduct } from "../../redux/features/Product";
import { useNavigate } from "react-router-dom";
import FTExternalLink from "../../assets/icons/FTExternalLink";
import useCartAction from "../../hooks/useCartAction";

const FTGridProductCard = ({ product }: { product: TProduct }) => {
  const navigate = useNavigate();
  const { handleCartAction } = useCartAction(product);
  
  return (
    <div className="rounded-lg overflow-hidden h-full">
      <div className="bg-slate-100 p-5">
        <div className="w-full h-[240px] overflow-hidden rounded-lg bg-white flex items-center justify-center">
          <img
            className="w-full h-full !object-contain"
            src={product?.images}
          />
        </div>
      </div>
      <div className="space-y-2 p-5 border border-slate-200  border-t-0 rounded-b-lg">
        <h4 className="text-2xl text-slate-800 font-semibold h-16">
          {product?.name}
        </h4>
        <div className="flex items-center justify-between">
          {Number(product?.stockQuantity) > 0 ? (
            <h6 className="text-indigo-600">Available</h6>
          ) : (
            <h6 className="text-red-600">Out of Stock</h6>
          )}
          <div className="flex items-center gap-1">
            <FTStar
              classNames={{ svg: "h-4 w-4", path: "stroke-yellow-500" }}
            />
            <span className="text-slate-800">{product?.rating ?? 0}/5</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <h5 className="text-2xl text-slate-800 font-medium">
            {product?.price} <sup className="text-sm">USD</sup>
          </h5>
          <div className="flex items-center gap-1.5">
            <Tooltip
              content="Add to Cart"
              placement="top-end"
              radius="sm"
              classNames={{
                content: "!bg-slate-50 !text-indigo-600 !text-xs",
              }}
            >
              <FTButton onPress={handleCartAction} isIconOnly size="md" color="secondary">
                <FTCart
                  classNames={{
                    svg: "w-5 h-5",
                    path: "stroke-indigo-600",
                  }}
                />
              </FTButton>
            </Tooltip>
            <Tooltip
              content="View Details"
              placement="top-end"
              radius="sm"
              classNames={{
                content: "!bg-indigo-600 !text-white !text-xs",
              }}
            >
              <FTButton
                onPress={() => navigate(`/products/${product?._id as string}`)}
                isIconOnly
                size="md"
                color="primary"
              >
                <FTExternalLink
                  classNames={{ svg: "w-5 h-5", path: "stroke-white" }}
                />
              </FTButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FTGridProductCard;
