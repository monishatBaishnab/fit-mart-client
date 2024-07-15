import { ReactNode } from "react";
import FTFooter from "../modules/FTFooter/FTFooter";
import FTNavbar from "../modules/FTNavbar/FTNavbar";

const FTMainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <FTNavbar />

      {children}

      <FTFooter />
    </div>
  );
};

export default FTMainLayout;
