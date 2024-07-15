import FTSearch from "../../../../assets/icons/FTSearch";
import FTButton from "../../../ui/FTButton";
const SearchBox = () => {

  return (
    <div className="">
      <FTButton
        size="lg"
        color="secondary"
        isIconOnly
        className="group"
        disableRipple
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
