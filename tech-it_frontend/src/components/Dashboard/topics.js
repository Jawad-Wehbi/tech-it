import { Container, Paper, Typography, Button, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Topics = () => {
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
					<Paper sx={{pb: 6}}>
						<Stack justifyContent="center" alignItems="center">
							<Typography
								variant="h4"
								sx={{ justifyContent: 'center', alignItems: 'center', m:2}}>
								Topics
							</Typography>
							<Paper sx={{ height: '100%', width: '80%', flexDirection: 'column', bgcolor: '#F4F4F4', py: 3 }}>
								<Stack direction="row" spacing={8} justifyContent="center" alignItems="center">
									<Button variant="contained" size="medium">
										<Typography variant="subtitle1">Python</Typography>
									</Button>

									<Button variant="contained" size="medium">
										<Typography variant="subtitle1">Data Structure</Typography>
									</Button>

									<Button variant="contained" size="medium">
										<Typography variant="subtitle1">C</Typography>
									</Button>
								</Stack>

								<Stack direction="row" spacing={8} justifyContent="center" alignItems="center">
									<Button variant="contained" size="medium">
										<Typography variant="subtitle1">Java</Typography>
									</Button>
									<Button variant="contained" size="medium">
										<Typography variant="subtitle1">JavaScript</Typography>
									</Button>
									<Button variant="contained" size="medium">
										<Typography variant="subtitle1">SQL</Typography>
									</Button>
								</Stack>

								<Stack direction="row" spacing={8} justifyContent="center" alignItems="center">
									<Button variant="contained" size="medium">
										<Typography variant="subtitle1">Databases</Typography>
									</Button>

									<Button variant="contained" size="medium">
										<Typography variant="subtitle1">C#</Typography>
									</Button>
									<Button variant="contained" size="medium">
										<Typography variant="subtitle1">PHP</Typography>
									</Button>
								</Stack>

								<Stack direction="row" spacing={8} justifyContent="center" alignItems="center">
									<Button variant="contained" size="medium">
										<Typography variant="subtitle1">Algorithms</Typography>
									</Button>
									<Button variant="contained" size="medium">
										<Typography variant="subtitle1">Ruby</Typography>
									</Button>

									<Button variant="contained" size="medium">
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

{
	/* <Grid item xs={3} md={3}>
										<Button variant="contained" size="medium">
											Python
										</Button>
									</Grid>

									<Grid item xs={3} md={3}>
										<Button variant="contained" size="medium">
											Data Structure
										</Button>
									</Grid>

									<Grid item xs={3} md={3}>
										<Button variant="contained" size="medium">
											C
										</Button>
									</Grid>

									<Grid item xs={3} md={3}>
										<Button variant="contained" size="medium">
											Java
										</Button>
									</Grid>

									<Grid item xs={3} md={3}>
										<Button variant="contained" size="medium">
											JavaScript
										</Button>
									</Grid>

									<Grid item xs={3} md={3}>
										<Button variant="contained" size="medium">
											SQL
										</Button>
									</Grid>

									<Grid item xs={3} md={3}>
										<Button variant="contained" size="medium">
											Databases
										</Button>
									</Grid>

									<Grid item xs={3} md={3}>
										<Button variant="contained" size="medium">
											PHP
										</Button>
									</Grid>

									<Grid item xs={3} md={3}>
										<Button variant="contained" size="medium">
											Algorithms
										</Button>
									</Grid>

									<Grid item xs={3} md={3}>
										<Button variant="contained" size="medium">
											Ruby
										</Button>
									</Grid>

									<Grid item xs={3} md={3}>
										<Button variant="contained" size="medium">
											Company Tests
										</Button>
									</Grid> */
}

export default Topics;
