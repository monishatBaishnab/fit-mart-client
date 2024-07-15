import { extendVariants, SelectItem, SelectItemProps } from "@nextui-org/react";

const FTSelectItem: React.ComponentType<SelectItemProps> = extendVariants(
  SelectItem,
  {
    variants: {
      color: {
        primary: {
          base: "!text-slate-600 data-[hover=true]:!text-slate-600 data-[selectable=true]:!text-slate-600 py-2.5 px-3 !rounded-md data-[hover=true]:bg-[#F4F4F4] data-[focus-visible=true]:bg-[#F4F4F4] data-[selected=true]:bg-[#F4F4F4] data-[selectable=true]:focus:bg-[#F4F4F4] data-[focus-visible=true]:!outline-0",
        },
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

export default FTSelectItem;
