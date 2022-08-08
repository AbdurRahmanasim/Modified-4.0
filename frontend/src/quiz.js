import React, { useEffect, useState } from 'react'
import "./quiz.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'










function Quiz() {
	const navigate = useNavigate()


	const questions = [
		{
			questionText: '____ method is used to fetch a JSON Data?',
			answerOptions: [
				{ answerText: '.json()', isCorrect: true },
				{ answerText: '.JSON()', isCorrect: false },
				{ answerText: '.text()', isCorrect: false },
				{ answerText: 'None', isCorrect: false },
			],
		},
		{
			questionText: 'We can only send ___ Data to local Storage',
			answerOptions: [
				{ answerText: 'String', isCorrect: true },
				{ answerText: 'Object', isCorrect: false },
				{ answerText: 'Array', isCorrect: false },
				{ answerText: 'Number', isCorrect: false },
			],
		},
		{
			questionText: 'ES stands for?',
			answerOptions: [
				{ answerText: 'Electronic System', isCorrect: false },
				{ answerText: 'Engineering Science', isCorrect: false },
				{ answerText: 'ECMA Script', isCorrect: true },
				{ answerText: 'Enviroment Study', isCorrect: false },
			],
		},
		{
			questionText: 'let and const were introduced in ____ version of JS',
			answerOptions: [
				{ answerText: 'ES5', isCorrect: false },
				{ answerText: 'ES3', isCorrect: false },
				{ answerText: 'ES6', isCorrect: true },
				{ answerText: 'ES4', isCorrect: false },
			],
		},{
			questionText: 'To store a value bigger than 9007199254740991 we use.',
			answerOptions: [
				{ answerText: 'number', isCorrect: false },
				{ answerText: 'BigInt', isCorrect: true },
				{ answerText: 'Symbol', isCorrect: false },
				{ answerText: 'String', isCorrect: false },
			],
		},
		{
			questionText: 'To fetch a text we use ____ method',
			answerOptions: [
				{ answerText: '.text()', isCorrect: true },
				{ answerText: '.txt()', isCorrect: false },
				{ answerText: '.json()', isCorrect: false },
				{ answerText: 'None', isCorrect: false },
			],
		},
		{
			questionText: 'Which variable cannot be redeclared?',
			answerOptions: [
				{ answerText: 'var', isCorrect: false },
				{ answerText: 'let', isCorrect: false },
				{ answerText: 'const', isCorrect: false },
				{ answerText: 'let and const', isCorrect: true },
			],
		},
		{
			questionText: 'Hoisting applies only on  ___ variable',
			answerOptions: [
				{ answerText: 'var', isCorrect: true },
				{ answerText: 'let', isCorrect: false },
				{ answerText: 'const', isCorrect: false },
				{ answerText: 'All', isCorrect: false },
			],
		},
		{
			questionText: 'In JS why we use ** ?',
			answerOptions: [
				{ answerText: 'multiply', isCorrect: false },
				{ answerText: 'remainder', isCorrect: false },
				{ answerText: 'power', isCorrect: true },
				{ answerText: 'increment', isCorrect: false },
			],
		},
		
		{
			questionText: 'To create a symbol data, we use',
			answerOptions: [
				{ answerText: 'Symbol()', isCorrect: true },
				{ answerText: 'sym()', isCorrect: false },
				{ answerText: 'symbol{}', isCorrect: false },
				{ answerText: 'None', isCorrect: false },
			],
		},
		{
			questionText: 'we use "use strict" to apply ___ in JS',
			answerOptions: [
				{ answerText: 'strict mode', isCorrect: true },
				{ answerText: 'normal mode', isCorrect: false },
				{ answerText: 'All', isCorrect: false },
				
			],
		},
		{
			questionText: 'JavaScript is',
			answerOptions: [
				{ answerText: 'asynchronous', isCorrect: false },
				{ answerText: 'synchronous', isCorrect: true },
		
			],
		},
		{
			questionText: 'Syntax of ternary operator is',
			answerOptions: [
				{ answerText: 'condition ? False : True', isCorrect: false },
				{ answerText: 'condition ? True : False', isCorrect: true },
				
			],
		},
		{
			questionText: "______ is used to call a variable inside a String",
			answerOptions: [
				{ answerText: 'quotations', isCorrect: false },
				{ answerText: 'backsticks', isCorrect: true },
				{ answerText: 'parenthesis', isCorrect: false },
				{ answerText: 'All', isCorrect: false },
			],
		},
		{
			questionText: 'const foo = () =>{} this function is called',
			answerOptions: [
				{ answerText: 'Fat arrow', isCorrect: true },
				{ answerText: 'callback', isCorrect: false },
				{ answerText: 'constructor', isCorrect: false },
				{ answerText: 'anonymouys', isCorrect: false },
			],
		},
		{
			questionText: 'We dont need to call ____ Function',
			answerOptions: [
				{ answerText: 'CallBack', isCorrect: false },
				{ answerText: 'Anonymous', isCorrect: false },
				{ answerText: 'Both', isCorrect: true },
				
			],
		},
		{
			questionText: 'Destructuring is used to unpack values from _____',
			answerOptions: [
				{ answerText: 'array', isCorrect: false },
				{ answerText: 'object', isCorrect: false },
				{ answerText: 'Both', isCorrect: true },
				{ answerText: 'None', isCorrect: false },
			],
		},
		{
			questionText: 'Symbol value is always',
			answerOptions: [
				{ answerText: 'unique', isCorrect: true },
				{ answerText: 'new', isCorrect: false },
				{ answerText: 'small', isCorrect: false },
				{ answerText: 'big', isCorrect: false },
			],
		},
		{
			questionText: 'Filter is a method of ____',
			answerOptions: [
				{ answerText: 'Object', isCorrect: false },
				{ answerText: 'Symbol', isCorrect: false },
				{ answerText: 'String', isCorrect: false },
				{ answerText: 'None', isCorrect: true },
			],
		},
		{
			questionText: 'To use Modules we need?',
			answerOptions: [
				{ answerText: 'Mobile', isCorrect: false },
				{ answerText: 'Live Server', isCorrect: true },
				{ answerText: 'Both', isCorrect: false },
				{ answerText: 'None', isCorrect: false },
			],
		},
		{
			questionText: 'We use try and catch for',
			answerOptions: [
				{ answerText: 'Hoisting', isCorrect: false },
				{ answerText: 'Array', isCorrect: false },
				{ answerText: 'looping', isCorrect: false },
				{ answerText: 'error handling', isCorrect: true },
			],
		},
		{
			questionText: 'we use ... in _____ operator',
			answerOptions: [
				{ answerText: 'rest', isCorrect: false },
				{ answerText: 'spread', isCorrect: false },
				{ answerText: 'both', isCorrect: true },
				{ answerText: 'Null', isCorrect: false },
			],
		},
		{
			questionText: "Local Storage data expires",
			answerOptions: [
				{ answerText: 'yes', isCorrect: false },
				{ answerText: 'no', isCorrect: true },

			],
		},
		{
			questionText: 'data in sessionStorage is cleared when the page session ends',
			answerOptions: [
				{ answerText: 'true', isCorrect: true },
				{ answerText: 'false', isCorrect: false },
			
			],
		},
		{
			questionText: 'A class is created using ____ keyword in JS?',
			answerOptions: [
				{ answerText: 'class', isCorrect: true },
				{ answerText: 'Class', isCorrect: false },
				{ answerText: 'break', isCorrect: false },
				{ answerText: 'flag', isCorrect: false },
			],
		},{
			questionText: 'Is JavaScript Case Sensitive',
			answerOptions: [
				{ answerText: 'yes', isCorrect: true },
				{ answerText: 'no', isCorrect: false },
			],
		},
		{
			questionText: 'a class can inherit all the methods and properties of another class using?',
			answerOptions: [
				{ answerText: 'class inheritance', isCorrect: true },
				{ answerText: 'lexical scoping', isCorrect: false },
				{ answerText: 'for in', isCorrect: false },
				{ answerText: 'map', isCorrect: false },
			],
		},
		{
			questionText: 'When we get data from local storage we use',
			answerOptions: [
				{ answerText: 'localStorage.getItem()', isCorrect: true },
				{ answerText: 'localStorage.get()', isCorrect: false },
				{ answerText: 'localStorage.item()', isCorrect: false },
				
			],
		},
		{
			questionText: 'to send a non-string data to local storage we use',
			answerOptions: [
				{ answerText: 'JSON.string()', isCorrect: false },
				{ answerText: 'JSON.stringify()', isCorrect: true },
				{ answerText: 'json.string()', isCorrect: false },
				
			],
		},
		{
			questionText: 'we can swap values of 2 variables x and y by using?',
			answerOptions: [
				{ answerText: '[x,y]=[y,x]', isCorrect: true },
				{ answerText: '[x,y]=[x,y]', isCorrect: false }				
			],
		},
		
		
		
	];
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [key, setKey] = useState(0);
	// const [timer , setTimer] = useState(40)
	const [toggle, setToggle] = useState(false)
	const [refer, setrefer] = useState(false)
	// const [time , setTime] =useState(0)
	// const [remainingTimes , setRemainingTimes] = useState(0)
	// const [load , setload] = useState(false)
// console.log(remainingTimes)
	// var time ;

	// console.log(currentQuestion, "Current")
	// console.log(questions.length, "Length")

// console.log(key)



	let details = JSON.parse(localStorage.getItem("QuizRegisteration"))




	// const {
	// 	path,
	// 	pathLength,
	// 	stroke,
	// 	strokeDashoffset,
	// 	remainingTime,
	// 	elapsedTime,
	// 	size,
	// 	strokeWidth,
	//   } = useCountdown({ isPlaying: true,  duration: 10, colors: '#abc' })








	const handleAnswerOptionClick = (isCorrect) => {
		// remainingTime = 30
		// setload(true)
		setrefer(true)

		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setKey(prevKey => prevKey+1)
			setCurrentQuestion(nextQuestion);

		} else {
			setShowScore(true);
			setToggle(true)




			setTimeout(() => {
				localStorage.removeItem('refer')

				localStorage.removeItem("QuizRegisteration")

				navigate("/")


			}, 2000)
		}
	};

	if (refer) {

		let referesh = {

			currentQuestion,
			score

		}

		localStorage.setItem("refer", JSON.stringify(referesh))

	}



	let updatedDate = {

		userName: details.userName,
		email: details.email,
		quizScore: score,

	}
	// console.log(updatedDate)

	const updateData = () => {



		// console.log(updatedDate)

		axios.post("https://quiz-by-ar.herokuapp.com/update", updatedDate)
			.then((res) => {

				// console.log(res.data)



			})

			.catch((err) => {
				console.log(err)

			})



	}



	if (toggle) {
		updateData()
	}





	useEffect(() => {

	

       
		let referData = JSON.parse(localStorage.getItem("refer"))
		// console.log(referData)
		if (!referData) {
			setCurrentQuestion(0)
			setScore(0)
		}
		else {
			setCurrentQuestion(referData.currentQuestion)
			setScore(referData.score)

		}


   


	}, [])





	// const libraryTime = ({ seconds ,completed }) => {
	// 	if (completed) {
	// 	  // Render a completed state
	// 	  handleAnswerOptionClick(false)
	// 	  completed = false
	// 	  ;
	// 	} else {
	// 	  // Render a countdown
	// 	  return seconds;
	// 	}
	//   };



	


	// console.log(path , "PAth")
	// console.log(remainingTime , "reaminign time")
	// console.log(pathLength , "pathLength")
	// console.log(stroke , "stroke")
	// console.log(strokeDashoffset , "strokeDashoffset")
	// console.log(elapsedTime , "elapsedTime")
	// console.log(size , "size")
	// console.log(strokeWidth , "strokeWidth")

