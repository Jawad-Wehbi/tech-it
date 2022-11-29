import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button, Paper, Stack } from '@mui/material';

const Item = () => {
	return (
		<ListItem>
			<Paper>
				<Stack direction="row" padding="15px" alignItems="center">
					<div width="70%">
					<ListItemText
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
					</div>
					<div width="20%">
						<Button
							variant="contained"
							style={{ width: '200px', height: 40 }}
							sx={{ marginBlock: 'auto', ml: 5, bgcolor: '#9747FF' }}>
							Preveiw
						</Button>
					</div>
				</Stack>
			</Paper>
		</ListItem>
	);
};

export default Item;
