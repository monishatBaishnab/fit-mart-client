import { useState } from "react";
import FTSearch from "../../../../assets/icons/FTSearch";
import FTButton from "../../../ui/FTButton";
const SearchBox = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  console.log(showSearchBox);
  return (
    <div className="">
      <FTButton
        color="secondary"
        isIconOnly
        className="group"
        disableRipple
        onClick={() => setShowSearchBox(true)}
      >
        <FTSearch
          classNames={{
            path: "stroke-slate-800 transition-all group-hover:stroke-indigo-600",
          }}
        />
      </FTButton>
     
    </div>
  );
};

export default SearchBox;