// const renderTime = ({remainingTime}) =>{

// setRemainingTimes(remainingTime)
// return (remainingTimes)


// }



	// const updateTimer = () =>{

	// localStorage.setItem("TImer" , JSON.stringify(remainingTime))


	// }


	return (

		<>


			<section className="section">
				<div className="box">
					<div className="form">
						{showScore ? (
							<>
								<h1 className="inputbx">
									Hey, {details.userName}
								</h1>
								<h1 className="inputbx">
									{/* You scored {score} out of {questions.length} */}
								SuccessFully Submitted
									
								</h1>
							</>
						) : (
							details ? (
								<>
									<h2 className='heading'>
										JS QUIZ
									</h2>
									<div className="jkey">
											<CountdownCircleTimer
												isPlaying={true}
												duration={40}
												key={key}
												colors={['#004777', '#F7B801', '#A30000', '#A30000']}
												colorsTime={[7, 5, 2, 0]}
												size={70} 
												
												 onUpdate={(e)=>{
												
												localStorage.setItem("timerData" , JSON.stringify(e) )
												
												 }}

												 

												onComplete={
													() => {
														handleAnswerOptionClick(false)
														return (
															{ shouldRepeat: true, delay: 0 }
														)
													} 
													


												} >
                                                {/* {renderTime} */}
												
												{/* {({ remainingTime }) =>{
													setTime(remainingTime)
													return(time)

												} } */}

												{({ remainingTime }) => remainingTime}
												{/* {renderTime} */}
											</CountdownCircleTimer>
</div>
										

									<div className="inputbx">
										<div className='question-count'>
											<h3>Q{currentQuestion + 1}/{questions.length})  {questions[currentQuestion].questionText}
											</h3>
										</div>

									</div>
									<div className="inputbx">
										{questions[currentQuestion].answerOptions.map((answerOption, ind) => (

											<button key={ind} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
										))}

									</div>

								</>
							) : (
								<div className="inputbx">
									<h1>Register First</h1>
								</div>
							)

						)}
					</div>
				</div>
			</section>



		</>


	)
}

export default Quiz