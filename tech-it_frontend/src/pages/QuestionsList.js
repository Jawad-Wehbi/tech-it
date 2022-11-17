import { Grid, Container} from '@mui/material';
import * as React from 'react';
import Header from '../components/QuestionsList/Header';
import List from '../components/QuestionsList/List';

const Tests = () => {
	return (
		<>
			<Container maxWidth={false} disableGutters>
				<Grid container justifyContent="center">
					<Grid item xs={10} md={10}>
						<Header />
					</Grid>

					<Grid item xs={12} md={12}>
						<List />
					</Grid>

					<Grid item xs={12} md={12} sx={{ mt: 5 }}></Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Tests;
