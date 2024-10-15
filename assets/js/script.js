/**
 * Function to get elements by thier Id
 * 
 */
const elementId = el => document.getElementById(el);

/**Global Variables */
let randomCharacter, currentQuestionIndex;
const optionsContainer = elementId( 'answer-options' );
const imagesOfusersQuestionsCorrect = [];
const imagesOfusersQuestionsWrong = [];
let playersName;
let currentScore = 0;
let finalScore = 0;



/**
 * Control over home overlay
 * once the dom is loaded
 * user can click the begin button to hide overlay home
 * function gameEntryButons gives the user control of the game start and info.
 */
document.addEventListener( "DOMContentLoaded", () => {
	let begin = elementId('begin');
	
	begin.addEventListener( 'click', () => {
		let overlayHome = elementId( 'overlay-home' );
		overlayHome.classList.add( 'hide' );
		elementId( 'entry-controls-container' ).classList.remove( 'hide' );
		elementId( 'player-name' ).focus();
	} );

	gameEntryButtons();
	elementId('start-game').addEventListener('click',startQuiz);
	elementId('nextBtn').addEventListener('click', function(){
		currentQuestionIndex++
		setNextCharacter();
		
	});

	elementId("start-again").addEventListener('click', playAgain );
	
	
});




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
				elementId('overlay-how-to-play').classList.remove( 'hide' );
			} else if ( this.getAttribute( 'id' ) === 'close-HowTo-btn' ) {
				elementId('overlay-how-to-play').classList.add( 'hide' );
			} else if ( this.getAttribute( 'id' ) === 'submitBtn' ) {
				elementId( 'entry-controls-container' ).classList.add( 'hide' );
				elementId( 'game-container' ).classList.add( 'hide' );
			} else if (this.getAttribute('id') === 'close-users-score') {
				elementId('users-score').classList.add('hide');
				elementId('overlayPlayAgain').classList.remove('hide');
			} else if (this.getAttribute('id') === 'landHomeBtn') {
				exitGame();
			}
			  
			
		} );
	}
}


/**
 * random array function
 * resuffles an array items order every time it is called
 * you can pass any array as the argument
 * arr.sort code from the tutorial by Kyle Cook
 * from web dev simplified
 * https://www.youtube.com/watch?v=riDzcEQbX6k
 */
function randomArray( arr ) {
	//below resuffles the order of the arrays items
	const randomArrItem = arr.sort( () => Math.random() - 0.5 );
	return randomArrItem;
}




/**
 * function start quiz
 * Checks user's input has a value.
 * 
 */
function startQuiz(){
	playAgain();
	elementId('player-name').focus();
	if (  elementId('player-name').value === "" ) {
		elementId('alert-name').classList.remove('hide');
		elementId("start-game").disabled = true;
		elementId('game-container').classList.add('hide')
		const alertBoxClose = elementId('close-alert-btn');
		alertBoxClose.addEventListener('click', ()=>{ 
			elementId('alert-name').classList.add('hide');
			elementId("start-game").disabled = false;
			
		});

	} else {
		if (  elementId('player-name').value !== "" ) {
			playersName = elementId('player-name').value 
			document.getElementById( 'game-container' ).classList.remove( 'hide' );
			document.getElementById( 'entry-controls-container' ).classList.add( 'hide' );
		}
	}
 
  randomCharacter = randomArray(matrixCharacters);
  currentQuestionIndex = 0;
  setNextCharacter();
}




/**
 * displays the questions
 * nested for loops disable the inputs
 * found on Micrsoft's AI Copilot
 * one a user clicks on a input.
 * listening click event on container with questions
 * with the function catch the answers function as it's function.
 */
function setNextCharacter(){
	
 displayCharacterOptions(randomCharacter[currentQuestionIndex]);
 let selectedRadio = null;
 const radioBtns = document.querySelectorAll('input[name="character"]');

 for (const radio of radioBtns) {
	radio.addEventListener('change', (event) => {
	  if (event.target.checked) {
		for (const button of radioBtns) {
		  if (button !== event.target) {
			button.disabled = true;
		  }
		}
		selectedRadio = event.target;
		
	  }
	});
  
}
optionsContainer.addEventListener( 'click', catchAnswers );
}


/**created a function to make any strings 
 * show options and character image function
 * Uses template literals to add:
 * 1 .Image of character.
 * 2. Options/answers to who the character is.
 */
