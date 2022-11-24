import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CompanySignUp from './pages/CompanySignUp';
import TeamMembers from './pages/TeamMembers';
import Tests from './pages/Tests';
import QuestionsList from './pages/QuestionsList';
import AssigneeDashboard from './pages/AssigneeDashboard';
import McqQuestion from './pages/McqQuestion';
import CodingQuestion from './pages/CodingQuestion';

import SignIn from './pages/SignIn';
import NoPage from './pages/NoPage';
import Layout from './layout/Layout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Dashboard from './pages/Dashboard';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Exam from './pages/Exam';

const light = {
	palette: {
		mode: 'light'
	}
};

const dark = {
	palette: {
		mode: 'dark'
	}
};

function App() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const [user_type, set_user_type] = useState(localStorage.getItem('user_type'));

	useEffect(() => {
		setIsDarkTheme(JSON.parse(window.localStorage.getItem('isDarkTheme')));
		set_user_type(localStorage.getItem('user_type'))
	}, []);

	useEffect(() => {
		window.localStorage.setItem('isDarkTheme', isDarkTheme);
	}, [isDarkTheme]);

	const changeTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	};
	return (
		<ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
			<CssBaseline />

			
		<BrowserRouter>
			<Routes>
					{/* <Route exact path="/" element={<ProtectedRoute />}>   'x'.isInt ? '': ''     */}
					{/* <Route exact path="/navigation-bar" element={<NavigationBar />} /> */}
					{user_type === 'COMPANY' ? (
						<Route
							exact
							path="/"
							element={
								<Layout checked={isDarkTheme} onChange={changeTheme}>
									<Dashboard />
								</Layout>
							}
						/>
					) : (
						<Route
							exact
							path="/"
							element={
								<Layout checked={isDarkTheme} onChange={changeTheme}>
									<AssigneeDashboard />
								</Layout>
							}
						/>
					)}
					
				<Route
					exact
					path="/TeamMembers"
					element={
						<Layout>
							<TeamMembers />
						</Layout>
					}
				/>

				<Route
					exact
					path="/Tests"
					element={
						<Layout>
							<Tests />
						</Layout>
					}
				/>

				<Route
					exact
					path="/Questions"
					element={
						<Layout>
							<QuestionsList  />
						</Layout>
					}
				/>

				<Route
					exact
					path="/McqQuestion"
					element={
						<Layout footer={false}>
							<McqQuestion  />
						</Layout>
					}
				/>
				<Route
					exact
					path="/CondingQuestion"
					element={
						<Layout footer={false}>
							<CodingQuestion  />
						</Layout>
					}
				/>

				<Route path="*" element={<NoPage />} />
				{/* </Route> */}

				{/* Non-Protected Paths */}
				<Route exact path="/sign-up" element={<CompanySignUp />} />
				<Route exact path="/sign-in" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
