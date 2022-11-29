import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Switch, CircularProgress } from '@mui/material';
import { post } from '../../api/services';

const AssignTestDialog = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);
	const [loading, set_loading] = useState(false);

	useImperativeHandle(ref, () => ({
		handleClickOpen(newState) {
			setOpen(newState);
		}
	}));

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const urlParams = { resource: 'clinic', action: 'getLicenseTypes' };
	// 		const data = await post(urlParams);

	//         set_loading(true)
	// 	};
	// 	if (!loaded) fetchData().catch(console.error);
	// }, [licence_types, loading]);

	return loading ? (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				height: '100%',
				width: '100%'
			}}>
			<CircularProgress />
		</Box>
	) : (
		<React.Fragment>
			<Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
				<DialogTitle>Optional sizes</DialogTitle>
				<DialogContent>
					<DialogContentText>
						You can set my maximum width and whether to adapt or not.
					</DialogContentText>
					<Box
						noValidate
						component="form"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							m: 'auto',
							width: 'fit-content'
						}}>
						<FormControl sx={{ mt: 2, minWidth: 120 }}>
							<InputLabel htmlFor="max-width">maxWidth</InputLabel>
							<Select
								autoFocus
								value={'maxWidth'}
								onChange={''}
								label="maxWidth"
								inputProps={{
									name: 'max-width',
									id: 'max-width'
								}}>
								{}
								<MenuItem value={false}>false</MenuItem>
								<MenuItem value="xs">xs</MenuItem>
								<MenuItem value="sm">sm</MenuItem>
								<MenuItem value="md">md</MenuItem>
								<MenuItem value="lg">lg</MenuItem>
								<MenuItem value="xl">xl</MenuItem>
							</Select>
						</FormControl>
						<FormControlLabel
							sx={{ mt: 1 }}
							control={<Switch checked={'fullWidth'} onChange={'handleFullWidthChange'} />}
							label="Full width"
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
});

export default AssignTestDialog;
