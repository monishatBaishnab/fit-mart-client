import { extendVariants, Input, InputProps } from "@nextui-org/react";

// Extend the Input component with the defined variants
const FTInput : React.ComponentType<InputProps> = extendVariants(Input, {
  variants: {
    color: {
      primary: {
        label: "!cursor-text !text-base font-medium text-slate-700",
        innerWrapper: "bg-transparent",
        input: "!text-base !text-slate-800 placeholder:text-slate-500",
        base: "justify-start data-[has-label=true]:mt-6",
        inputWrapper: [
          "!bg-white !rounded-lg shadow-none !border !border-slate-200 !transition",
          "hover:bg-white hover:ring hover:ring-2 hover:ring-offset-2 hover:ring-indigo-600",
          "group-data-[focused=true]:!bg-white group-data-[focus=true]:ring group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-indigo-600 group-data-[focus=true]:ring-offset-2",
          "!cursor-text mt-0",
        ],
        helperWrapper: "!mt-4",
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

export default FTInput;
