import {
  DropdownMenu,
  DropdownMenuProps,
  extendVariants,
} from "@nextui-org/react";

const FTDropdownMenu: React.ComponentType<DropdownMenuProps> = extendVariants(
  DropdownMenu,
  {
    variants: {
      color: {
        primary: {
          list: {
            base: [
              "text-slate-800 font-medium",
              "data-[hover=true]:text-slate-800 data-[hover=true]:bg-[#F4F4F4]",
              "px-4 py-2.5 rounded-2",
            ],
          },
        },
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

export default FTDropdownMenu;
