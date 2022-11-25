import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

const AccordionItem = (props) => {
	const { QuestionTitle, QuestionBody, updateQuestions, id } = props;
	const [expanded, setExpanded] = React.useState(false);
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const handleCheckBoxChange = () => {
		updateQuestions(id);
	};

	return (
		<div style={{ marginTop: '10px' }}>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header">
					<Typography
						sx={{
							width: '33%',
							height: 'fit-content',
							fontSize: 20,
							fontWeight: 600,
							flexShrink: 0
						}}>
						{QuestionTitle}
					</Typography>
					<Checkbox
						onChange={() => handleCheckBoxChange()}
						sx={{ marginBlock: 'auto', ml: '62%' }}
						{...label}
						color="secondary"
					/>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ fontSize: 14 }}>{QuestionBody}</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default AccordionItem;
