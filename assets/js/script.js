let randomCharacter, currentQuestionIndex;
let currentScore = 0;
let finalScore = 0;
const optionsContainer = document.getElementById( 'answer-options' );
const usersScore = document.getElementById( 'users-score' );
const overlayHowToPlay = document.getElementById( 'overlay-how-to-play' );


/**
 * Control over home overlay
 * once the dom is loaded
 * user can click the begin button to hide overlay home
 * function gameEntryButons gives the user control of the game start and info.
 */
document.addEventListener( "DOMContentLoaded", () => {
	let begin = document.getElementById( 'begin' );
	begin.addEventListener( 'click', () => {
		let overlayHome = document.getElementById( 'overlay-home' );
		overlayHome.classList.add( 'hide' );
		document.getElementById( 'entry-controls-container' ).classList.remove( 'hide' );
		document.getElementById( 'player-name' ).focus();
	} );
	//NOTE: gameEntry Function called
	gameEntryButtons();
	document.getElementById( 'start-game' ).addEventListener( 'click', startQuiz );
	document.getElementById( 'nextBtn' ).addEventListener( 'click', function() {
		currentQuestionIndex++;
		setNextCharacter();
	} );
	document.getElementById( 'start-again' ).addEventListener( 'click', playAgainOption );
	document.getElementById( 'landHomeBtn' ).addEventListener( 'click', resetGameToEntry );
	document.getElementById( 'homeBtn' ).addEventListener( 'click', resetGame );
	document.getElementById( 'submitBtn' ).addEventListener( 'click', usersResults );
	document.getElementById( 'close-users-score' ).addEventListener( 'click', closeScoreResults );
} );


/**
 * event listeners on buttons for the quiz includes:
 * 1.Button to open "How To Play.
 * 3.Buttons to close "How To Play".
 */
function gameEntryButtons() {
	//Variable for all buttons: start-quiz, how to play controls
	let btns = document.getElementsByTagName( 'button' );
	for ( let btn of btns ) {
		btn.addEventListener( 'click', function() {
			if ( this.getAttribute( 'id' ) === 'howToPlay' ) {
				overlayHowToPlay.classList.remove( 'hide' );
			} else if ( this.getAttribute( 'id' ) === 'close-HowTo-btn' ) {
				overlayHowToPlay.classList.add( 'hide' );
			} else if ( this.getAttribute( 'id' ) === 'submitBtn' ) {
				document.getElementById( 'entry-controls-container' ).classList.add( 'hide' );
				document.getElementById( 'game-container' ).classList.add( 'hide' );
			}
		} );
	}
}


/**
 * random array function
 * resuffles an array items order every time it is called
 * you can pass any array as the argument
 */
function randomArray( arr ) {
	//below resuffles the order of the arrays items
	const randomArrItem = arr.sort( () => Math.random() - .5 );
	return randomArrItem;
}


/**
 * function start quiz
 * Checks user's input has a value.
 * setNextCharacter function is called.
 */
function startQuiz( level ) {
	const playerName = document.getElementById( 'player-name' );
	if ( playerName.value === "" ) {
		alert( 'You need to enter your name first!' );
	} else {
		if ( playerName.value !== "" ) {
			document.getElementById( 'game-container' ).classList.remove( 'hide' );
			document.getElementById( 'entry-controls-container' ).classList.add( 'hide' );
		}
	}
	level = matrixCharacters;
	randomCharacter = randomArray( level );
	currentQuestionIndex = 0;
	setNextCharacter();
}


/**
 * setNextCharacter Function
 * Calls displayCharacterOptions function
 * and passes in the array and it's current index as the argument
 */
function setNextCharacter() {
	resetButton();
	displayCharacterOptions( randomCharacter[ currentQuestionIndex ] );
}


/**
 * show options and character image function
 * Uses template literals to add:
 * 1 .Image of character.
 * 2. Options/answers to who the character is.
 */
function displayCharacterOptions( option ) {
	let ulHTML = `<ul>`;
	option.answers.forEach( answer => {
		let li = answer.options;
		ulHTML += `${li}`;
	} );
	ulHTML += `</ul>`;
	document.getElementById( 'character-image' ).innerHTML = option.pic;
	document.getElementById( 'answer-options' ).innerHTML = ulHTML;
	optionsContainer.addEventListener( 'click', catchAnswers );
}


/**
 * catch players answers
 * pushes character images to an array.
 * seperates correct character images
 * seperates wrong character images
 */
//NOTE: Global Arrays
let imagesOfusersQuestionsCorrect = [];
let imagesOfusersQuestionsWrong = [];

function catchAnswers( evt ) {
	const selectedBtn = evt.target;
	const nextBtn = document.getElementById( 'nextBtn' );
	const submitBtn = document.getElementById( 'submitBtn' );
	let radioBtn = selectedBtn;
	const rightWholeKit = randomCharacter[ currentQuestionIndex ];
	const wrongWholeKit = randomCharacter[ currentQuestionIndex ];
	if ( radioBtn.tagName === 'INPUT' ) {
		let input = radioBtn;
		if ( input.classList.contains( 'correct' ) ) {
			currentScore += 10;
			let correctImage = rightWholeKit.pic;
			imagesOfusersQuestionsCorrect.push( correctImage );
		} else if ( radioBtn.tagName === 'INPUT' ) {
			if ( input.classList.contains( 'wrong' ) ) {
				let wrongImage = wrongWholeKit.pic;
				imagesOfusersQuestionsWrong.push( wrongImage );
			}
		}
		finalScore = currentScore;
	}
	if ( randomCharacter.length > currentQuestionIndex + 1 ) {
		nextBtn.classList.remove( 'hide' );
	} else {
		submitBtn.classList.remove( 'hide' );
	}
}


