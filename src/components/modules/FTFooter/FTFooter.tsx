import { Image } from "@nextui-org/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/FitMart.svg";
import { navLinks } from "../../../routes/routes";
import FTFacebook from "../../../assets/icons/FTFacebook";
import FTInstagram from "../../../assets/icons/FTInstagram";
import FTTwitter from "../../../assets/icons/FTTwitter";
import FTButton from "../../ui/FTButton";
import FTMail from "../../../assets/icons/FTMail";

const FTFooter = () => {
  return (
    <div className="bg-slate-50">
      <div className="container flex flex-col gap-8 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="basis-12 w-12">
            <Image src={logo} className="!w-12" />
          </div>
          <h4 className="hidden sm:inline-block text-3xl text-indigo-600 font-bold uppercase">
            FitMart
          </h4>
        </NavLink>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {navLinks?.map((navLink) => (
            <NavLink
              key={navLink.label}
              className="text-black transition-all hover:text-indigo-600 whitespace-nowrap"
              to={navLink.path}
            >
              {navLink?.label}
            </NavLink>
          ))}
        </div>
        <div>
          <h5 className="text-xl text-black text-center font-semibold">
            Stay in touch
          </h5>
          <div className="flex items-center justify-center gap-2 mt-5">
            <FTButton isIconOnly color="secondary" className="group">
              <FTFacebook
                classNames={{
                  path: "stroke-slate-500 group-hover:stroke-indigo-600",
                }}
              />
            </FTButton>
            <FTButton isIconOnly color="secondary" className="group">
              <FTInstagram
                classNames={{
                  path: "stroke-slate-500 group-hover:stroke-indigo-600",
                }}
              />
            </FTButton>
            <FTButton isIconOnly color="secondary" className="group">
              <FTTwitter
                classNames={{
                  path: "stroke-slate-500 group-hover:stroke-indigo-600",
                }}
              />
            </FTButton>
            <FTButton isIconOnly color="secondary" className="group">
              <FTMail
                classNames={{
                  path: "stroke-slate-500 group-hover:stroke-indigo-600",
                }}
              />
            </FTButton>
          </div>
        </div>
      </div>
      <div className="border-t border-t-slate-200">
        <div className="container !py-5">
          <p className="text-slate-500 text-center">
            &copy; 2024{" "}
            <Link to="/" className="text-indigo-600">
              Fit Mart
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FTFooter;
