import { useNavigate } from 'react-router-dom';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const NavigationBar = ({ logo, companyName = 'Company Name' }) => {
	const navigate = useNavigate();

	const onFrameLink2Click = () => {
		navigate('/');
	};

	const onFrameLink3Click = () => {
		navigate('/TeamMembers');
	};

	const onFrameLink4Click = () => {
		navigate('/AssessmentsDone');
	};

	return (
		<div className="relative bg-indigo-100 w-screen h-[130px] shrink-0 overflow-hidden text-center text-lg text-white font-roboto">
			<div className="absolute top-[45px] left-1/3 w-1/2 flex flex-row items-center justify-between">
				<button
					className="[text-decoration:none] relative w-1/4 h-[41px] top-[calc(50%_-_20.5px)] flex flex-row p-[11px_25px] box-border items-center cursor-pointer justify-center text-[inherit]"
					onClick={onFrameLink2Click}>
					<div className="relative inline-block">Dashboard</div>
				</button>
				<button
					className="[text-decoration:none] relative w-1/4 h-[41px] top-[calc(50%_-_20.5px)] flex flex-row p-[1px_2px] box-border items-center cursor-pointer justify-center text-[inherit]"
					onClick={onFrameLink3Click}>
					<div className="relative inline-block">Team Members</div>
				</button>

				<button
					className="[text-decoration:none] top-[calc(50%_-_20.5px)] box-border items-center justify-center flex flex-row p-[11px_25px] relative w-1/4 h-[41px] shrink-0 cursor-pointer text-[inherit]"
					onClick={onFrameLink4Click}>
					<div className="relative inline-block">Assessments</div>
				</button>
			</div>
			<div className="absolute top-[47px] right-[2%] w-[160px] flex flex-row items-center justify-between">
				<div className="relative w-[125px] h-[44px] shrink-0">
					<div className="absolute h-[81.82%] w-[62.4%] top-[20.09%] ml-1 left-[24%] font-semibold flex items-center justify-center">
						SE Factory
					</div>
					{/* <img
						className="absolute h-[70.55%] w-[30.2%] top-[22.73%] right-[76%] bottom-[22.73%] max-w-full overflow-hidden max-h-full"
						alt=""
						src="default-profile.png"
					/> */}
				</div>
				<NotificationsActiveOutlinedIcon fontSize='large' />
				
			</div>
			<div className="absolute top-[15px] left-[35px] w-[292px] flex flex-row items-center justify-start text-3xl">
				<img
					className="relative rounded-[600px] w-[102px] h-[100px] shrink-0 object-cover"
					alt=""
					src="../techitlogos-white@2x.png"
				/>
				<div className="relative font-extrabold flex items-center justify-center w-[171px] h-[34px] shrink-0 ml-[-2px]">
					Tech-It
				</div>
			</div>
		</div>
	);
};

export default NavigationBar;
