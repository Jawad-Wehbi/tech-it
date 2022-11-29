import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Toolbar,
	AppBar,
	IconButton,
	Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Colors } from '../../values/colors';
import TestTopicPaper from './RadioButtonPaper';
import { useNavigate } from 'react-router-dom';

const TopicDialog = forwardRef((props, ref) => {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [topics, setTopics] = useState([]);

	useImperativeHandle(ref, () => ({
		handleClickOpen(newState) {
			setOpen(newState);
		}
	}));

	const handleUpdateTopics = (item) => {
		setTopics((current) => [...current, item]);
	};

	const handleClose = (event, reason) => {
		// if (reason === 'backdropClick') return;
		setOpen(false);
	};

	const handleSubmit = () => {
		navigate('/Questions', { state: { params: topics } });
	};

	useEffect(() => {
		console.log('topics :>> ', topics);
	}, [topics]);

	return (
		<React.Fragment>
			<Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
				<AppBar sx={{ position: 'relative', bgcolor: Colors.purple }}>
					<Toolbar>
						<IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
							<CloseIcon />
						</IconButton>
						<DialogTitle>Topics</DialogTitle>
					</Toolbar>
				</AppBar>

				<DialogContent>
					{/* <DialogContentText>
						You can set my maximum width and whether to adapt or not.
					</DialogContentText> */}
					<Box
						noValidate
						component="form"
						fullWidth={false}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							m: 'auto'
						}}>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={4}>
								<TestTopicPaper title="Python" updateTopics={handleUpdateTopics} />
							</Grid>
							<Grid item xs={12} sm={4}>
								<TestTopicPaper title="Data Structures" updateTopics={handleUpdateTopics} />
							</Grid>
							<Grid item xs={12} sm={4}>
								<TestTopicPaper title="C" updateTopics={handleUpdateTopics} />
							</Grid>
							<Grid item xs={12} sm={4}>
								<TestTopicPaper title="JAVA" updateTopics={handleUpdateTopics} />
							</Grid>
							<Grid item xs={12} sm={4}>
								<TestTopicPaper title="JavaScript" updateTopics={handleUpdateTopics} />
							</Grid>
							<Grid item xs={12} sm={4}>
								<TestTopicPaper title="SQL" updateTopics={handleUpdateTopics} />
							</Grid>
							<Grid item xs={12} sm={4}>
								<TestTopicPaper title="Databases" updateTopics={handleUpdateTopics} />
							</Grid>
							<Grid item xs={12} sm={4}>
								<TestTopicPaper title="C#" updateTopics={handleUpdateTopics} />
							</Grid>
							<Grid item xs={12} sm={4}>
								<TestTopicPaper title="PHP" updateTopics={handleUpdateTopics} />
							</Grid>
							<Grid item xs={12} sm={4} sx={{ ml: 22 }}>
								<TestTopicPaper title="Algorithms" updateTopics={handleUpdateTopics} />
							</Grid>
							<Grid item xs={12} sm={4}>
								<TestTopicPaper title="Ruby" updateTopics={handleUpdateTopics} />
							</Grid>

							<Grid item xs={12} sm={12}>
								<Box display="flex" justifyContent="center" alignContent="center">
									<Button
										variant="contained"
										style={{ width: 300, height: 40 }}
										sx={{ bgcolor: '#9747FF' }}
										onClick={handleSubmit}>
										Submit
									</Button>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</DialogContent>
			</Dialog>
		</React.Fragment>
	);
});

export default TopicDialog;