function displayCharacterOptions( option ) {
	let ulHTML = `<ul id="radio-options">`;
	option.answers.forEach( answer => {
		let li = answer.options;
		ulHTML += `${li}`;
	} );
	ulHTML += `</ul>`;
	elementId( 'character-image' ).innerHTML = option.pic;
	elementId( 'answer-options' ).innerHTML = ulHTML;
	
	
}

/** 
 * gets all the image elements
*/
function getCharacterImages(options) {

const currentPic = elementId('character-image');
options = currentPic.innerHTML 
	return options;
}


/**
 * Pushes my images to the different arrays
 * can be used for any array
 */
function addToArray(item,arr) {
  arr.push(item);
}



/**
 * catch players answers
 * pushes character images to an array.
 * seperates correct character images
 * seperates wrong character images
 */
function catchAnswers(evt ) {
	const selectedBtn = evt.target;
	const nextBtn = document.getElementById( 'nextBtn' );
	const submitBtn = document.getElementById( 'submitBtn' );
	const characterImage = getCharacterImages(randomCharacter[currentQuestionIndex]);
	let radioBtn = selectedBtn;
	if ( radioBtn.tagName === 'INPUT' ) {
		let input = radioBtn;
		if ( input.classList.contains( 'correct' ) ) {
			currentScore += 10;
			addToArray(characterImage, imagesOfusersQuestionsCorrect );
			
		} else if ( input.classList.contains( 'wrong' ) ) {
			addToArray(characterImage, imagesOfusersQuestionsWrong );
			
		}

		finalScore = currentScore;
			
		}
		
	
	if ( randomCharacter.length > currentQuestionIndex + 1 ) {
		nextBtn.classList.remove( 'hide' );
	} else {
		submitBtn.classList.remove( 'hide' );
		submitBtn.addEventListener('click', usersResults);
	}

	
}


/** 
 * capitalise the first letter of the users name
*/
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  
  

/** 
 * displays the users name,
 * score, correct image
 * and incorrect images
*/
function usersResults() {
	
	elementId('users-score').classList.remove('hide');
	elementId('player-score').classList.remove('hide');
	elementId('charactersKnown').classList.remove('hide');
	elementId('charactersUnknown').classList.remove('hide');
	elementId('players-name').innerText = capitalizeFirstLetter(playersName);
	elementId('correct-players').innerText = capitalizeFirstLetter(playersName);
	elementId('incorrect-player').innerText = capitalizeFirstLetter(playersName);
	elementId('user-score').innerText = finalScore;
	if(imagesOfusersQuestionsCorrect.length !== 0) {
		let correctHTML = ``;
		for (let image of imagesOfusersQuestionsCorrect) {
			correctHTML += `<li>${image}</li>`;
		}

		elementId('knownUl').innerHTML = correctHTML;
	}

	if(imagesOfusersQuestionsWrong.length !== 0) {
		let wrongHTML = ``;
		for (let pic of imagesOfusersQuestionsWrong) {
			wrongHTML += `<li>${pic}</li>`;
		}

		elementId('unknownUl').innerHTML = wrongHTML;
	}
	



}


/**
 * play again 
 * takes you to game container
 * resets score and arrays
 */
function playAgain() {
		imagesOfusersQuestionsCorrect.length = [];
		imagesOfusersQuestionsWrong.length = [];
		currentScore = 0;
		finalScore = 0;
		currentQuestionIndex =0;
		elementId('nextBtn').classList.add('hide');
		elementId('submitBtn').classList.add('hide')
		elementId('knownUl').innerHTML = "";
		elementId('unknownUl').innerHTML = "";
		const radioBtns = document.querySelectorAll( 'input[name="character"]' );
	for ( let btn of radioBtns ) {
		if ( btn.checked === true ) {
			btn.checked = false;
		}
	}
    
		elementId('game-container').classList.remove('hide');
		elementId('overlayPlayAgain').classList.add('hide');
}


function exitGame() {
	elementId('player-name').value = "";
	imagesOfusersQuestionsCorrect.length = [];
	imagesOfusersQuestionsWrong.length = [];
	currentScore = 0;
	finalScore = 0;
	currentQuestionIndex =0;
	elementId('nextBtn').classList.add('hide');
	elementId('submitBtn').classList.add('hide')
	elementId('knownUl').innerHTML = "";
	elementId('unknownUl').innerHTML = "";
	const radioBtns = document.querySelectorAll( 'input[name="character"]' );
for ( let btn of radioBtns ) {
	if ( btn.checked === true ) {
		btn.checked = false;
	}
}

	elementId('game-container').classList.add('hide');
	elementId('overlayPlayAgain').classList.add('hide');
	elementId('overlay-home').classList.remove('hide');
}



