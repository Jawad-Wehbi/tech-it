import { Grid, Container, Paper, Box } from '@mui/material';
import * as React from 'react';
import CreateTest from '../components/Dashboard/createTest';
import SlideShow from '../components/Dashboard/slideShow';
import Topics from '../components/Dashboard/topics';

const Dashboard = () => {
	return (
		<>
			<Container maxWidth={false} disableGutters>
				<Grid container>
					<Grid item xs={12} md={12}>
						<SlideShow />
					</Grid>

					<Grid item xs={12} md={12}>
						<CreateTest />
					</Grid>

					<Grid item xs={12} md={12} sx={{mt: 5}}>
						<Topics />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Dashboard;
