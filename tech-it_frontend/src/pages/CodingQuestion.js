import { Box, Container, Grid, IconButton } from '@mui/material';
import React, { useState } from 'react';
import ContinueButton from '../components/Utilities/Button';
import Header from '../components/QuestionsUtilities/Header';
import OutputPanel from '../components/CondingQuestion/OutputPanel';
import QuestionDetailsPanel from '../components/CondingQuestion/QuestionDetailsPanel';
import SolutionPanel from '../components/CondingQuestion/SolutionPanel';
import AceEditor from 'react-ace';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import axios from 'axios';

const CodingQuestion = (props) => {
	const { question } = props;
	const [code, setCode] = useState(``);

	function onChange(newValue) {
		setCode(`${newValue}`);
		console.log('change', newValue);
	}

	const submitCode = () => {
		// setTimeout(() => {}, 500);
		const options = {
			method: 'POST',
			url: 'https://judge0-ce.p.rapidapi.com/submissions',
			params: { base64_encoded: 'true', fields: '*' },
			headers: {
				'content-type': 'application/json',
				'Content-Type': 'application/json',
				'X-RapidAPI-Key': 'd613455b15mshaef4813be67b739p17dacbjsnb05aa0078f36',
				'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
			},
			data: `{"language_id":63,"source_code":${code},"stdin":"SnVkZ2Uw"}`
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	return (
		<Container disableGutters>
			<Box display="flex" flexDirection="column">
				<Grid container>
					<Grid item xs={12} md={10}>
						<QuestionDetailsPanel
							TestTitle={question.question_title}
							TestDetails={question.question_details}
						/>
					</Grid>
					<Grid item xs={12} md={2}>
						<Container>
							<Box>
								<IconButton aria-label="play" color="success" onClick={submitCode}>
									<PlayArrowOutlinedIcon fontSize="large" />
								</IconButton>
							</Box>
						</Container>
					</Grid>
					<Grid container item spacing={1}>
						<Grid item xs={12} md={6}>
							<AceEditor
								placeholder="Type your code here!"
								mode="javascript"
								theme="solarized_dark"
								fontSize={18}
								onChange={onChange}
								name="UNIQUE_ID_OF_DIV"
								editorProps={{ $blockScrolling: true }}
								width="100%"
								height="100%"
								setOptions={{
									enableBasicAutocompletion: true,
									enableLiveAutocompletion: true,
									enableSnippets: true,
									showLineNumbers: true,
									tabSize: 2
								}}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<OutputPanel />
							{/* <Box display="flex" justifyContent="center">
								<ContinueButton NextOrSubmit="Submit" />
							</Box> */}
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default CodingQuestion;
