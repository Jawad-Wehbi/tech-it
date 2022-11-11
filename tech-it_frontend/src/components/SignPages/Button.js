import { useCallback } from "react";

const Button = ({ submit }) => {
  const onGroupButtonClick = useCallback(() => {
    // Please sync "Admin Dashboard" to the project
  }, []);

  return (
    <button
      className="cursor-pointer [border:none] p-[14px_82px] bg-violet-100 rounded-[5px] w-[380px] h-[50px] shrink-0 flex flex-row box-border items-center justify-center active:bg-white active:[border:1px_solid_#a25ef9] active:box-border [&_.submit-div1]:active:font-extrabold [&_.submit-div1]:active:font-roboto [&_.submit-div1]:active:text-sm [&_.submit-div1]:active:text-violet-200 [&_.submit-div1]:active:cursor-auto"
      onClick={onGroupButtonClick}
    >
      <div className="submit-div1 relative text-2xs font-semibold font-roboto text-white text-center inline-block">
        {submit}
      </div>
    </button>
  );
};

export default Button;
