import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Paper } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
// import { MenuListItems } from './MenuListItems';
// import AuthApi from '../helpers/auth';
// import AppBar from './AppBar';
// import Drawer from './Drawer';
// import Copyright from './CopyRight';
// import logo from '../assets/logo.png';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import NavigationBar from '../components/Utilities/NavigationBar';
import Footer from '../components/Utilities/Footer';

const Layout = ({ children }) => {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	const logout = () => {
		// AuthApi.Logout();
		// window.location.reload();
	};

	return (
		<>
			<Grid container sx={{height: '100%'}}>
				{/* <Grid item xs={12}> */}
					<NavigationBar />
				{/* </Grid>

				<Grid item xs={12}> */}
					<Box
						component="main"
						maxWidth="xxl"
						sx={{
							backgroundColor: (theme) =>
								theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
							flexGrow: 1,
							height: '86.6vh',
							overflow: 'auto'
						}}>
						<Container maxWidth={false} disableGutters>
								
								<Grid container>{children}</Grid>
								<Footer sx={{ alignItems: 'flex-end' }} />
						</Container>
					</Box>
				{/* </Grid> */}
			</Grid>
		</>
	);
};

export default Layout;
