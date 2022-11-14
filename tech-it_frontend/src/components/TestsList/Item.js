import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Grid, Button, Paper,} from '@mui/material';


const Item = () => {

	return (
			<ListItem>
				<Paper>
					<Grid container item xs={12} md={12} sx={{padding:"10px"}}>
						<Grid item xs={8} md={8}>
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
						</Grid>
						<Grid item xs={3} md={3}>
							<Button
								variant="contained"
								style={{ width: '100%', height: 40 }}
								sx={{ marginBlock:"auto", ml:5 , bgcolor: '#9747FF' }}>
								Preveiw
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</ListItem>
	);
};

export default Item;