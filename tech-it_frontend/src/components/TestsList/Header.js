import { Grid, Container, Paper, Box, Stack, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { Colors } from '../../values/colors';

const Header = () => {
	return (
		<>
			<Container maxWidth={false} disableGutters>
				<Grid container sx={{ justifyContent: 'center' }}>
					<Grid item xs={10} md={10}>
						<Container maxWidth={false} sx={{ mt: 4 }}>
							<Paper
								variant="outlined"
								sx={{
									bgcolor: Colors.black,
									borderRadius: 2,
									boxShadow: 2
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
												Tests
											</Typography>
										</Toolbar>
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
