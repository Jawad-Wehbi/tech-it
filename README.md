<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available. 

**[PROJECT PHILOSOPHY](https://github.com/julescript/well_app#-project-philosophy) • [WIREFRAMES](https://github.com/julescript/well_app#-wireframes) • [TECH STACK](https://github.com/julescript/well_app#-tech-stack) • [IMPLEMENTATION](https://github.com/julescript/well_app#-impplementation) • [HOW TO RUN?](https://github.com/julescript/well_app#-how-to-run)**

</div>

<br><br>


<img src="./readme/title2.svg"/>

> Tech-It is your smart way as a company to assess your employees and test the applicants for coding jobs in the new, and higher level aspects in their work. Here we can say no routine during the daily work it's maybe a daiy or a weekly improvement for the employee skills, and in turn for the company progress. 
> 

### Company Stories

- As a Company, I want to find a template test according to the topic I decide, so that I can assess an employee.
- As a Company, I want to choose questions from differnt topics and customize my own test, so that I can test the skills of an applicant for a job.
- As a Company, I want to add my question and answer to my customized test, so that I can quiz them with a specific dilemma.
- As a Company, I want to add my team members as employees or applicants with temporare accounts, so that I can assign them new assesments.

### Employee Stories

- As an Employee, I want to take the skills assessment assigned to me from the company, so that I know my weaknesses and update my skills.

### Applicant Stories

- As an Applicant, I want to take the assigned assessment, so that I can prove my skills to the hiring team in the company.

<br><br>

<img src="./readme/title3.svg"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
 
| Sign-in  | Company Dashboard  |
| -----------------| -----|
| ![Sign-in](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/Sign-in.jpg) | ![Company Dashboard](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/Company%20Dashboard.png) |

| Topics Dialog  | Team Members  |
| -----------------| -----|
| ![Topics Dialog](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/Company%20Tests%20Page.png) | ![Team Members](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/Team%20Members.jpg) |


<br><br>

<img src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses [NodeJS](https://nodejs.org/en/) and [ExpressJS](https://expressjs.com/). Node.js is an open-source, cross-platform JavaScript runtime environment, and express is a fast, unopinionated, minimalist web framework for Node.js.
- This project uses [ReactJs](https://reactjs.org/) for the development of the landing page. React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time.
- For persistent storage (database), the app uses the [Prisma](https://www.prisma.io/) package which allows the app to create a custom storage schema and save it to [MySQL](https://www.mysql.com/).
- Used [Docker](https://docs.docker.com/get-started/overview/) to ensure consistency across development and release cycles
- Moreover, we used [Material-UI-core](https://www.npmjs.com/package/@material-ui/core) is simply a library that allows us to import and use different components to create a user interface in our React applications.
- The app uses the font [Roboto](https://fonts.google.com/specimen/Roboto) as its main font, and the design of the app adheres to the material design guidelines.


<br><br>
<img src="./readme/title5.svg"/>

> Uing the above mentioned tecch stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app

| Sign-in  | Company Dashboard/DarkMode  |
| ----------| ---------|
| ![Sign-in](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/Sign_in.gif) | ![Company Dashboard/DarkMode](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/Dashboard_dark-mode.gif) |

| Topics Dialog  | Add Team Members  |
| ----------| ---------|
| ![TopicsDialog](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/TopicsDialog.gif) | ![Add Team Members](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/AddMember.gif) |

| Assign Test  | Test Details  |
| ----------| ---------|
| ![Assign Test](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/Assign_Test.gif) | ![Test Details](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/TestDetails.gif) |

| Dark Mode  | Questions Selection  |
| ----------| ---------|
| ![Dark Mode](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/Dark_Mode.gif) | ![Questions Selection](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/Questions_selection.gif) |

| MC Question  | Coding Question{IDE}  |
| ----------| ---------|
| ![MC Question](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/Test_MCQ.gif) | ![Test Details](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/Coding_Question_IDE.gif) |

| Test end  |
| -----------------|
| ![Test end (Greeting)](https://github.com/Jawad-Wehbi/tech-it/blob/ReadMe/readme/Test_end.gif) |


<br><br>
<img src="./readme/title6.svg"/>


> This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* Clone the repo
  ```sh
  git clone https://github.com/Jawad-Wehbi/tech-it
  ```
* npm
  ```sh
  npm install npm@latest -g
  ```
* Node.js install [Node.js](https://nodejs.org/en/)

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

#### To Run The React App

1. Navigate to the frontend folder
   ```sh
   cd tech-it_frontend
   ```
2. Run Docker 
   ```js
   docker compose up --build
   ```

#### To Run The Server

1. Navigate to the Backend folder
   ```sh
   cd tech-it_backend
   ```
2. Install NPM packages 
   ```js
   npm install
   ```
3. Go to backend folder create a .env file and paste into it
   ###### DATABASE_URL="mysql://root:admin@127.0.0.1:3306/techit"
   ###### ACCESS_TOKEN_SECRET='sasasas'
   ###### PORT=3000
4. Run the start up command
   ```js
   npm start
   ```

