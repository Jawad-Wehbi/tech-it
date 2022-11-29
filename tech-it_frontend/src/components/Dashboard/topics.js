import { Container, Paper, Typography, Button, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Topics = () => {
	const navigate = useNavigate();

	const handleSubmit = (topic, navigate) => {
		console.log('Topic :>> ', topic);
		navigate('/Tests', { state: { params: topic } });
	};

	return (
		<>
			<Container maxWidth={false} disableGutters>
				<Box
					sx={{
						'& button': {
							m: 1,
							width: 250,
							height: 45,
							bgcolor: '#9747FF',
							borderRadius: 2,
							boxShadow: 2
						}
					}}>
					<Paper sx={{ pb: 6 }}>
						<Stack justifyContent="center" alignItems="center">
							<Typography
								variant="h4"
								sx={{ justifyContent: 'center', alignItems: 'center', m: 2 }}>
								Topics
							</Typography>
							<Paper
								sx={{
									height: '100%',
									width: '80%',
									flexDirection: 'column',
									bgcolor: '#F4F4F4',
									py: 3
								}}>
								<Stack direction="row" spacing={8} justifyContent="center" alignItems="center">
									<Button
										variant="contained"
										size="medium"
										onClick={()=> handleSubmit("PYTHON",navigate)}>
										<Typography variant="subtitle1">Python</Typography>
									</Button>

									<Button variant="contained" size="medium"
										onClick={()=> handleSubmit('DATA_STRUCTURE', navigate)}>
										<Typography variant="subtitle1">Data Structure</Typography>
									</Button>

									<Button onClick={() => handleSubmit('C', navigate)} variant="contained" size="medium">
										<Typography variant="subtitle1">C</Typography>
									</Button>
								</Stack>

								<Stack direction="row" spacing={8} justifyContent="center" alignItems="center">
									<Button 
										onClick={() => handleSubmit('JAVA', navigate)} variant="contained" size="medium">
										<Typography variant="subtitle1">Java</Typography>
									</Button>
									<Button 
										onClick={() => handleSubmit('JAVASCRIPT', navigate)} variant="contained" size="medium">
										<Typography variant="subtitle1">JavaScript</Typography>
									</Button>
									<Button 
										onClick={() => handleSubmit('SQL', navigate)} variant="contained" size="medium">
										<Typography variant="subtitle1">SQL</Typography>
									</Button>
								</Stack>

								<Stack direction="row" spacing={8} justifyContent="center" alignItems="center">
									<Button 
										onClick={() => handleSubmit('DATABASES', navigate)} variant="contained" size="medium">
										<Typography variant="subtitle1">Databases</Typography>
									</Button>

									<Button 
										onClick={() => handleSubmit('C#', navigate)} variant="contained" size="medium">
										<Typography variant="subtitle1">C#</Typography>
									</Button>
									<Button 
										onClick={() => handleSubmit('PHP', navigate)} variant="contained" size="medium">
										<Typography variant="subtitle1">PHP</Typography>
									</Button>
								</Stack>

								<Stack direction="row" spacing={8} justifyContent="center" alignItems="center">
									<Button 
										onClick={() => handleSubmit('ALGORITHMS', navigate)} variant="contained" size="medium">
										<Typography variant="subtitle1">Algorithms</Typography>
									</Button>
									<Button 
										onClick={() => handleSubmit('RUBY', navigate)} variant="contained" size="medium">
										<Typography variant="subtitle1">Ruby</Typography>
									</Button>

									<Button 
										onClick={() => handleSubmit('COMPANY_TESTS', navigate)} variant="contained" size="medium">
										<Typography variant="subtitle1">Company Tests</Typography>
									</Button>
								</Stack>
							</Paper>
						</Stack>
					</Paper>
				</Box>
			</Container>
		</>
	);
};


export default Topics;
