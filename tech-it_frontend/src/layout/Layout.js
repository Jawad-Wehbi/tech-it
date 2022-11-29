import * as React from 'react';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NavigationBar from '../components/Utilities/NavigationBar';
import Footer from '../components/Utilities/Footer';

const Layout = (props) => {
	const { children, footer = true, checked, onChange } = props;
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
			<Grid container sx={{ height: '100%' }}>
				{/* <Grid item xs={12}> */}
				<NavigationBar />
				{/* </Grid>

				<Grid item xs={12}> */}
				<Box
					component="main"
					height="86.6vh"
					display="flex"
					flexDirection="column"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
						flexGrow: 1,
						height: '86.6vh',
						overflow: 'auto'
					}}>
					<Container maxWidth={false} disableGutters>
						<Grid container>{children}</Grid>
						{footer && <Footer style={{ alignItems: 'flex-end' }} checked={checked} onChange={onChange} />}
					</Container>
				</Box>
				{/* </Grid> */}
			</Grid>
		</>
	);
};

export default Layout;
