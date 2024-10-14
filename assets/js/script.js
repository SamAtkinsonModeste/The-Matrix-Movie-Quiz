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
	const randomArrItem = arr.sort( () => Math.random() - 0.5 );
	return randomArrItem;
}




/**
 * function start quiz
 * Checks user's input has a value.
 * 
 */
function startQuiz(){
	console.log("I start the game");
	const playerName = elementId( 'player-name' );
	console.log(playerName)
	if ( playerName.value === "" ) {
		elementId('alert-name').classList.remove('hide');
		elementId("start-game").disabled = true;
		const alertBoxClose = elementId('close-alert-btn');
		alertBoxClose.addEventListener('click', ()=>{ 
			elementId('alert-name').classList.add('hide');
			elementId("start-game").disabled = false;
		});

	} else {
		if ( playerName.value !== "" ) {
			document.getElementById( 'game-container' ).classList.remove( 'hide' );
			document.getElementById( 'entry-controls-container' ).classList.add( 'hide' );
		}
	}
  randomCharacter = randomArray(matrixCharacters);
  currentQuestionIndex = 0;
  setNextCharacter();
}





function setNextCharacter(){
  
 displayCharacterOptions(randomCharacter[currentQuestionIndex]);
  
}


/**
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
	optionsContainer.addEventListener( 'click', catchAnswers );
	
}



/**
 * catch players answers
 * pushes character images to an array.
 * seperates correct character images
 * seperates wrong character images
 */
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


console.log(imagesOfusersQuestionsCorrect);
console.log(imagesOfusersQuestionsWrong);

