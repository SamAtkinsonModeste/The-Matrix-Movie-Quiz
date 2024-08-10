let currentLevelIndex;


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
       overlayHome.style.display = "none";
       document.getElementById('player-name').focus();
    });
    
    gameEntryButtons();
});


/**
 * event listeners on all buttons for entry to the quiz includes:
 * 
 * user name input
 * 
 * button to start the quiz
 * 
 * button to open "How To Play"
 * 
 * button to open Leader Board
 */
function gameEntryButtons () {
    //overlays for how to play and leader board
    const overlayHowToPlay = document.getElementById('overlay-how-to-play');
    const overlayLeaderBoard = document.getElementById('overlay-leader-board');


    //users name input
let playerName= document.getElementById('player-name');
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

//buttons: start-quiz, how to play and leader board controls
let btns = document.getElementsByTagName('button');

for (let btn of btns) {
    btn.addEventListener('click', function() {
        if (this.getAttribute('id') === 'start-game') {
            

           if (playerName.value === "") {
            alert("You must enter your name first");
            
           } else {
            document.getElementById('game-container').style.display = "block";
            document.getElementById('entry-controls-container').style.display = "none";
            
           }

        } else if (this.getAttribute('id') === 'howToPlay'){
            overlayHowToPlay.style.display = "block";
        } else if (this.getAttribute('id') === 'leader-board') {
           overlayLeaderBoard.style.display = "block";
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
 * display answer options and question image function.
 * set the options for answers. 
 * set the image for the question.
 * set all data within html.
 */

function displayOptionsImage(level) {
  let round = randomArray(level);
  currentLevelIndex = 0;
   console.log(round[currentLevelIndex]);
   
   let ulHTML = `<ul>`;
   
  round[currentLevelIndex].answers.forEach(answer => {
    let li = answer.options;
    ulHTML += `${li}`;

  });
   
  ulHTML += `</ul>`;
  console.log(ulHTML);
   document.getElementById('character-image').innerHTML = round[currentLevelIndex].pic;
   document.getElementById('answer-options').innerHTML = ulHTML;
  
   
}

displayOptionsImage(levelOne);


/**
 * selected answer function: 
 *  When a radio button is checked.
 *  It is checked for the class "correct".
 *  If it has it then alert "awesome".
 *  If not alert "do you really like the Matrix". 
 */

function selectedAnswer (){
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

selectedAnswer();


