import { useCallback } from "react";

const NavigationBar = ({ logo, companyName = "Company Name" }) => {
  const onFrameLink3Click = useCallback(() => {
    // Please sync "Team Members" to the project
  }, []);

  const onFrameLink4Click = useCallback(() => {
    // Please sync "Assessments Done" to the project
  }, []);

  const onFrameLink5Click = useCallback(() => {
    // Please sync "Assessments Done" to the project
  }, []);

  const onFrameLink6Click = useCallback(() => {
    // Please sync "Assessments Done" to the project
  }, []);

  return (
    <div className="bg-indigo-100 w-screen flex flex-row p-[15px_35px] box-border items-center justify-between text-center text-lg text-white font-roboto">
      <div className="w-[292px] shrink-0 flex flex-row items-center justify-start text-3xl">
        <img
          className="relative rounded-[600px] w-[102px] h-[100px] shrink-0 object-cover"
          alt=""
          src="../techitlogos-white@2x.png"
        />
        <div className="relative font-extrabold flex items-center justify-center w-[171px] h-[34px] shrink-0 ml-[-2px]">
          Tech-It
        </div>
      </div>
        <a href="Dashboard" className="[text-decoration:none] relative h-[41px] shrink-0 w-[85.33%] top-[calc(50%_-_20.5px)] right-[7.33%] left-[7.33%] flex flex-row p-[11px_25px] box-border items-center justify-center text-[inherit]">
          <div className="relative font-black inline-block">Dashboard</div>
        </a>
        <a href="TeamMembers" className="[text-decoration:none] relative w-[150px] shrink-0 h-[41px] top-[calc(50%_-_20.5px)] right-[-4%] left-[-4%] flex flex-row p-[11px_25px] box-border items-center justify-center cursor-pointer text-[inherit]"
          onClick={onFrameLink3Click}
        >
          <div className="relative inline-block">Team Members</div>
        </a>
      <a href="AssessmentsDone" className="[text-decoration:none] relative w-[150px] h-[41px] shrink-0 cursor-pointer text-[inherit]"
        onClick={onFrameLink4Click}
      >
        <div className="absolute w-[98%] top-[calc(50%_-_20.5px)] right-[1%] left-[1%] flex flex-row p-[11px_25px] box-border items-center justify-center">
          <div className="relative inline-block">Assessments</div>
        </div>
      </a>
      <div className="w-[160px] shrink-0 flex flex-row items-center justify-between">
        <div className="relative w-[125px] h-[44px] shrink-0">
          <div className="absolute h-[81.82%] w-[62.4%] top-[9.09%] left-[24%] font-semibold flex items-center justify-center">
            {companyName}
          </div>
          <a href="Profile" onClick={onFrameLink5Click}>
            <img
              className="absolute h-[54.55%] w-[19.2%] top-[22.73%] right-[76%] bottom-[22.73%] left-[4.8%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={logo}
          />
          </a>
        </div>
        <a href="Notifications" onClick={onFrameLink6Click}>
          <img
            className="relative w-[36px] h-[36px] shrink-0 overflow-hidden md:w-[20px]_h-[20px]"
            alt=""
            src="../claritynotificationsolid.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;

