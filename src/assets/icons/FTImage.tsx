const FTImage = ({
  classNames,
}: {
  classNames?: { svg?: string; path?: string; clipPath?: string };
}) => {
  return (
    <svg
      className={classNames?.svg}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={classNames?.path}
        d="M5.65625 21H19.6562C20.7608 21 21.6562 20.1046 21.6562 19V5C21.6562 3.89543 20.7608 3 19.6562 3H5.65625C4.55168 3 3.65625 3.89543 3.65625 5V19C3.65625 20.1046 4.55168 21 5.65625 21ZM5.65625 21L16.6562 10L21.6562 15M10.6562 8.5C10.6562 9.32843 9.98468 10 9.15625 10C8.32782 10 7.65625 9.32843 7.65625 8.5C7.65625 7.67157 8.32782 7 9.15625 7C9.98468 7 10.6562 7.67157 10.6562 8.5Z"
        stroke="#030515"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FTImage;
