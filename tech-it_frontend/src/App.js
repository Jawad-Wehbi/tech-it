import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import CompanySignUp from './pages/CompanySignUp';
import TeamMembers from './pages/TeamMembers';

import SignIn from './pages/SignIn';
import NavigationBar from './components/Utilities/NavigationBar';
import Footer from './components/Utilities/Footer';
import { ProtectedRoute } from './helpers/PrivateRoute';
import NoPage from './pages/NoPage';
import Layout from './layout/Layout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route exact path="/" element={<ProtectedRoute />}> */}
				{/* <Route exact path="/navigation-bar" element={<NavigationBar />} /> */}
				<Route
					exact
					path="/"
					element={
						<Layout>
							<Dashboard />
						</Layout>
					}
				/>

				<Route
					exact
					path="/TeamMembers"
					element={
						<Layout>
							<TeamMembers />
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
	);
}

export default App;
