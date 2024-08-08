//Function to get rid of the overlay and then 
// then control the buttons on the main.

/**
 * Control over home overlay
 * once the dom is loaded
 * user can click the begin button
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

//quiz buttons start-quiz, how to play and leader board controls
let btns = document.getElementsByTagName('button');

for (let btn of btns) {
    btn.addEventListener('click', function() {
        if (this.getAttribute('id') === 'start-game') {
            

           if (playerName.value === "") {
            alert("You must enter your name first");
            
           } else {
            location.href ="game.html";
           }

        } else if (this.getAttribute('id') === 'howToPlay'){
            overlayHowToPlay.style.display = "block";
        } else if (this.getAttribute('id') === 'leader-board') {
           overlayLeaderBoard.style.display = "block";
        }
    });
}




 
}
 
  
