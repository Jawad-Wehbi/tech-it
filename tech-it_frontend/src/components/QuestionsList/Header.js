import { Grid, Container, Paper, Box, Stack, Toolbar, Button, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TestDetailsDailog from './testDetailsDailog';

const Header = (props) => {
	const { topics_selected } = props;

	console.log('topics_selected header :>> ', topics_selected);

	const dailogRef = useRef(null);
 
	let str = '';

	const display = topics_selected.map((data, index) => {
		if (index === 0) return str.concat('(' + data + ',');
		else if (index === topics_selected.length - 1) return str.concat(data + ')');
		else return str.concat(data + ',');
	});

	return (
		<>
			<Container maxWidth={false} disableGutters>
				<Grid container>
					<Grid item xs={12} md={12}>
						<Container maxWidth={false} sx={{ mt: 4 }}>
							<Paper
								variant="outlined"
								sx={{
									bgcolor: '#222222',
									borderRadius: 2,
									boxShadow: 2,
									borderColor: '#5A4AE3'
								}}>
								<Stack
									direction="row"
									spacing={1}
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center'
									}}>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'flex-start'
										}}>
										<Toolbar
											sx={{ display: 'flex', justifyItems: 'flex-start', flexDirection: 'column' }}>
											<Typography variant="h6" sx={{ mr: '78px' }} align="left" color="#ffffff">
												Questions
											</Typography>
											<Typography variant="p" align="left" color="#efefef">
												{display}
											</Typography>
										</Toolbar>
									</Box>

									<Box>
										{/* <Button
											variant="contained"
											style={{ width: 150, height: 40 }}
											sx={{ mr: 5, bgcolor: '#9747FF' }}>
											NEW QUESTION
										</Button> */}

										<Button
											variant="contained"
											style={{ width: 150, height: 40 }}
											sx={{ mr: 5, bgcolor: '#9747FF' }}
											onClick={() => {
												dailogRef.current.handleClickOpen(true);
											}}>
											SUBMIT TEST
										</Button>
									</Box>
								</Stack>
								<TestDetailsDailog ref={dailogRef} />
							</Paper>
						</Container>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Header;
