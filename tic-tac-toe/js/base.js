let egg=[];
let eggCondition=[16,12,58,59,60,51,42,41,40,31,22,23,24]
let turn=false;
let val=' ';
let step=0;
var size=9;
var sqrtSize=Math.sqrt(size);
const tic='★'
const tac='☆'
var nInRow=3;
var lastStep=false

function easterEgg() {
  deleteTable();
  deleteTools();
  // alert("egg")
  let eggImg = document.createElement('img');
  eggImg.src="https://i.gifer.com/embedded/download/QZBz.gif";
  var place = document.getElementById("placeforbtns");
  document.body.style.background='white';
  place.appendChild(eggImg);
}

function easterEggCheck() {
  let count=0;
  for (let i = 0; i < 13; i++)
    if(eggCondition.includes(egg[i]))
      count++;
    else
      return;
  easterEgg();
  egg=[]
}

function sensor(){
  let field=[]
  for(let i=1; i<size+1; i++)
    field[i]=document.getElementById('f'+i).value
  return field
}

function pauseGame(){
  for (let i = 1; i < size+1; i++)
    document.getElementById('f'+i).onclick = function() {}
  document.getElementById('changesize').onclick = function() {}
}

function checkWin(end){
  switch(end){
    case '10'||'01'||'11': lastStep=true; offDisplay();
    case '10':displayLetter(10); break
    case '01':displayLetter(01); break
    case '11':displayLetter(11); break
  }
}

function deleteTools() { document.getElementById("tools").parentNode.removeChild(document.getElementById("tools"));
}

function winCondition(field) {
  let checkTic=''
  let checkTac=''
  let ticRow=false
  let tacRow=false
  for (let i = 0; i < nInRow; i++){
    checkTic+=tic
    checkTac+=tac
  }
  for (let i = 0; i < sqrtSize; i++){
    let strline=""
    let colline=""
    for (let j = 1; j < sqrtSize+1; j++){
      strline+=field[(j+sqrtSize*i)]
      colline+=field[(i+(j-1)*sqrtSize+1)]
    }
    if(strline.includes(checkTic)||colline.includes(checkTic))
      ticRow=true
    else if(strline.includes(checkTac)||colline.includes(checkTac))
      tacRow=true
  }
  for(let i=1;i<size+1;i+=1+((sqrtSize-1)*(i>sqrtSize))){
    let border = (i>sqrtSize)? size-(i-sqrtSize+1)/sqrtSize:size+1-(i-1)*sqrtSize
    let strdia=""
    for(let j=i;j<border;j+=sqrtSize+1)
      strdia+=field[j]
    if(strdia.includes(checkTic))
      ticRow=true
    else if(strdia.includes(checkTac))
      tacRow=true
  }
  for(let i=1;i<size+1;i+=1+((sqrtSize-1)*(i>sqrtSize-1))){
    let border = (i>sqrtSize)? size-sqrtSize+1+i/sqrtSize : 2+(i-1)*sqrtSize
    let stroppdia=""
    for(let j=i;j<border;j+=sqrtSize-1)
      stroppdia+=field[j]
    if(stroppdia.includes(checkTic))
      ticRow=true
    else if(stroppdia.includes(checkTac))
      tacRow=true
  }
  let result=(ticRow|0)+''+(tacRow|0)
  return result
}

function clearField() {
  // for (let i = 1; i < size+1; i++)
  //   document.getElementById('f'+i).value=' ';
  deleteTable();
  createTable();
  matrixButtons();
  changeColor();
}

function matrixButtons() {
  for (let i = 1; i < size+1; i++) {
    document.getElementById('f'+i).onclick = function() {
      (turn==false)? val=tic: val=tac;
      console.log('f'+i)
      
      if(document.getElementById('f'+i).value==' '){
        turn=!turn;
        document.getElementById('f'+i).value=val;
        step++;
        egg[step-1]=i;
      }
      if(step>4){
        let field=sensor()
        console.log(field)
        // console.log(field)
        let end = winCondition(field);
        checkWin(end)
      }
      if(step==size&&!lastStep)
        checkWin('11')
      if(step==13)
        easterEggCheck()
      if(turn==true&&Ai&&step<size&&!lastStep){
        let field=sensor()
        console.log(field)
        let id = response(field)
        document.getElementById('f'+id).click()
      }
    }
  }
}

document.getElementById('newgamebtn').onclick = function() {
  clearField();
  turn=false;
  step=0;
  offDisplay()
  lastStep=false
  activeChangeSize()
}
// <img src="https://i.gifer.com/embedded/download/QZBz.gif">