const FTGrid = ({
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
        d="M10 3H3V10H10V3Z"
        stroke="#030515"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className={classNames?.path}
        d="M21 3H14V10H21V3Z"
        stroke="#030515"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className={classNames?.path}
        d="M21 14H14V21H21V14Z"
        stroke="#030515"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className={classNames?.path}
        d="M10 14H3V21H10V14Z"
        stroke="#030515"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FTGrid;
