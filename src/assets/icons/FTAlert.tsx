const FTAlert = ({
  classNames,
}: {
  classNames?: { svg?: string; path?: string; clipPath?: string };
}) => {
  return (
    <svg
      className={classNames?.svg}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4665_17352)">
        <path
          className={classNames?.path}
          d="M7.9987 5.33398V8.00065M7.9987 10.6673H8.00536M14.6654 8.00065C14.6654 11.6826 11.6806 14.6673 7.9987 14.6673C4.3168 14.6673 1.33203 11.6826 1.33203 8.00065C1.33203 4.31875 4.3168 1.33398 7.9987 1.33398C11.6806 1.33398 14.6654 4.31875 14.6654 8.00065Z"
          stroke="#8B8C93"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4665_17352">
          <rect
            className={classNames?.clipPath}
            width="16"
            height="16"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FTAlert;
