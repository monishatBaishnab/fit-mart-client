/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropdown, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { ReactNode } from "react";

type TFTDropdown = {
  trigger: ReactNode;
  children: any;
};

const FTDropdown = ({ trigger, children }: TFTDropdown) => {
  return (
    <Dropdown
      placement="bottom-end"
      classNames={{ content: "border-slate-200 p-0" }}
      radius="sm"
    >
      <DropdownTrigger>{trigger}</DropdownTrigger>

      <DropdownMenu
        aria-labelledby="lessonTypes"
        itemClasses={{
          base: [
            "text-slate-500 font-medium",
            "data-[hover=true]:text-black data-[hover=true]:bg-slate-50 data-[focus-visible=true]:!outline-none",
            "px-4 py-2.5 rounded-2",
          ],
        }}
      >
        {children}
      </DropdownMenu>
    </Dropdown>
  );
};

export default FTDropdown;
