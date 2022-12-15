document.addEventListener('keypress', logKey);
numpad=''
function logKey(e) {
  console.log(`${e.code}`);
  let key=`${e.code}`;
  try{
    switch(key){
      case 'KeyR': document.getElementById('newgamebtn').click(); break
      case 'KeyT': document.getElementById('changethemebtn').click(); break
      case 'KeyY': document.getElementById('changesize').click(); break
      case 'KeyU': document.getElementById('aibtn').click(); break
      case 'Digit'+key.match(/[1-9]/)[0]: numpad+=key.match(/[1-9]/)[0]; break
    } 
  }catch(error){}
  if(numpad.length==2)
    try {
      let cell=(numpad[0]-1)*sqrtSize+Number(numpad[1])
      document.getElementById('f'+cell).click()
    } catch (error) {
      console.log("IdOutField")
    }finally{
      numpad=''
    }
}