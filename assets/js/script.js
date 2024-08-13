let randomCharacter,currentQuestionIndex; 
let currentScore = 0;
const homeBtn = document.getElementById('homeBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const optionsContainer = document.getElementById('answer-options');
const usersScore = document.getElementById('users-score');
const overlayHowToPlay = document.getElementById('overlay-how-to-play');
const overlayLeaderBoard = document.getElementById('overlay-leader-board');


// let Alert = new customAlert();


/**
 * Control over home overlay
 * once the dom is loaded
 * user can click the begin button to hide overlay home
 * function gameEntryButons gives the user control of the game start, info and leader board buttons
 */
document.addEventListener("DOMContentLoaded", ()=> {
    let begin = document.getElementById('begin');
    begin.addEventListener('click', ()=> {
        let overlayHome = document.getElementById('overlay-home');
       overlayHome.classList.add('hide');
       document.getElementById('entry-controls-container').classList.remove('hide');
       document.getElementById('player-name').focus();
    });
    
    //NOTE: gameEntry Function called
    gameEntryButtons();

    const startQuizBtn = document.getElementById('start-game');
    startQuizBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', function(){
      currentQuestionIndex++;
      setNextCharacter();
    });

    homeBtn.addEventListener('click', homeBtnClear);
});


/**
 * event listeners on buttons for the quiz includes:
 * 1.Button to open "How To Play".
 * 2.Button to open Leader Board.
 * 3.Buttons to close "How To Play" & Leader Board.
 */
function gameEntryButtons () {
    //Variables for overlays "how to play" and leader-board
    
//Variable for all buttons: start-quiz, how to play and leader board controls
let btns = document.getElementsByTagName('button');

for (let btn of btns) {
    btn.addEventListener('click', function() {
         if (this.getAttribute('id') === 'howToPlay'){
            overlayHowToPlay.classList.remove('hide');
        } else if (this.getAttribute('id') === 'close-HowTo-btn'){
          overlayHowToPlay.classList.add('hide');
        } else if (this.getAttribute('id') === 'leader-board') {
           overlayLeaderBoard.classList.remove('hide');
        } else if (this.getAttribute('id') === 'close-leaderBoard-btn') {
          overlayLeaderBoard.classList.add('hide');
        }
    });
}
 
}


/**
 * random array function
 * resuffles an array items order every time it is called
 * you can pass any array as the argument
 */
function randomArray (arr) {
  //below resuffles the order of the arrays items
const randomArrItem = arr.sort(()=> Math.random() - .5);
return randomArrItem;
} 

/**
 * function start quiz
 * Checks user's input has a value.
 * level parameter allows a change of data, a different set of questions
 * setNextCharacter function is called.
 */
function startQuiz(level) {
  const playerName= document.getElementById('player-name');
      if(playerName.value === "") {
        alert('You need to enter your name first!');
      } else {
        if(playerName.value !== "") {
          document.getElementById('game-container').classList.remove('hide');
        }
      }

  level = levelOne;
  randomCharacter = randomArray(level);
  console.log(randomCharacter.length, "I'm in the startQuiz function");
  currentQuestionIndex = 0;
  setNextCharacter();
  console.log(randomCharacter[currentQuestionIndex]);

}



/**
 * setNextCharacter Function
 * Calls displayCharacterOptions function
 * and passes in the array and it's current index as the argument
 */

function setNextCharacter() {
  resetButton();
  displayCharacterOptions(randomCharacter[currentQuestionIndex]);

 
}


/**
 * show options and character image function
 * Uses template literals to add:
 * 1 .Image of character.
 * 2. Options/answers to who the character is.
 */

function displayCharacterOptions(option) {

  let ulHTML = `<ul>`;

      option.answers.forEach(answer => {
        let li = answer.options;
        ulHTML += `${li}`;
      
      });

      ulHTML += `</ul>`;

  document.getElementById('character-image').innerHTML = option.pic;
  document.getElementById('answer-options').innerHTML = ulHTML;
  console.log(optionsContainer);
  optionsContainer.addEventListener('click', catchAnswers);

  

}

/**
 * catch Answers
 */
//NOTE: Golbal Array
const usersRadioBtns = [];
const imagesOfusersQuestions = [];



function catchAnswers(evt){
  const selectedBtn = evt.target;
  const radioBtn = selectedBtn;
  const wholeKit = randomCharacter[currentQuestionIndex];
  console.log(wholeKit);
  if(radioBtn.tagName === 'INPUT'){
    console.log(radioBtn);
    usersRadioBtns.push(radioBtn);
  }

  imagesOfusersQuestions.push(wholeKit.pic);
  console.log(usersRadioBtns);
  console.log(imagesOfusersQuestions);
   
  if(randomCharacter.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove('hide');
  } else {
    submitBtn.classList.remove('hide');
  }

}


/**
 * toggles nextBtn hide class on
 */
function resetButton() {
  nextBtn.classList.add('hide');
}


/**
 * clears all
 */

function homeBtnClear() {
  alert('You clicked the home button');
}