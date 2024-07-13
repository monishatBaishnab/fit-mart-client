import { Button, ButtonProps, extendVariants } from "@nextui-org/react";

const FTButton: React.ComponentType<ButtonProps> = extendVariants(Button, {
  variants: {
    color: {
      primary:
        "text-base font-medium !transition-all text-white bg-indigo-600 data-[focus-visible=true]:!outline-none data-[hover=true]:opacity-100 data-[hover=true]:!ring data-[hover=true]:ring-1 data-[hover=true]:!ring-indigo-600 data-[hover=true]:!ring-offset-2 data-[hover=true]:bg-indigo-700 data-[pressed=true]:!bg-indigo-600",
      secondary:
        "text-base font-medium !transition-all text-white bg-white border border-slate-200 data-[hover=true]:opacity-100 data-[hover=true]:!ring data-[hover=true]:ring-1 data-[hover=true]:!ring-indigo-600 data-[hover=true]:!ring-offset-2 data-[hover=true]:!bg-slate-100 data-[pressed=true]:!bg-slate-50 data-[focus-visible=true]:!outline-none",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "lg",
    radius: "sm",
  },
});

export default FTButton;
