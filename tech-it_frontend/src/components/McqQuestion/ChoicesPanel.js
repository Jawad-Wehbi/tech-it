import { Container, Paper } from '@mui/material';
import * as React from 'react';
import { Colors } from '../../values/colors';
import Choice from './RadioButtonPaper';

const ChoicesPanel = (props) => {
	const { choices } = props;
	let x = Math.floor(Math.random() * 4 + 1);

	return (
		<Container>
			<Paper sx={{ height: '68vh', padding: '20px', bgcolor: Colors.question_bg }}>
				{x === 1 ? (
					<>
						<Choice choice={choices.mcq_answer1} />
						<Choice choice={choices.mcq_answer3} />
						<Choice choice={choices.correct_answer4} />
						<Choice choice={choices.mcq_answer2} />
					</>
				) : x === 2 ? (
					<>
						<Choice choice={choices.mcq_answer1} />
						<Choice choice={choices.mcq_answer2} />
						<Choice choice={choices.mcq_answer3} />
						<Choice choice={choices.correct_answer4} />
					</>
				) : x === 3 ? (
					<>
						<Choice choice={choices.correct_answer4} />
						<Choice choice={choices.mcq_answer1} />
						<Choice choice={choices.mcq_answer2} />
						<Choice choice={choices.mcq_answer3} />
					</>
				) : (
					<>
						<Choice choice={choices.mcq_answer1} />
						<Choice choice={choices.correct_answer4} />
						<Choice choice={choices.mcq_answer2} />
						<Choice choice={choices.mcq_answer3} />
					</>
				)}
			</Paper>
		</Container>
	);
};

export default ChoicesPanel;
