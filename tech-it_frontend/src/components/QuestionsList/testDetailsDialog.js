import React, { forwardRef, useRef, useImperativeHandle, useState, useEffect } from 'react';
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Toolbar,
	AppBar,
	IconButton,
	Grid,
	TextField
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Colors } from '../../values/colors';
import { useNavigate } from 'react-router-dom';
import CustomizedAlertBar from '../Utilities/customAlertBar';

const TestDetailsDialog = forwardRef((props, ref) => {
	const navigate = useNavigate();

	const alertRef = useRef(null);

	const [open, setOpen] = useState(false);

	const [title, setTitle] = useState('');
	const [details, setDetails] = useState('');

	useImperativeHandle(ref, () => ({
		handleClickOpen(newState) {
			setOpen(newState);
		}
	}));

	const handleClose = (event, reason) => {
		// if (reason === 'backdropClick') return;
		setOpen(false);
	};

	useEffect(() => {
		console.log('topics :>> ', title);
	}, [title]);

	const onSubmit = async () => {
		navigate('/TeamMembers');
	};

	return (
		<React.Fragment>
			<CustomizedAlertBar ref={alertRef} />

			<Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
				<AppBar sx={{ position: 'relative', bgcolor: Colors.purple }}>
					<Toolbar>
						<IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
							<CloseIcon />
						</IconButton>
						<DialogTitle>Test Details</DialogTitle>
					</Toolbar>
				</AppBar>

				<DialogContent>
					<Box
						noValidate
						component="form"
						fullWidth={false}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							m: 'auto'
						}}>
						<form onSubmit={onSubmit}>
							<Grid container spacing={3} justifyContent="center">
								<Grid item xs={12} sm={10}>
									<TextField
										required
										id="title"
										name="title"
										label="Title"
										fullWidth
										variant="outlined"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</Grid>

								<Grid item xs={12} sm={10}>
									<TextField
										required
										id="details"
										name="details"
										label="Details"
										fullWidth
										variant="outlined"
										value={details}
										multiline
										rows={3}
										onChange={(e) => setDetails(e.target.value)}
									/>
								</Grid>

								<Grid item xs={12} sm={12}>
									<Box display="flex" justifyContent="center" alignContent="center">
										<Button
											variant="contained"
											style={{ width: 300, height: 40 }}
											sx={{ bgcolor: '#9747FF' }}
											onClick={onSubmit}>
											Submit
										</Button>
									</Box>
								</Grid>
							</Grid>
						</form>
					</Box>
				</DialogContent>
				<DialogActions>{/* <Button onClick={handleClose}>Close</Button> */}</DialogActions>
			</Dialog>
		</React.Fragment>
	);
});

export default TestDetailsDialog;
