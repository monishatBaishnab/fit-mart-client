import FTEmpty from "../../assets/icons/FTEmpty";

const FTEmptyCard = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col p-5 min-h-80">
        <FTEmpty />
        <h4 className="text-2xl text-slate-700 font-semibold mt-5">
          {title}
        </h4>
        <p className="text-slate-500">{description}</p>
      </div>
    </div>
  );
};

export default FTEmptyCard;
