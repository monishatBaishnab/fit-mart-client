import NavActions from "./Childs/NavActions";
import logo from "../../../assets/images/FitMart.svg";
import { Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import Nav from "./Childs/NavLinks";
import Headroom from "react-headroom";

const FTNavbar = () => {
  return (
    <Headroom style={{
      zIndex: 30
    }}>
      <div className="border-b border-b-slate-200 bg-white relative">
        <div className="container !py-5 flex gap-8 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="basis-12 w-12">
              <Image src={logo} className="!w-12" />
            </div>
            <h4 className="hidden sm:inline-block text-3xl text-indigo-600 font-bold uppercase">
              FitMart
            </h4>
          </NavLink>
      
          <Nav />
      
          <NavActions />
        </div>
      </div>
    </Headroom>
  );
};

export default FTNavbar;
