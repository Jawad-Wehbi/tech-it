import { Container, Box, Typography, Stack, Button } from '@mui/material';
import React, { useRef } from 'react';
import TopicDialog from '../TestDialogs/TopicDialog';

const CreateTest = () => {
	const childRef = useRef(null);

	return (
		<>
			<Container maxWidth={false} disableGutters>
				<Box sx={{ mt: 6, ml: 6 }}>
					<Typography variant="h3">Test in different topics!</Typography>

					<Stack
						spacing={2}
						direction="row"
						sx={{ mt: 4, justifyContent: 'space-between', alignItems: 'center', mr: 20 }}>
						<Typography variant="h5">
							Create your test template in different topics with an endless list of questions.
						</Typography>

						<Button
							variant="contained"
							style={{ width: 300, height: 40 }}
							sx={{ mr: 5, bgcolor: '#9747FF' }}
							onClick={() => {
								childRef.current.handleClickOpen(true);
							}}>
							Create
						</Button>
						<TopicDialog ref={childRef} />
					</Stack>
				</Box>
			</Container>
		</>
	);
};

export default CreateTest;
