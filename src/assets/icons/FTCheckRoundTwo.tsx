const FTCheckRoundTwo = ({
  classNames,
}: {
  classNames?: { svg?: string; path?: string; clipPath?: string };
}) => {
  return (
    <svg
    className={classNames?.svg}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
      className={classNames?.path}
        d="M21 10.0799V10.9999C20.9988 13.1563 20.3005 15.2545 19.0093 16.9817C17.7182 18.7088 15.9033 19.9723 13.8354 20.5838C11.7674 21.1952 9.55726 21.1218 7.53447 20.3744C5.51168 19.6271 3.78465 18.246 2.61096 16.4369C1.43727 14.6279 0.879791 12.4879 1.02168 10.3362C1.16356 8.18443 1.99721 6.13619 3.39828 4.49694C4.79935 2.85768 6.69279 1.71525 8.79619 1.24001C10.8996 0.764774 13.1003 0.982201 15.07 1.85986M21 2.99986L11 13.0099L8.00001 10.0099"
        stroke="#030515"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FTCheckRoundTwo;
