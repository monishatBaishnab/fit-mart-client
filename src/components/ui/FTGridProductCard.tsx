import { Image, Tooltip } from "@nextui-org/react";
import FTStar from "../../assets/icons/FTStar";
import FTButton from "./FTButton";
import FTCart from "../../assets/icons/FTCart";
import FTEye from "../../assets/icons/FTEye";

const FTGridProductCard = () => {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="bg-slate-100 p-5">
        <Image src="https://i.ibb.co/MB3fjS9/Treadmill-Pro-X.jpg" />
      </div>
      <div className="space-y-2 p-5 border border-slate-200  border-t-0 rounded-b-lg">
        <h4 className="text-2xl text-slate-800 font-semibold">
          Treadmill Pro X
        </h4>
        <div className="flex items-center justify-between">
          {/* <h6 className="text-indigo-600">Available</h6> */}
          <h6 className="text-red-600">Out of Stock</h6>
          <div className="flex items-center gap-1">
            <FTStar
              classNames={{ svg: "h-4 w-4", path: "stroke-yellow-500" }}
            />
            <span className="text-slate-800">4.5/5</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <h5 className="text-2xl text-slate-800 font-medium">
            50.5 <sup className="text-sm">USD</sup>
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
              <FTButton isIconOnly size="md" color="secondary">
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
              <FTButton isIconOnly size="md" color="primary">
                <FTEye classNames={{ svg: "w-5 h-5", path: "stroke-white" }} />
              </FTButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FTGridProductCard;
