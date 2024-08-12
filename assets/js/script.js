let randomCharacter,currentQuestionIndex; 
let currentScore = 0;


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
    
    gameEntryButtons();

    const startQuizBtn = document.getElementById('start-game');
    startQuizBtn.addEventListener('click', startQuiz);
});


/**
 * event listeners on all buttons for entry to the quiz includes:
 * 1.User name input.
 * 2.Button to start the quiz.
 * 3.Button to open "How To Play".
 * 4.Button to open Leader Board.
 * 5.Buttons to close "How To Play" & Leader Board.
 */
function gameEntryButtons () {
    //Variables for overlays "how to play" and leader-board
    const overlayHowToPlay = document.getElementById('overlay-how-to-play');
    const overlayLeaderBoard = document.getElementById('overlay-leader-board');

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
  console.log(randomCharacter);
  currentQuestionIndex = 0;
  setNextCharacter();

}

/**
 * setNextCharacter Function
 */

function setNextCharacter() {
  displayCharacterOptions(randomCharacter[currentQuestionIndex]);
}


/**
 * show options and character image function
 * Uses template literals to add:
 * 1 .Image of character.
 * 2. Options/answers who th character is.
 */

function displayCharacterOptions(character) {
  const gameContainer = document.getElementById('game-container');
  const gameButtons = gameContainer.getElementsByTagName('button');
  gameButtons[1].classList.remove('hide');

  document.getElementById('character-image').innerHTML = character.pic;

  let ulHTML = `<ul>`;

  character.answers.forEach(answer => {
    answer = answer.options;
    let li = answer;
    ulHTML += `${li}`;
  
  });

  ulHTML += `</ul>`;
  document.getElementById('answer-options').innerHTML = ulHTML;

  for(let btn of gameButtons) {
    btn.addEventListener('click', function() {

      if (this.getAttribute('id') === 'homeBtn') {
        alert('Are you sure you want to leave the game?  You will lose your progress.');
        document.getElementById('entry-controls-container').classList.remove('hide');
        gameContainer.classList.add('hide');
           resetGame();
        }

        if (this.getAttribute('id') === 'nextBtn') {
          alert("You clicked the next button");
        }

    });
  
  }


}



/**
 * resetGame function
 */

function resetGame() {
  document.getElementById('player-name').value = "";
  document.getElementById('player-name').focus();
  const radioBtns = document.querySelectorAll('input[name="character"]');
  for(let btn of radioBtns) {
    if (btn.checked === true) {
      btn.checked = false;
    }  
  }

}