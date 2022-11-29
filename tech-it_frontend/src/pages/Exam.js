import { Box, CircularProgress, Container} from '@mui/material';
import React, { useEffect, useState } from 'react'; 
import QuestionStepper2 from '../components/Exam/MainExam';
import { useLocation } from 'react-router-dom';

import { post } from '../api/services';

const Exam = () => {
	const [loading, set_loading] = useState(true);
	const [questions, set_questions] = useState([]);
	const [loaded, set_loaded] = useState(false);
	
	

	const location = useLocation();
	const test_data = location.state.params;
	console.log('test_data :>> ', test_data);


	useEffect(() => {
		const fetchData = async () => {
			const data = { id: test_data.test_id };
			const urlParams = { resource: 'user', action: 'getQuestionsByTest' };
			const response = await post(urlParams, data);
			console.log('------> response', response);
			set_questions(response.data);
			set_loading(false);
			set_loaded(true);
		};
		if (!loaded) fetchData().catch(console.error);
	}, []);

	return loading ? (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				height: '100%',
				width: '100%'
			}}>
			<CircularProgress />
		</Box>
	) : (
		<Container disableGutters>
			<Box height="85vh" display="flex" flexDirection="column">
				<QuestionStepper2 questions={questions} />
			</Box>
		</Container>
	);
};

export default Exam;
