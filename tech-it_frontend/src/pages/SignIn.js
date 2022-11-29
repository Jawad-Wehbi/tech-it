import { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Input from '../components/SignPages/Input.js';
import Button from '../components/SignPages/Button.js';
import Logo from '../components/SignPages/Logo.js';
import Text from '../components/SignPages/Text.js';
import Title from '../components/SignPages/Title.js';
import Box from '@mui/material/Box';
import { Container, Grid, Paper } from '@mui/material';
import axios from '../api/axios';
import { useAuth } from '../context/AuthProvider';
import { TextField } from '@mui/material';
import { spacing, Stack } from '@mui/system';

const SignIn = () => {
	const { setTokens } = useAuth();
	// const { profile, setProfile, tokenData, setTokenData, tokens, setTokens } = useAuth();

	const from = '/';
	const LOGIN_URL = '/auth/login';

	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = async () => {
		try {
			const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password }), {
				headers: { 'Content-Type': 'application/json' }
			});

			console.log('response :>> ', response.data);

			const accessToken = response?.data?.data?.accessToken;

			localStorage.setItem('access_token', accessToken);
			localStorage.setItem('email', response?.data?.data?.accessToken);
			localStorage.setItem('name', response?.data?.data?.name);
			localStorage.setItem('user_type', response?.data?.data?.user_type);
			localStorage.setItem('id', response?.data?.data?.id);

			if (response.data.data.assignees) {
				localStorage.setItem('assignee_id', response.data.data.assignees.id);
				localStorage.setItem('company_id', response.data.data.assignees.company_id);
			}
			if (response.data.data.companies) {
				localStorage.setItem('company_id', response.data.data.companies.id);
				localStorage.setItem('user_id', response.data.data.companies.user_id);
			}

			setEmail('');
			setPassword('');

			navigate(from, { replace: true });
		} catch (err) {
			console.log('err :>> ', err);
		}
	};

	return (
		<Container
			disableGutters
			className="relative bg-white w-screen h-screen overflow-hidden text-base text-black font-roboto">
			<Grid
				container
				className="relative bg-white h-screen overflow-hidden text-base text-black font-roboto">
				<Grid item xs={12} md={12} lg={6}>
					<Logo />
				</Grid>
				<Grid
					item
					xs={12}
					md={12}
					lg={6}
					spacing={5}
					direction="column"
					alignItems="center"
					justifyContent="center"
					style={{ minHeight: '100vh'}}>
					<Box sx={{flexDirection:'column',justifyContent:"center",alignItems:"center",marginInline:12 , marginBlock:40, height:'100vh', flex:spacing}}>
						<Title BoldCall="Let's Sign-in to " PageTitle="" BoldTitle="Tech-It" />
						<TextField
							required
							id="email"
							name="email"
							label="Email"
							sx={{ width: 380,marginBlock:2 }}
							variant="outlined"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							required
							id="password"
							name="password"
							label="Password"
							type="password"
							sx={{ width: 380,marginBlock:2  }}
							variant="outlined"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						{/* <Button submit="SIGN-UP" /> */}
						<button
							className="cursor-pointer [border:none] p-[14px_82px] bg-violet-100 rounded-[5px] w-[380px] h-[50px] shrink-0 flex flex-row box-border items-center justify-center active:bg-white active:[border:1px_solid_#a25ef9] active:box-border [&_.submit-div1]:active:font-extrabold [&_.submit-div1]:active:font-roboto [&_.submit-div1]:active:text-sm [&_.submit-div1]:active:text-violet-200 [&_.submit-div1]:active:cursor-auto"
							onClick={() => {
								// navigate('/');
								handleSubmit();
							}}>
							<div className="submit-div1 relative text-2xs font-semibold font-roboto text-white text-center inline-block">
								SIGN-IN
							</div>
						</button>
						<Text haveAnAccount="Don't have an account?" link="Sign-up" nextPage="sign-up" />
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default SignIn;
