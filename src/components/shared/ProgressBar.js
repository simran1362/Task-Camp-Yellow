export const ProgressBar = ({ value, name }) => {
  return (
    <div>
      <div className="h-[8px] w-full bg-[#1f2123] rounded-lg flex mt-5 ">
        <div
          style={{ width: `${value}%` }}
          className="h-full rounded-lg bg-white"
        ></div>
      </div>
      <div className="mt-2">{`${value}% ${name}`}</div>
    </div>
  );
};
