const FTEdit = ({
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
        d="M11 4.00023H4C3.46957 4.00023 2.96086 4.21094 2.58579 4.58601C2.21071 4.96109 2 5.46979 2 6.00023V20.0002C2 20.5307 2.21071 21.0394 2.58579 21.4144C2.96086 21.7895 3.46957 22.0002 4 22.0002H18C18.5304 22.0002 19.0391 21.7895 19.4142 21.4144C19.7893 21.0394 20 20.5307 20 20.0002V13.0002M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z"
        stroke="#030515"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FTEdit;
