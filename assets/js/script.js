//Function to get rid of the overlay and then 
// then control the buttons on the main.

/**
 * Control over home overlay
 */
document.addEventListener("DOMContentLoaded", ()=> {
    let begin = document.getElementById('begin');
    begin.addEventListener('click', ()=> {
        let overlayHome = document.getElementById('overlay-home');
       overlayHome.style.display = "none";
    });
});
 
  
