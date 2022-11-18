import { Box, Container, Grid } from '@mui/material';
import * as React from 'react';
import ContinueButton from '../components/Utilities/Button';
import Header from '../components/QuestionsUtilities/Header';
import ChoicesPanel from '../components/McqQuestion/ChoicesPanel';
import TestDetailsPanel from '../components/McqQuestion/QuestionDetailsPanel'


const McqQuestion = () => {
	return (
		<Container disableGutters>
			<Box height="85vh" display="flex" flexDirection="column">
			<Grid item xs={12} md={12}>
				<Header />
			</Grid>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<TestDetailsPanel/>
					</Grid>
					<Grid item xs={12} md={6}>
					<ChoicesPanel/>
						<Box display="flex" justifyContent="center">
							<ContinueButton NextOrSubmit="Submit" />
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default McqQuestion;
