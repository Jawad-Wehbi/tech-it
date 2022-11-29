import { Container, Paper } from '@mui/material';
import * as React from 'react';
import { Colors } from '../../values/colors';

const SolutionPanel = (props) => {
	const { Solution = 'Solution' } = props;
	return (
		<Container>
			<Paper sx={{ height: '60vh', padding: '20px', bgcolor: Colors.question_bg }}>
				{Solution}
			</Paper>
		</Container>
	);
};

export default SolutionPanel;
