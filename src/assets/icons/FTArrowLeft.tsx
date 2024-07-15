const FTArrowLeft = ({
  classNames,
}: {
  classNames?: { svg?: string; path?: string; clipPath?: string };
}) => {
  return (
    <svg
    className={classNames?.svg}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
      className={classNames?.path}
        d="M19 12H5M5 12L12 19M5 12L12 5"
        stroke="#030515"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FTArrowLeft;
