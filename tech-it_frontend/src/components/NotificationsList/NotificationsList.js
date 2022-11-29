import * as React from 'react';
import List from '@mui/material/List';
import NotificationItem from '../TestsList/NotificationItem';
import { Container,} from '@mui/material';

const ItemsList = () => {
	return (
		<Container justifyContent="center">
					<Container>
							<List>
              	<NotificationItem />
              	<NotificationItem />
              	<NotificationItem />
              	<NotificationItem />
              	<NotificationItem />
							</List>
					</Container>
		</Container>
	);
};

export default ItemsList;
