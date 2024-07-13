import { ReactNode } from "react";
import FTFooter from "../modules/FTFooter/FTFooter";
import FTNavbar from "../modules/FTNavbar/FTNavbar";

const FTMainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <div>
        <FTNavbar />
      </div>
      <div className="container mx-auto max-w-screen-xl">{children}</div>
      <div>
        <FTFooter />
      </div>
    </div>
  );
};

export default FTMainLayout;
