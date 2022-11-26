import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import Item from '../TestsList/Accordion';
import { Box, CircularProgress, Container} from '@mui/material';
import { post } from '../../api/services';


const ItemsList = (props) => {

	const { topic_selected } = props;
	console.log('topics_selected :>> ', topic_selected);
	const [data, set_data] = useState([]);
	const [loaded, set_loaded] = useState(false);
	const [loading, set_loading] = useState(true);

	React.useEffect(() => {
		const fetchData = async () => {
			// define a function to make post API
			const urlParams = { resource: 'company', action: 'getalltests' }; // set the of API
			const response = await post(urlParams, { topic: topic_selected }); // call the API
			console.log('-------->', response); // display result
			set_data(response.data); // set data
			set_loaded(true);
			set_loading(false);
		};

		if (!loaded) fetchData().catch(console.error); // call the function in case it is not called yet
	}, []);

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
							<List>
							{data.map((item, index) => {
						return <Item TestTitle={item.test_title} TestBody={item.question_details} />
					})}
							</List>
		</Container>
	);
};

export default ItemsList;
