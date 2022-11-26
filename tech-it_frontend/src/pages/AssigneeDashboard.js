import { Grid, Container, List } from '@mui/material';
import * as React from 'react';
import AssignedTest from '../components/Dashboard/AssignedTest';
import SlideShow from '../components/Dashboard/slideShow';

const Dashboard = () => {
	return (
		<>
			<Container maxWidth={false} disableGutters>
				<Grid container justifyContent='center'>
					<Grid item xs={12} md={12} lg={10}>
						<SlideShow />
					</Grid>

					<Grid item xs={12} md={12} lg={8}>
						<List>
							<AssignedTest />
						</List>
					</Grid>

					<Grid item xs={12} md={12} lg={10} sx={{ mt: 5 }}>
					<img src="../Steps.jpg" alt="Steps" />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Dashboard;
