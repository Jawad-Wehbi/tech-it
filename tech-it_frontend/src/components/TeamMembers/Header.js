import { Grid, Container, Paper, Box, Stack, Toolbar, Button, Typography } from '@mui/material';
import * as React from 'react';

const Header = () => {
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
										<Toolbar>
											<Typography variant="h6" align="left" color="#ffffff">
												Team Members
											</Typography>
										</Toolbar>
									</Box>

									<Box>
										<Button
											variant="contained"
											style={{ width: 300, height: 40 }}
											sx={{ mr: 5, bgcolor: '#9747FF' }}>
											ADD MEMBER
										</Button>
									</Box>
								</Stack>
							</Paper>
						</Container>
					</Grid>

					<Grid item xs={12} md={12}></Grid>

					<Grid item xs={12} md={12} sx={{ mt: 5 }}></Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Header;
