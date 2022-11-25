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
	TextField,
	Select,
	FormControl,
	MenuItem,
	InputLabel,
	OutlinedInput
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Colors } from '../../values/colors';
import { useNavigate } from 'react-router-dom';
import { post } from '../../api/services';
import CustomizedAlertBar from '../Utilities/customAlertBar';
import Table from './Table';
const AddMemberForm = forwardRef((props, ref) => {
	const { addMember } = props;

	const tableRefreshRef = useRef(null);

	const navigate = useNavigate();

	const tableRef = useRef(null);
	const alertRef = useRef(null);

	const [open, setOpen] = useState(false);
	const [topics, setTopics] = useState([]);

	const [assigneeType, setAssigneeType] = useState('');
	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	const [email, setEmail] = useState('');

	useImperativeHandle(ref, () => ({
		handleClickOpen(newState) {
			setOpen(newState);
		}
	}));

	const handleClose = (event, reason) => {
		// if (reason === 'backdropClick') return;
		setOpen(false);
	};

	const handleSubmit = () => {
		// navigate('/Questions', { state: { params: topics } });
		console.log('handleSubmit :>> ');
		tableRef.current.addMember({
			id: 7,
			user_type: 'SQL',
			position: 'developer',
			name: 'jawad',
			email: 'jawad@gmail.com'
		});
	};

	useEffect(() => {
		console.log('topics :>> ', topics);
		console.log('assigneeType :>> ', assigneeType);
		console.log('name :>> ', name);
	}, [topics, name, assigneeType]);

	const onSubmit = async () => {
		// const member = { name, email, position, assigneeType };
		// addMember(member);
		try {
			const data = {
				name,
				email,
				position,
				assignee_type: assigneeType,
				password: '',
				user_type: 'ASSIGNEE',
				company_id: 1
			};
			const urlParams = { resource: 'company', action: 'addTeamMember' };
			const response = await post(urlParams, data);
			console.log(response);
			if (response.status === 200 || response.status === 201)
				alertRef.current.handleClick({
					message: response.message,
					severity: 'info'
				});
		} catch (err) {
			alertRef.current.handleClick({
				message: err !== '' ? err.toString().split(':')[1].toUpperCase() : 'Failed',
				severity: 'error'
			});
		}
	};

	return (
		<React.Fragment>
			{false && <Table ref={tableRefreshRef} />}
			<CustomizedAlertBar ref={alertRef} />

			<Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
				<AppBar sx={{ position: 'relative', bgcolor: Colors.purple }}>
					<Toolbar>
						<IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
							<CloseIcon />
						</IconButton>
						<DialogTitle>Add Member</DialogTitle>
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
							<Grid container spacing={3}>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										id="name"
										name="name"
										label="Name"
										fullWidth
										variant="outlined"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<FormControl fullWidth>
										<InputLabel htmlFor="Assignee Type">Assignee Type</InputLabel>
										<Select
											id="assignee-type"
											name="assignee-type"
											input={<OutlinedInput label="Licence Type" />}
											fullWidth
											variant="outlined"
											value={assigneeType}
											onChange={(e) => {
												setAssigneeType(e.target.value);
											}}>
											{['EMPLOYEE', 'APPLICANT'].map((option, index) => (
												<MenuItem key={index} value={option}>
													{option}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										id="email"
										name="email"
										label="Email"
										fullWidth
										variant="outlined"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										id="position"
										name="position"
										label="Position"
										fullWidth
										variant="outlined"
										value={position}
										onChange={(e) => setPosition(e.target.value)}
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

export default AddMemberForm;
