import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import McqQuestion from '../../pages/McqQuestion';
import CodingQuestion from '../../pages/CodingQuestion';

const QuestionStepper = (props) => {
	const { questions } = props;

	console.log('questions in MAINEXAM :>>', questions);

	let x = 0;

	const max_score = questions.map((item, index) => {
		return (x = x + parseInt(item.question.max_score));
	});

	console.log('max_score :>> ', max_score);
	console.log('x :>> ', x);

	const [activeStep, setActiveStep] = useState(0);
	const [skipped, setSkipped] = useState(new Set());
	const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

	useEffect(() => {
		console.log('currentQuestion :>> ', currentQuestion);
		console.log('activeStep :>> ', activeStep);
	}, [currentQuestion, activeStep]);

	useEffect(() => {
		setCurrentQuestion(questions[activeStep]);
	}, [activeStep]);

	const isStepOptional = (step) => {
		return step === 1;
	};

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ width: '100%', mt: 2 }}>
			<Stepper activeStep={activeStep}>
				{questions.map((data, index) => {
					const stepProps = {};
					const labelProps = {};
					// if (isStepOptional(index)) {
					// 	labelProps.optional = <Typography variant="caption">Optional</Typography>;
					// }
					if (isStepSkipped(index)) {
						stepProps.completed = false;
					}
					return (
						<Step key={data.question_id} {...stepProps}>
							<StepLabel {...labelProps}> {data.question.question_title}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			{activeStep === questions.length ? (
				<React.Fragment>
					<Typography
						sx={{ mt: 10, mb: 3, fontSize: 30, fontWeight: 700, color: 'rgb(90,74,227)' }}>
						Congratulations!
					</Typography>
					<Typography sx={{ mt: 5, mb: 1, fontSize: 20, fontWeight: 400 }}>
						Thank you, for doing this test.
					</Typography>
					<div>
						<Typography sx={{ mt: 5, mb: 1, fontSize: 17, fontWeight: 400 }}>
							“Make it work, make it right, make it fast.” - Kent Beck
						</Typography>
					</div>
					<div className="absolute top-[0px] right-[0px] w-1/2 h-screen overflow-hidden">
						<img
							className="absolute top-[180px] left-[102px] w-[515.51px] h-[664px] object-cover"
							alt=""
							src="../techitlogos-transparent@2x.png"
						/>
					</div>
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Box sx={{ flex: '1 1 auto' }} />
						{/* <Button onClick={handleReset}>Reset</Button> */}
					</Box>
				</React.Fragment>
			) : (
				<React.Fragment>
					<Typography sx={{ mt: 2, mb: 1 }}>
						{currentQuestion?.question?.mcq_answers !== null ? (
							// if mcq question render mcq component
							<McqQuestion question={currentQuestion.question} />
						) : (
							// if mcq question render coding component
							<CodingQuestion question={currentQuestion.question} />
						)}
					</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
							Back
						</Button>
						<Box sx={{ flex: '1 1 auto' }} />

						<Button onClick={handleNext}>
							{activeStep === questions.length - 1 ? 'Submit Test' : 'Next'}
						</Button>
					</Box>
				</React.Fragment>
			)}
		</Box>
	);
};

export default QuestionStepper;
