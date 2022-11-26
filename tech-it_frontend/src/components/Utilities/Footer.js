import { Switch } from '@mui/material';

const Footer = (props) => {
	const { checked, onChange } = props;

	return (
		<nav className="bottom-[0px] left-[0px] bg-indigo-200 w-[100%] h-[100px] overflow-hidden flex flex-row p-[22px_50px] box-border items-center justify-between " >
			<div className="h-[55px] flex flex-row items-center justify-center">
				<div className="relative text-base font-extrabold font-roboto text-white text-left inline-block">
					Privacy Policy
				</div>
			</div>
			<div className="overflow-hidden flex flex-row p-[0px_15px] box-border items-center justify-center gap-[10px]">
				<img
					className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
					alt=""
					src="../ggcopyright.svg"
				/>
				<div className="relative text-base font-extrabold font-roboto text-white text-center flex items-center justify-center w-[263px] h-[55px] shrink-0">
					2022 Tech-It - All Rights are Reserved
				</div>
			</div>
			<div>
				<div className="flex flex-row items-center justify-center gap-[0px]">
				<Switch checked={checked} onChange={onChange} />
					<img
						className="relative w-[55px] h-[55px] shrink-0 object-cover"
						alt=""
						src="../techitlogos-white1@2x.png"
					/>
					<div className="relative text-xl font-extrabold font-roboto text-white text-center flex items-center justify-center w-[86px] h-[55px] shrink-0">
						Tech-It
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Footer;
