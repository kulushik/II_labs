let display = document.getElementById("winDisplay")

function displayLetter(end){
  let letter
  let color
  switch(end){
    case 10: letter='X'; color='red'; break
    case 01: letter='O'; color='blue'; break
    case 11: letter='D'; color='green'; break
    default: console.log("dddisplay")
  }
  display.innerHTML = display.innerHTML.replace(letter, '<span style="color: '+color+';">'+letter+'</span>');
  pauseGame()
}

function offDisplay(){
  display.innerHTML = display.innerHTML.replace('X', '<span style="color: white;">X</span>');
  display.innerHTML = display.innerHTML.replace('O', '<span style="color: white;">O</span>');
  display.innerHTML = display.innerHTML.replace('D', '<span style="color: white;">D</span>');
}