import { Container, Box, Typography, Stack, Button } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTest = () => {
	const navigate = useNavigate();

	return (
		<>
			<Container maxWidth={false} disableGutters>
				<Box sx={{ mt: 6, ml: 6 }}>
					<Typography variant="h3">Test Title</Typography>

					<Stack
						spacing={2}
						direction="row"
						sx={{ mt: 4, justifyContent: 'space-between', alignItems: 'center', mr: 20 }}>
						<Typography variant="h5">
							Test Details
						</Typography>

						<Button
							variant="contained"
							style={{ width: 300, height: 40 }}
							sx={{ mr: 5, bgcolor: '#9747FF' }}
							onClick={() => {
								navigate('/Test');
							}}>
							Start
						</Button>
					</Stack>
				</Box>
			</Container>
		</>
	);
};

export default CreateTest;