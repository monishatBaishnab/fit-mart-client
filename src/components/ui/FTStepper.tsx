import React from "react";
import FTButton from "./FTButton";
import FTInput from "./FTInput";
import FTPlus from "../../assets/icons/FTPlus";
import FTMinus from "../../assets/icons/FTMinus";

const FTStepper = ({
  name,
  value,
  placeholder,
  setValue,
  maxValue,
}: {
  name: string;
  placeholder: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  maxValue: number;
}) => {
  const handleChange = (action: string) => {
    if (action === "inc" && value < maxValue) {
      setValue(value + 1);
    } else if (action === "dec" && value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <FTInput
        name={name}
        aria-labelledby={name}
        placeholder={placeholder}
        value={`${value}`}
        classNames={{
          base: "w-40",
          input: "text-center placeholder:text-center",
        }}
        readOnly
        startContent={
          <FTButton
            onPress={() => handleChange("dec")}
            className="bg-transparent transition-all data-[focus-visible=true]:outline-0 data-[hover=true]:bg-indigo-50 data-[hover=true]:!opacity-100"
            isIconOnly
            size="md"
          >
            <FTMinus classNames={{path: 'stroke-indigo-600'}} />
          </FTButton>
        }
        endContent={
          <FTButton
            onPress={() => handleChange("inc")}
            className="bg-transparent transition-all data-[focus-visible=true]:outline-0 data-[hover=true]:bg-indigo-50 data-[hover=true]:!opacity-100"
            isIconOnly
            size="md"
          >
            <FTPlus classNames={{path: 'stroke-indigo-600'}} />
          </FTButton>
        }
      />
    </div>
  );
};

export default FTStepper;
