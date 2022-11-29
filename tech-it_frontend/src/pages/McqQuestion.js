import { Container, Grid } from '@mui/material';
import * as React from 'react';
import ChoicesPanel from '../components/McqQuestion/ChoicesPanel';
import TestDetailsPanel from '../components/McqQuestion/QuestionDetailsPanel';

const McqQuestion = (props) => {
	const { question } = props;

	return (
		<Container disableGutters>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TestDetailsPanel
						TestTitle={question.question_title}
						TestDetails={question.question_details}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<ChoicesPanel choices={question.mcq_answers} />
				</Grid>
			</Grid>
		</Container>
	);
};

// {
// 	"test_id": 1,
// 	"question_id": 1,
// 	"question": {
// 			"id": 1,
// 			"question_title": "Python Basics",
// 			"max_score": "5",
// 			"customized": true,
// 			"question_details": "Which of the following are some common RDBMS in use?",
// 			"topic": "SQL",
// 			"mcq_answers": {
// 					"id": 1,
// 					"mcq_answer1": "Oracle",
// 					"mcq_answer2": "MySQL",
// 					"mcq_answer3": "HeidiSQL",
// 					"correct_answer4": "All of the above.",
// 					"question_id": 1
// 			},
// 			"coding_answers": null
// 	}
// }

export default McqQuestion;
