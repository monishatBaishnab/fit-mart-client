import { ReactNode } from "react";

const FTInputFile = ({
  name,
  label,
  src,
  fileIcon,
  description,
}: {
  name: string;
  label: string;
  fileIcon: ReactNode;
  description: string;
  value?: string;
  src?: string;
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="relative bg-[rgb(79,_70,_229,_0.03)] transition-all hover:bg-[rgb(79,_70,_229,_0.05)] flex items-center justify-center flex-col w-full h-full border p-5 min-h-60 border-slate-300 border-dashed rounded-lg cursor-pointer"
      >
        <div className="p-4 bg-slate-100 rounded-full">{fileIcon}</div>
        <h5 className="text-lg text-slate-700 font-semibold mt-2">{label}</h5>
        <p className="text-slate-500">{description}</p>
        {src ? (
          <div className="absolute left-0 right-0 bottom-0 top-0 bg-[rgb(79,_70,_229,_0.03)] rounded-lg w-full h-full overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src={src}
              alt={name}
            />
          </div>
        ) : null}
      </label>
      <input type="file" className="hidden" id={name} name={name} />
    </div>
  );
};

export default FTInputFile;
