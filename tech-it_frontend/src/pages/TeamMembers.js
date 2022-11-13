import { Grid, Container, Paper, Box } from '@mui/material';
import * as React from 'react';
import CreateTest from '../components/Dashboard/createTest';
import SlideShow from '../components/Dashboard/slideShow';
import Topics from '../components/Dashboard/topics';
import Header from '../components/TeamMembers/Header';
import Table from '../components/TeamMembers/Table';

const TeamMembers = () => {
	return (
		<>
			<Container maxWidth={false} disableGutters>
				<Grid container>
					<Grid item xs={12} md={12}>
						<Header />
					</Grid>

					<Grid item xs={12} md={12}>
            <Table />
          </Grid>

					<Grid item xs={12} md={12} sx={{ mt: 5 }}></Grid>
				</Grid>
			</Container>
		</>
	);
};

export default TeamMembers;
