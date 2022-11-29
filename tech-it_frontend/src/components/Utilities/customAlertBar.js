import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const Alert = forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedAlertBar = forwardRef((props, ref) => {
	const navigate = useNavigate();
	const [state, setState] = useState({
		open: false,
		message: '',
		severity: ''
	});

	useImperativeHandle(ref, () => ({
		handleClick(newState) {
			setState({ open: true, ...newState });
		}
	}));

	const { message, severity, open } = state;
	const { path } = props;

	const handleClose = () => {
		setState({ ...state, open: false });
		if (severity === 'success' && path) navigate(`${path}`);
	};

	// {/* <Alert severity="error">This is an error message!</Alert>
	//   <Alert severity="warning">This is a warning message!</Alert>
	//   <Alert severity="info">This is an information message!</Alert>
	//   <Alert severity="success">This is a success message!</Alert> */}

	return (
		<Snackbar
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			open={open}
			autoHideDuration={2500}
			onClose={handleClose}>
			<Alert
				onClose={handleClose}
				severity={severity}
				sx={{
					width: '100%',
					'& .MuiAlert-icon': {
						color: 'white'
					},
					
				}}>
				{message}
			</Alert>
		</Snackbar>
	);
});

export default CustomizedAlertBar;
