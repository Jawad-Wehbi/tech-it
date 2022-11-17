import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button, Paper, Container, Stack } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Item = () => {
	return (
		<ListItem>
			<Container>
				<Paper>
					<Stack direction="row" padding="15px" alignItems="center">
						<ListItemText
							sx={{ width: '70%' }}
							primary="Test Title"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: 'inline' }}
										component="span"
										variant="body2"
										color="text.primary"></Typography>
									{
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit accumsan sodales. Integer nec dapibus nulla. Maecenas ac felis lorem. Curabitur libero tellus, malesuada vel tempus eget, vestibulum et massa. '
									}
								</React.Fragment>
							}
						/>
						<div sx={{ width: '20%', alignItems:"center" }}>
							<Checkbox {...label} defaultChecked color="secondary" />

							<Button
								variant="contained"
								style={{ width: 200, height: 40 }}
								sx={{ bgcolor: '#9747FF' }}>
								Preveiw
							</Button>
						</div>
					</Stack>
				</Paper>
			</Container>
		</ListItem>
	);
};

export default Item;
