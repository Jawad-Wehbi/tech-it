import { Container, Paper, ListItemText, Typography } from '@mui/material';
import * as React from 'react';
import { Colors } from '../../values/colors';
const TestDetailsPanel = (props) => {
  
	const {TestTitle="Test Title", TestDetails="Test details" } = props;
	return (
		<Container >
						<Paper sx={{ height: '12vh', padding: '10px',marginBottom: "2vh", bgcolor: Colors.question_bg }}>
							<ListItemText
								primary={
									<React.Fragment>
										<Typography sx={{ display: 'inline' }} variant="h5">
											{TestTitle}
										</Typography>
									</React.Fragment>
								}
								secondary={
									<React.Fragment>
										<Typography
											sx={{ display: 'inline' }}
											component="span"
											variant="body2"
											color="text.primary">
											{TestDetails}
										</Typography>
									</React.Fragment>
								}
							/>
						</Paper>
		</Container>
	);
};

export default TestDetailsPanel;