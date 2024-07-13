const FTList = ({
  classNames,
}: {
  classNames?: { svg?: string; path?: string };
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
        d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01"
        stroke="#030515"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FTList;
