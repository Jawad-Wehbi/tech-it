import { Grid, Container} from '@mui/material';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Utilities/Header';
import ItemsList from '../components/TestsList/List';

const Tests = () => {
	
	const location = useLocation();
	const data = location.state.params;

	console.log('data :>> ', data);

	return (
			<Container maxWidth={false} disableGutters>
				<Grid container justifyContent="center">
					<Grid item xs={12} md={12}>
						<Header Header="Tests" />
					</Grid>

					<Grid item xs={12} md={12}>
						<ItemsList topic_selected={data} />
					</Grid>

					<Grid item xs={12} md={12} sx={{ mt: 5 }}></Grid>
				</Grid>
			</Container>
	);
};

export default Tests;