/**
 * toggles nextBtn hide class on
 */
function resetButton() {
	const nextBtn = document.getElementById( 'nextBtn' );
	nextBtn.classList.add( 'hide' );
}


/**
 * display users results.
 * if it's over 180 score they get a diffirent congrats message.
 * if under 180 different congrats message.
 * all players gets 2 ul displayed.
 * 1 ul for images of correct characters.
 * 1 ul for the wrong characters.
 */
function usersResults() {
	if ( finalScore > 180 ) {
		document.getElementById( 'high-score' ).classList.remove( 'hide' );
		document.getElementById( 'users-score' ).classList.remove( 'hide' );
		document.getElementById( 'high-score-user' ).innerHTML = finalScore;
		if ( imagesOfusersQuestionsCorrect.length !== 0 ) {
			let correctHighLiHTML = ``;
			for ( let i of imagesOfusersQuestionsCorrect ) {
				correctHighLiHTML += `<li>${i}</li>`;
			}
			document.getElementById( 'charactersKnownHigh' ).classList.remove( 'hide' );
			document.getElementById( 'knownUlHigh' ).innerHTML = correctHighLiHTML;
		}
		if ( imagesOfusersQuestionsWrong.length !== 0 ) {
			let wrongHighLiHTML = ``;
			for ( let i of imagesOfusersQuestionsWrong ) {
				wrongHighLiHTML += `<li>${i}</li>`;
			}
			document.getElementById( 'charactersUnknownHigh' ).classList.remove( 'hide' );
			document.getElementById( 'unknownUlHigh' ).innerHTML = wrongHighLiHTML;
		}
	}
	if ( finalScore < 180 ) {
		document.getElementById( 'low-score' ).classList.remove( 'hide' );
		document.getElementById( 'users-score' ).classList.remove( 'hide' );
		document.getElementById( 'low-score-user' ).innerHTML = finalScore;
		if ( imagesOfusersQuestionsCorrect.length !== 0 ) {
			let lowCorrectLiHTML = ``;
			for ( let i of imagesOfusersQuestionsCorrect ) {
				lowCorrectLiHTML += `<li>${i}</li>`;
				console.log( lowCorrectLiHTML );
			}
			document.getElementById( 'charactersKnownLow' ).classList.remove( 'hide' );
			document.getElementById( 'knownUlLow' ).innerHTML = lowCorrectLiHTML;
		}
		if ( imagesOfusersQuestionsWrong.length !== 0 ) {
			let wrongLowLiHTML = ``;
			for ( let i of imagesOfusersQuestionsWrong ) {
				wrongLowLiHTML += `<li>${i}</li>`;
				console.log( wrongLowLiHTML );
			}
			document.getElementById( 'charactersUnknownLow' ).classList.remove( 'hide' );
			document.getElementById( 'unknownUlLow' ).innerHTML = wrongLowLiHTML;
		}
		document.getElementById( 'entry-controls-container' ).classList.add( 'hide' );
		document.getElementById( 'game-container' ).classList.add( 'hide' );
	}
}


/**
 * complete reset game
 * resets everything so player name can change
 */
function resetGame() {
	document.getElementById( 'player-name' ).value = "";
	document.getElementById( 'player-name' ).focus();
	const radioBtns = document.querySelectorAll( 'input[name="character"]' );
	for ( let btn of radioBtns ) {
		if ( btn.checked === true ) {
			btn.checked = false;
		}
	}
	document.getElementById( 'submitBtn' ).classList.add( 'hide' );
	currentScore = 0;
	currentQuestionIndex = 0;
	document.getElementById( 'game-container' ).classList.add( 'hide' );
	document.getElementById( 'entry-controls-container' ).classList.remove( 'hide' );
	document.getElementById( 'overlayPlayAgain' ).classList.add( 'hide' );
	imagesOfusersQuestionsCorrect = [];
	imagesOfusersQuestionsWrong = [];
}


/**
 * reset game
 * rest sets back to the entry options.
 * which is how to play and players input.
 * will still have previous players name in the input
 */
function resetGameToEntry() {
	const radioBtns = document.querySelectorAll( 'input[name="character"]' );
	for ( let btn of radioBtns ) {
		if ( btn.checked === true ) {
			btn.checked = false;
		}
	}
	document.getElementById( 'submitBtn' ).classList.add( 'hide' );
	currentScore = 0;
	currentQuestionIndex = 0;
	document.getElementById( 'game-container' ).classList.add( 'hide' );
	document.getElementById( 'entry-controls-container' ).classList.remove( 'hide' );
	document.getElementById( 'overlayPlayAgain' ).classList.add( 'hide' );
	imagesOfusersQuestionsCorrect = [];
	imagesOfusersQuestionsWrong = [];
}


/**
 * closes the users score results
 */
function closeScoreResults() {
	usersScore.classList.add( 'hide' );
	document.getElementById( 'overlayPlayAgain' ).classList.remove( 'hide' );
}


/**
 * options to play again
 * option play again
 * or go back to entry point with everything reset
 */
function playAgainOption() {
	resetGame();
}