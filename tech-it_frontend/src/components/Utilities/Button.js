import { Button } from '@mui/material';

function ContinueButton(props) {
	const { NextOrSubmit } = props;
	return (
		<Button
			variant="contained"
			sx={{ bgcolor: '#9747FF', my: 2.5, width: 150, height: 40, justifyContent: 'center' }}>
			{ NextOrSubmit }
		</Button>
	);
}

export default ContinueButton;
