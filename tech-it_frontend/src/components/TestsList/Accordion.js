import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

const Item = (props) => {
	const { TestTitle = 'Test Title', TestBody = 'Test Body' } = props;
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div style={{ marginTop: '10px' }}>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header">
					<Typography sx={{ width: '33%',height:'fit-content', flexShrink: 0 }}>{TestTitle}</Typography>
					<Button
						variant="contained"
						style={{ width: '200px', height: 40 }}
						sx={{ marginBlock: 'auto', ml: '23vw', bgcolor: '#9747FF' }}>
						Assign Test
					</Button>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{TestBody}</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default Item;
