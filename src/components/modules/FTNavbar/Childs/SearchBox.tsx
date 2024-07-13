import { useEffect, useRef, useState } from "react";
import FTFrown from "../../../../assets/icons/FTFrown";
import FTSearch from "../../../../assets/icons/FTSearch";
import FTButton from "../../../ui/FTButton";
import FTInput from "../../../ui/FTInput";

const SearchBox = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowSearchBox(false);
    }
  };

  useEffect(() => {
    if (showSearchBox) {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [showSearchBox]);

  return (
    <div className="w-full md:relative" ref={ref}>
      <FTInput
        fullWidth
        aria-labelledby="nav-search"
        placeholder="Search products"
        className="hidden md:inline-block"
        startContent={<FTSearch classNames={{ path: "stroke-slate-500" }} />}
        onFocus={() => setShowSearchBox(true)}
        // onBlur={() => setShowSearchBox(false)}
      />
      <FTButton
        color="secondary"
        isIconOnly
        className="group md:hidden"
        disableRipple
        onClick={() => setShowSearchBox(true)}
      >
        <FTSearch
          classNames={{
            path: "stroke-slate-800 transition-all group-hover:stroke-indigo-600",
          }}
        />
      </FTButton>
      <div
        className={`absolute left-0 right-0 top-20  min-h-32 w-full mx-auto bg-white border border-slate-200 rounded-lg transition-all ${
          showSearchBox
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-95 origin-top-right"
        }`}
      >
        <div className="flex flex-col items-center justify-center p-5">
          <FTFrown
            classNames={{ path: "stroke-slate-300", svg: "h-20 w-20" }}
          />
          <h4 className="text-lg text-black font-semibold mt-4">
            No product found!
          </h4>
          <p className="text-sm text-slate-500 text-center">
            We couldn't find any products matching your search criteria. Try
            different keywords.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
