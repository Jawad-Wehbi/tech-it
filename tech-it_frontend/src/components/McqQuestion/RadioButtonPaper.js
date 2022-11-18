import * as React from 'react';
import { Container, Paper, Typography, Stack, Box } from '@mui/material';
import { Colors } from '../../values/colors';
import CustomCheckBox from '../Utilities/CustomCheckBox';

function Choice(props) {
	const { choice } = props;
	return (
		<Container >
			<Box sx={{ height: '30', width: '80%' }}>
				<Paper sx={{ bgcolor: Colors.purple }}>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						width="100"
						sx={{ my: 3, ml: 3 }}>
						<Typography sx={{ color: Colors.white}}>{choice}</Typography>
						<CustomCheckBox />
					</Stack>
				</Paper>
			</Box>
		</Container>
	);
}

export default Choice;
