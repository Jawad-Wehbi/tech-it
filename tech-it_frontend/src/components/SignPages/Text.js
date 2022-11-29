import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Text = ({ haveAnAccount = "Question", link = "Log", nextPage }) => {
  const navigate = useNavigate();
  const onLogInTextClick = useCallback(() => {
    navigate(`/${nextPage}`);
  }, [navigate]);
  return (
    <div className="flex flex-row p-[13px_50px] box-border items-center justify-center gap-[5px] text-right text-sm text-gray-200 font-roboto">
      <p className="m-[0] relative inline-block cursor-default">
        <span>{haveAnAccount}</span>
        <span className="text-violet-100">{` `}</span>
      </p>
      <p
        className="m-[0] relative font-bold text-violet-100 text-center inline-block cursor-pointer"
        onClick={onLogInTextClick}
      >
        {link}
      </p>
    </div>
  );
};

export default Text;
