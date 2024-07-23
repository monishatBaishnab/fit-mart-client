import React from "react";
import FTButton from "./FTButton";
import FTInput from "./FTInput";
import FTPlus from "../../assets/icons/FTPlus";
import FTMinus from "../../assets/icons/FTMinus";

type TFTStepper = {
  name: string;
  placeholder: string;
  maxValue?: number;
  value: number;
  setValue?: React.Dispatch<React.SetStateAction<number>>;

  size?: "sm" | "md" | "lg";
  onChangeAction?: (action: string, isDispatch:boolean) => void;
};

const FTStepper = ({
  name,
  value,
  placeholder,
  setValue,
  maxValue = 10,
  size = "lg",
  onChangeAction,
}: TFTStepper) => {
  const handleChange = (action: string) => {
    if (onChangeAction) {
      onChangeAction(action, false);
      return;
    }

    if (action === "inc" && value < maxValue) {
      setValue!(value + 1);
    } else if (action === "dec" && value > 1) {
      setValue!(value - 1);
    }
  };

  return (
    <div>
      <FTInput
        size={size}
        name={name}
        aria-labelledby={name}
        placeholder={placeholder}
        value={`${value}`}
        classNames={{
          base: "w-32",
          input: "text-center placeholder:text-center",
        }}
        readOnly
        startContent={
          <FTButton
            onPress={() => handleChange("dec")}
            className="bg-transparent transition-all data-[focus-visible=true]:outline-0 data-[hover=true]:bg-indigo-600/5 data-[hover=true]:!opacity-100"
            isIconOnly
            size="sm"
          >
            <FTMinus
              classNames={{ path: "stroke-slate-700", svg: "w-5 h-5" }}
            />
          </FTButton>
        }
        endContent={
          <FTButton
            onPress={() => handleChange("inc")}
            className="bg-transparent transition-all data-[focus-visible=true]:outline-0 data-[hover=true]:bg-indigo-600/5 data-[hover=true]:!opacity-100"
            isIconOnly
            size="sm"
          >
            <FTPlus classNames={{ path: "stroke-slate-700", svg: "w-5 h-5" }} />
          </FTButton>
        }
      />
    </div>
  );
};

export default FTStepper;
