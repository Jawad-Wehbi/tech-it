import { Grid, Container} from '@mui/material';
import { useLocation } from 'react-router-dom';
import Header from '../components/QuestionsList/Header';
import List from '../components/QuestionsList/List';

const Tests = () => {
	
	const location = useLocation();
	const data = location.state.params;


	return (
		<>
			<Container maxWidth={false} disableGutters>
				<Grid container justifyContent="center">
					<Grid item xs={10} md={10}>
						<Header topics_selected={data} />
					</Grid>

					<Grid item xs={12} md={12}>
						<List topics_selected={data} />
					</Grid>

					<Grid item xs={12} md={12} sx={{ mt: 5 }}></Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Tests;
