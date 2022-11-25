import {
	Grid,
	Container,
	Paper,
	Box,
	Stack,
	Toolbar,
	Button,
	Typography,
	Alert
} from '@mui/material';
import React, { useRef, useState } from 'react';
import AddMemberForm from './AddMemberDialog';
import AssignTestDialog from './AssignTestDialog';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';

const Header = (props) => {
	const isCompany = true;

	const { addMember } = props;
	const childRef = useRef(null);
	const addMemberRef = useRef(null);

	const [open, setOpen] = useState(false);
	const [transition, setTransition] = useState(undefined);

	function TransitionRight(props) {
		return <Slide {...props} direction="right" />;
	}

	const handleClick = (Transition) => {
		setTransition(() => Transition);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Container maxWidth={false} disableGutters>
				<Grid container>
					<Grid item xs={12} md={12}>
						<Container maxWidth={false} sx={{ mt: 4 }}>
							<Paper
								variant="outlined"
								sx={{
									bgcolor: '#222222',
									borderRadius: 2,
									boxShadow: 2,
									borderColor: '#5A4AE3'
								}}>
								<Stack
									direction="row"
									spacing={1}
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center'
									}}>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'flex-start'
										}}>
										<Toolbar>
											<Typography variant="h6" align="left" color="#ffffff">
												Team Members
											</Typography>
										</Toolbar>
									</Box>

									<Box spacing={2}>
										<Button
											variant="contained"
											style={{ width: 300, height: 40 }}
											sx={{ mr: 5, bgcolor: '#9747FF' }}
											onClick={() => {
												// childRef.current.handleClickOpen(true);
												console.log('clicked :>> ');
												handleClick(TransitionRight);
											}}>
											Assign Tests
										</Button>
										<AssignTestDialog ref={childRef} />
										<Snackbar
											open={open}
											severity="success"
											onClose={handleClose}
											TransitionComponent={transition}
											message="I love snacks"
											key={transition ? transition.name : ''}>
											<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
												Interesting! Test Assigned
											</Alert>
										</Snackbar>
										{isCompany && (
											<Button
												variant="contained"
												style={{ width: 300, height: 40 }}
												sx={{ mr: 5, bgcolor: '#9747FF' }}
												onClick={() => {
													addMemberRef.current.handleClickOpen(true);
												}}>
												ADD MEMBER
											</Button>
										)}
										<AddMemberForm ref={addMemberRef} addMember={addMember} />
									</Box>
								</Stack>
							</Paper>
						</Container>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Header;
