import { DropdownItem } from "@nextui-org/react";
import FTCart from "../../../../assets/icons/FTCart";
import FTGrid from "../../../../assets/icons/FTGrid";
import FTUser from "../../../../assets/icons/FTUser";
import FTButton from "../../../ui/FTButton";
import FTDropdown from "../../../ui/FTDropdown";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../../../../routes/routes";
import FTHome from "../../../../assets/icons/FTHome";
import FTUsers from "../../../../assets/icons/FTUsers";
import FTList from "../../../../assets/icons/FTList";
import FTSettings from "../../../../assets/icons/FTSettings";
import SearchBox from "./SearchBox";

const NavActions = () => {
  const navigate = useNavigate();

  const renderStartIcon = (key: string) => {
    if (key === "home") {
      return FTHome;
    } else if (key === "about") {
      return FTUsers;
    } else if (key === "products") {
      return FTList;
    } else {
      return FTSettings;
    }
  };

  return (
    <div className="flex items-center justify-end gap-3">
      <SearchBox />

      <div>
        <FTDropdown
          trigger={
            <FTButton
              size="lg"
              color="secondary"
              isIconOnly
              className="group"
              disableRipple
            >
              <FTCart
                classNames={{
                  path: "stroke-slate-800 transition-all group-hover:stroke-indigo-600",
                }}
              />
            </FTButton>
          }
        >
          {navLinks?.map((navLink) => {
            const StartIcon = renderStartIcon(navLink?.key);
            return (
              <DropdownItem
                key={navLink?.label}
                onPress={() => navigate(navLink?.path)}
                className="group"
                startContent={
                  <StartIcon
                    classNames={{
                      path: "stroke-slate-500 transition-all group-hover:stroke-slate-800",
                      svg: "w-5 h-5",
                    }}
                  />
                }
              >
                {navLink?.label}
              </DropdownItem>
            );
          })}
        </FTDropdown>
      </div>
      <div>
        <FTButton
          size="lg"
          color="secondary"
          isIconOnly
          className="group"
          disableRipple
        >
          <FTUser
            classNames={{
              path: "stroke-slate-800 transition-all group-hover:stroke-indigo-600",
            }}
          />
        </FTButton>
      </div>

      <div className="lg:hidden">
        <FTDropdown
          trigger={
            <FTButton
              isIconOnly
              color="secondary"
              className="group"
              disableRipple
            >
              <FTGrid
                classNames={{
                  path: "stroke-slate-800 transition-all group-hover:stroke-indigo-600",
                }}
              />
            </FTButton>
          }
        >
          {navLinks?.map((navLink) => {
            const StartIcon = renderStartIcon(navLink?.key);
            return (
              <DropdownItem
                key={navLink?.label}
                onPress={() => navigate(navLink?.path)}
                className="group"
                startContent={
                  <StartIcon
                    classNames={{
                      path: "stroke-slate-500 transition-all group-hover:stroke-slate-800",
                      svg: "w-5 h-5",
                    }}
                  />
                }
              >
                {navLink?.label}
              </DropdownItem>
            );
          })}
        </FTDropdown>
      </div>
    </div>
  );
};

export default NavActions;
