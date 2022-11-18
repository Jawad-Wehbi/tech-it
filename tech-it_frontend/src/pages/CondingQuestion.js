import { Box, Container, Grid } from '@mui/material';
import * as React from 'react';
import ContinueButton from '../components/Utilities/Button';
import Header from '../components/QuestionsUtilities/Header';
import OutputPanel from '../components/CondingQuestion/OutputPanel';
import QuestionDetailsPanel from '../components/CondingQuestion/QuestionDetailsPanel';
import SolutionPanel from '../components/CondingQuestion/SolutionPanel';

const CodingQuestion = () => {
	return (
		<Container disableGutters>
			<Box height="85vh" display="flex" flexDirection="column">
				<Grid item xs={12} md={12}>
					<Header />
				</Grid>
				<Grid item xs={12} md={12}>
					<QuestionDetailsPanel />
				</Grid>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<SolutionPanel/>
					</Grid>
					<Grid item xs={12} md={6}>
						<OutputPanel />
						<Box display="flex" justifyContent="center">
							<ContinueButton NextOrSubmit="Submit" />
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default CodingQuestion;
