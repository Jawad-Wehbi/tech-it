import { Grid, Container, Paper, Box, Toolbar, Typography } from '@mui/material';
import * as React from 'react';

const Header = ({ Counter = '1' }) => {
	return (
		<>
			<Container maxWidth={false} sx={{ my: 2 }} disableGutters>
				<Paper
					variant="outlined"
					sx={{
						bgcolor: '#222222',
						borderRadius: 2,
						boxShadow: 2,
						borderColor: '#5A4AE3'
					}}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-start'
						}}>
						<Toolbar>
							<Typography variant="h5" align="left" color="#ffffff">
								Question
							</Typography>
							<Typography variant="h5" align="left" marginLeft="8px" color="#ffffff">
								{Counter}
							</Typography>
						</Toolbar>
					</Box>
				</Paper>
			</Container>
		</>
	);
};

export default Header;
