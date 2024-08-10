let currentLevelIndex, currentScore;


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


      //Variable for users name input
  const playerName= document.getElementById('player-name');
    playerName.addEventListener('keydown',(evt)=> {
      if (evt.key === "Enter") {
        if(playerName.value === "") {
          alert("You need to add your name");
        } else {
            playerName.style.backgroundColor = "blue";
        }
        console.log("name entered");
      }
    });

//Variable for all buttons: start-quiz, how to play and leader board controls
let btns = document.getElementsByTagName('button');

for (let btn of btns) {
    btn.addEventListener('click', function() {
        if (this.getAttribute('id') === 'start-game') {
            

           if (playerName.value === "") {
            alert("You must enter your name first");
            
           } else {
            document.getElementById('game-container').classList.remove('hide');
            document.getElementById('entry-controls-container').classList.add('hide');
            playGame(levelOne);
           }

        } else if (this.getAttribute('id') === 'howToPlay'){
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
console.log(btns);
 
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
 * display answer options and question image function.
 * Insert the options into element "answer-options" div. 
 * Insert the image for the question into element "charcter-image".
 * HTML template used to insert the data.
 */
//TODO: Rename this function
function displayOptionsImage(level) {
const gameContainer = document.getElementById('game-container');
const gameButtons = gameContainer.getElementsByTagName('button');
  //Variable for the randomArray function
   level = randomArray(level);
   currentLevelIndex = 0;
   
   let ulHTML = `<ul>`;
   
      level[currentLevelIndex].answers.forEach(answer => {
        let li = answer.options;
        ulHTML += `${li}`;

      });
   
  ulHTML += `</ul>`;
 

   document.getElementById('character-image').innerHTML = level[currentLevelIndex].pic;
   document.getElementById('answer-options').innerHTML = ulHTML;
   gameButtons[1].classList.remove('hide');
console.log(gameButtons[1]);

   for(let btn of gameButtons) {
        btn.addEventListener('click', function() {

            if (this.getAttribute('id') === 'homeBtn') {
            alert('Are you sure you want to leave the game?  You will lose your progress.');
            gameContainer.classList.add('hide');
            document.getElementById('entry-controls-container').classList.remove('hide');
               resetGame();
            }

            if (this.getAttribute('id') === 'nextBtn') {
              alert('Next question function please');
            }
        });
   } 
  
  
   
}

displayOptionsImage(levelOne);


/**
 * selected answer function: 
 *  When a radio button is checked.
 *  It is checked for the class "correct".
 *  If it has it then alert "awesome".
 *  If not alert "do you really like the Matrix". 
 */

function checkAnswers (){
    console.log(document.querySelectorAll('input[type="radio"]'));
    const radioBtns = document.querySelectorAll('input[name="character"]');
        for(let btn of radioBtns) {
            btn.addEventListener('change', function(evt) {
                if(this.evt === evt.checked) {
                  console.log(btn);
                  if(btn.classList.contains('correct')) {
                    alert("your awesome!!!");
                  } else {
                    alert('Do you really like the Matrix?!');
                  }
                }
            });
        }
}

checkAnswers();


/**
 * resetGame function
 */

function resetGame() {
  document.getElementById('player-name').value = "";
  document.getElementById('player-name').focus();
  const radioBtns = document.querySelectorAll('input[name="character"]');
  for(let btn of radioBtns) {
    if (btn.checked === true) {
      console.log(btn);
      btn.checked = false;
      console.log(btn)
    }
      
  }
}


/**
 * playGame function
 */

function playGame(question) {
  displayOptionsImage(question);
}



