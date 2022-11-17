import * as React from 'react';
import List from '@mui/material/List';
import Item from '../QuestionsList/QuestionItem';
import { Container,} from '@mui/material';

const ItemsList = () => {
	return (
		<Container justifyContent="center">
					<Container>
							<List>
              	<Item />
              	<Item />
              	<Item />
              	<Item />
              	<Item />
							</List>
					</Container>
		</Container>
	);
};

export default ItemsList;
