import { ReactNode } from "react";

type TIcon = {
  wrapper?: string;
  svg?: string;
  path?: string;
};

type TFTSectionTitle = {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  classNames?: { title?: string; subtitle?: string; icon?: TIcon };
};

const FTSectionTitle = ({
  title,
  subtitle,
  icon,
  classNames,
}: TFTSectionTitle) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div
          className={`bg-indigo-600/20 p-2 rounded-lg ${classNames?.icon?.wrapper}`}
        >
          {icon ? (
            icon
          ) : (
            <svg
              className={classNames?.icon?.svg}
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`stroke-indigo-600 ${classNames?.icon?.path}`}
                d="M19.95 13.55L13.56 19.94C12.16 21.34 9.86002 21.34 8.45002 19.94L2.06001 13.55C0.66001 12.15 0.66001 9.85001 2.06001 8.44001L8.45002 2.05C9.85002 0.65 12.15 0.65 13.56 2.05L19.95 8.44001C21.35 9.85001 21.35 12.15 19.95 13.55Z"
                stroke="#AA205E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <h5 className={`text-lg text-slate-700 font-medium ${classNames?.subtitle}`}>{subtitle}</h5>
      </div>
      <h2 className={`text-2xl md:text-4xl text-slate-900 font-semibold ${classNames?.title}`}>{title}</h2>
    </div>
  );
};

export default FTSectionTitle;
