import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import AccordionItem from '../QuestionsList/Accordion';
import { Box, CircularProgress, Container } from '@mui/material';
import { post } from '../../api/services';

const ItemsList = (props) => {
	const { topics_selected } = props;
	console.log('topics_selected :>> ', topics_selected);

	const [data, set_data] = useState([]);
	const [loaded, set_loaded] = useState(false);
	const [loading, set_loading] = useState(true);
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			// define a function to make post API
			const urlParams = { resource: 'company', action: 'addQuestionsToTest' }; // set the of API
			const response = await post(urlParams, { questions }); // call the API
			console.log('-------->', response); // display result
			set_data(response.data); // set data
			set_loaded(true);
			set_loading(false);
		};
	})
	useEffect(() => {
		const fetchData = async () => {
			// define a function to make post API
			const urlParams = { resource: 'company', action: 'getQuestionsByTopic' }; // set the of API
			const response = await post(urlParams, { topics: topics_selected }); // call the API
			console.log('-------->', response); // display result
			set_data(response.data); // set data
			set_loaded(true);
			set_loading(false);
		};

		if (!loaded) fetchData().catch(console.error); // call the function in case it is not called yet
	}, []);

	useEffect(() => {
		console.log('questions :>> ', questions);
	});

	const updateQuestions = (item) => {
		setQuestions((current) => [...current, item]);
	};

	return loading ? (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				height: '100vh',
				width: '100%'
			}}>
			<CircularProgress />
		</Box>
	) : (
		<Container justifyContent="center">
			<Container>
				<List>
					{data.map((item, index) => {
						return (
							<AccordionItem
								id={item.id}
								QuestionTitle={item.question_title}
								QuestionBody={item.question_details}
								updateQuestions={updateQuestions}
							/>
						);
					})}
				</List>
			</Container>
		</Container>
	);
};

export default ItemsList;
