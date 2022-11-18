import { Grid, Container} from '@mui/material';
import * as React from 'react';
import CreateTest from '../components/Dashboard/createTest';
import SlideShow from '../components/Dashboard/slideShow';
import Topics from '../components/Dashboard/topics';

const Dashboard = () => {
	return (
		<>
			<Container maxWidth={false} disableGutters>
				<Grid container justifyContent="center">
					<Grid item xs={12} md={12} xl={10}>
						<SlideShow />
					</Grid>

					<Grid item xs={12} md={10}>
						<CreateTest />
					</Grid>

					<Grid item xs={12} md={10} sx={{mt: 5}}>
						<Topics />
					</Grid>
					<Grid item xs={12} md={12} xl={10} sx={{mt: 5}}>
					<img src="../Steps.jpg" alt="Steps" />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Dashboard;
