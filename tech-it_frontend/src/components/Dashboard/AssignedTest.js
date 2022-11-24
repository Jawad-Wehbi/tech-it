import { Container, Box, Typography, Stack, Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../../api/services';

const AssignedTest = () => {
	const assignee_id = parseInt(localStorage.getItem('assignee_id'));
	const navigate = useNavigate();
	const [data, set_data] = useState([]);
	const [loaded, set_loaded] = useState(false);
	const [loading, set_loading] = useState(true);

	const handleSubmit = (test_id, navigate) => {
		console.log('Test_id :>> ', test_id);
		navigate('/Exam', { state: { params: { test_id } } });
	};

	React.useEffect(() => {
		const fetchData = async () => {
			// define a function to make post API
			console.log('id :>> ', assignee_id);

			const urlParams = { resource: 'assignee', action: 'getAllAssignedTests' }; // set the of API
			const response = await post(urlParams, { assignee_id }); // call the API
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
		<>
			{data.map((item, index) => {
				return (
					<Container maxWidth={false} disableGutters>
						<Box sx={{ mt: 6, ml: 6 }}>
							<Stack
								spacing={2}
								direction="row"
								sx={{ mt: 4, justifyContent: 'space-between', alignItems: 'center', mr: 20 }}>
								<Stack
									spacing={3}
									direction="column"
									sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
									<Typography variant="h4" fontWeight={800}>
										{item.test.test_title}
									</Typography>
									<Typography variant="h6">{item.test.test_details}</Typography>
								</Stack>
								<Button
									variant="contained"
									style={{ justifyContent: 'center', width: 300, height: 40 }}
									sx={{ mr: 5, bgcolor: '#9747FF' }}
									onClick={() => handleSubmit(item.test_id, navigate)}>
									Start
								</Button>
							</Stack>
						</Box>
					</Container>
				);
			})}
		</>
	);
};

export default AssignedTest;
