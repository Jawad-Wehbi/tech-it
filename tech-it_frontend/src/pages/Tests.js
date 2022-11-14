import { Grid, Container} from '@mui/material';
import * as React from 'react';
import Header from '../components/TestsList/Header';
import ItemsList from '../components/TestsList/List';

const Tests = () => {
	return (
		<>
			<Container maxWidth={false} disableGutters>
				<Grid container justifyContent="center">
					<Grid item xs={12} md={12}>
						<Header />
					</Grid>

					<Grid item xs={12} md={12}>
						<ItemsList />
					</Grid>

					<Grid item xs={12} md={12} sx={{ mt: 5 }}></Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Tests;
