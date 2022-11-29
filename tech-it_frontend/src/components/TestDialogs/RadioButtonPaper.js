import * as React from 'react';
import { Container, Paper, Typography, Stack, Box } from '@mui/material';
import { Colors } from '../../values/colors';
import CustomCheckBox from '../Utilities/CustomCheckBox';

function TestTopicPaper(props) {
	const { title, updateTopics } = props;
	return (
		<Container fullWidth={false}>
			<Box sx={{ height: '200', width: '150' }}>
				<Paper sx={{ bgcolor: Colors.purple }}>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						width="100"
						sx={{ my: 2, mx: 3 }}>
						<Typography sx={{ color: Colors.white}}>{title}</Typography>
						<CustomCheckBox title={title} updateTopics={updateTopics} />
					</Stack>
				</Paper>
			</Box>
		</Container>
	);
}

export default TestTopicPaper;
