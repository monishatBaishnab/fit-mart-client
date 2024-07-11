import { extendVariants, Select, SelectProps } from "@nextui-org/react";

const FTSelect : React.ComponentType<SelectProps> = extendVariants(Select, {
  variants: {
    color: {
      primary: {
        label: "!cursor-text !text-base font-medium !top-[20px]",
        base: "justify-start data-[has-label=true]:mt-6 mt-6",
        trigger: [
          "!transition !bg-white !border !border-solid_border hover:!border-indigo-600",
          "data-[open=true]:!ring data-[open=true]:!ring-2 data-[open=true]:!ring-indigo-600 data-[open=true]:!ring-offset-2 data-[open=true]:!border-solid_border",
        ],
        helperWrapper: "!mt-4",
        popoverContent: "!rounded-md p-0",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "lg",
    radius: "sm",
    labelPlacement: "outside",
  },
});

export default FTSelect;
