import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Paper, Stack } from '@mui/material';

const Item = (props) => {
	const { NotificationTitle="Notification Title",NotificationBody="NotificationBody"  } = props;
	return (
		<ListItem>
			<Paper>
				<Stack direction="row" padding="15px" alignItems="center">
					<div width="70%">
					<ListItemText
						primary={NotificationTitle}
						secondary={
							<React.Fragment>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"></Typography>
								{
									{NotificationBody}
								}
							</React.Fragment>
						}
					/>						
					</div>
					<div width="20%">
            <time/>
					</div>
				</Stack>
			</Paper>
		</ListItem>
	);
};

export default Item;
