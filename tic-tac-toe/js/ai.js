var Ai=false

let aibtnback = document.getElementById('aibtn').style
var btnaicolor='gray'
function enableAi(){
  Ai=!Ai
  var button = getComputedStyle(document.getElementById("newgamebtn"));
  aibtnback.background==btnaicolor? 
    aibtnback.background=button['background-color']:
    aibtnback.background=btnaicolor
}

function nextWin(arr, index, val){
  arr[index]=val
  // console.log(arr)
  // console.log('win')
  let bool = winCondition(arr)=='01'
  arr[index]=' '
  return bool
}

function nextLose(arr, index, val){
  arr[index]=val
  // console.log(arr)
  // console.log('lose')
  let bool = winCondition(arr)=='10'
  arr[index]=' '
  return bool
}

function nextLose2(arr, index, index2, val){
  arr[index]=val
  arr[index2]=val
  // console.log('lose2')
  let bool = winCondition(arr)=='10'
  arr[index]=' '
  arr[index2]=' '
  return bool
}

function response(field){
  // console.log(field)
  if(field[(size+1)/2]==' ') return (size+1)/2
  for(let i=1; i<field.length; i++)
    if(field[i]==' '&&nextWin(field, i, tac)==true)
      return i
  for(let i=1; i<field.length; i++)
    if(field[i]==' '&&nextLose(field, i, tic)==true)
      return i
  let outcome=new Array(field.length).fill(0)
  for(let i=1; i<field.length; i++)
    for(let j=1; j<field.length; j++)
      if(i!=j&&field[i]==' '&&field[j]==' '&&nextLose2(field, i, j, tic)==true)
        outcome[i]+=1
  console.log(outcome)
  return outcome.indexOf(Math.max(...outcome))
  // field[field.indexOf(' ')]=tic
  // return response(field)
}