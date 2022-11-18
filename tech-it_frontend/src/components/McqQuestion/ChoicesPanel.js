import { Container, Paper } from '@mui/material';
import * as React from 'react';
import { Colors } from '../../values/colors';
import Choice from './RadioButtonPaper';
const ChoicesPanel = () => {
	return (
		<Container>
			<Paper sx={{ height: '60vh', padding: '20px', bgcolor: Colors.question_bg }}>
        <Choice choice="1st Choice"/>
        <Choice choice="2nd Choice"/>
        <Choice choice="3rd Choice"/>
        <Choice choice="4th Choice"/>
      </Paper>
		</Container>
	);
};

export default ChoicesPanel;
