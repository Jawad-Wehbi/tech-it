import Logo from '../components/SignPages/Logo.js';
import Text from '../components/SignPages/Text.js';
import Title from '../components/SignPages/Title.js';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '../api/axios';

const CompanySignUp = () => {
	const navigate = useNavigate();
	const from = '/';
	const LOGIN_URL = '/auth/register';

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = async () => {
		try {
			const response = await axios.post(
				LOGIN_URL,
				JSON.stringify({
					email,
					password,
					name: companyName,
					user_type: 'COMPANY'
					// company_logo: '',
					// company_brief,
					// employees_number
				}),
				{
					headers: { 'Content-Type': 'application/json' }
				}
			);

			localStorage.setItem('access_token', response?.data?.data?.accessToken);
			localStorage.setItem('email', response?.data?.data?.accessToken);
			localStorage.setItem('name', response?.data?.data?.name);
			localStorage.setItem('user_type', response?.data?.data?.user_type);
			localStorage.setItem('id', response?.data?.data?.id);

			setEmail('');
			setPassword('');

			navigate(from, { replace: true });
		} catch (err) {
			console.log('err :>> ', err);
		}
	};

	return (
		<div className="relative bg-white w-screen h-screen overflow-hidden text-base text-black font-roboto">
			<div className="absolute top-[0px] right-[0px] w-1/2 height:100% flex flex-col p-[250px_288px] box-border items-start justify-start gap-[35px]">
				<Title BoldCall="Company? " PageTitle="Let's Sign-up to" BoldTitle="Tech-It" />
				<TextField
					required
					id="company-name"
					name="company-name"
					label="Company Name"
					fullWidth
					variant="outlined"
					value={companyName}
					onChange={(e) => setCompanyName(e.target.value)}
				/>
				<TextField
					required
					id="email"
					name="email"
					label="Email"
					fullWidth
					variant="outlined"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					required
					id="password"
					name="password"
					label="Password"
					fullWidth
					variant="outlined"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<TextField
					required
					id="confirmPassword"
					name="confirmPassword"
					label="Confirm Password"
					fullWidth
					variant="outlined"
					value={confirmPassword}
					onChange={(e) => {
						setConfirmPassword(e.target.value);
						return e.target.value === password ? '' : '';
					}}
				/>

				{/* <Button submit="SIGN-UP" /> */}
				<button
					className="cursor-pointer [border:none] p-[14px_82px] bg-violet-100 rounded-[5px] w-[380px] h-[50px] shrink-0 flex flex-row box-border items-center justify-center active:bg-white active:[border:1px_solid_#a25ef9] active:box-border [&_.submit-div1]:active:font-extrabold [&_.submit-div1]:active:font-roboto [&_.submit-div1]:active:text-sm [&_.submit-div1]:active:text-violet-200 [&_.submit-div1]:active:cursor-auto"
					onClick={() => {
						// navigate('/');
						handleSubmit();
					}}>
					<div className="submit-div1 relative text-2xs font-semibold font-roboto text-white text-center inline-block">
						SIGN-UP
					</div>
				</button>
				<Text haveAnAccount="Have an account?" link="Log-in" nextPage="sign-in" />
			</div>
			<Logo />
		</div>
	);
};

export default CompanySignUp;
