let change=false;

function changeColor() {
  (change==true)? changeColorOpposite(127):changeColorOpposite(-127);
}

function changeColorOpposite(c) {
  // console.log(document.querySelector('.cell').style.color = 'red');
    let elements=document.getElementsByClassName("cell");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = 'rgb('+(127+c)+','+(127+c)+','+(127+c)+')';
      elements[i].style.color = 'rgb('+(127-c)+','+(127-c)+','+(127-c)+')';
  }
    elements=document.getElementsByClassName("highlight");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = 'rgb('+(127-c)+','+(127-c)+','+(127-c)+')';
      if(elements[i].style.backgroundColor==btnaicolor) continue
      elements[i].style.backgroundColor = 'rgb('+(127+c)+','+(127+c)+','+(127+c)+')';
  }
}


document.getElementById('changethemebtn').onclick = function() {
  change=!change;
  changeColor();
  let changetheme = document.getElementById('changethemebtn');
  (change==true)?  changetheme.value='☀':changetheme.value='✧';
  // let btn = document.getElementById('changethemebtn');
  // btn.style.backgroundc = 'rgb('+r+', '+g+', '+b+')';
  // document.body.style.backgroundc = 'rgb('+r+', '+g+', '+b+')';
  // document.getElementsByClassName("cell")[1].style.borderc = "red";
  // document.getElementsByClassName("cell")[0].className = "vv";
  // document.querySelector(".cell").style.borderc = "red";
}
