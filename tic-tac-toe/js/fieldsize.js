createTable();
matrixButtons();

let cellsValue = []

function saveValues() {
  for (let i = 0; i < size; i++)
    (cellsValue[i]!=null)?
    document.getElementById('f'+(i+1)).value=cellsValue[i]:
    document.getElementById('f'+(i+1)).value=' ';
    cellsValue=[]
}

function copyValues() {
  let k;
  (sqrtSize==9)? k=-6:k=2;
  for (let i = 0; i < sqrtSize; i++) 
    cellsValue[i]=document.getElementById('f'+(i+1)).value;
  for (let i = sqrtSize; i < size; i++) {
    index=Math.floor(i/sqrtSize)*(sqrtSize+k)+i%sqrtSize;
    cellsValue[index]=document.getElementById('f'+(i+1)).value;
  }
}

function deleteTable() {
    for (let i = 0; i < size; i++){
    document.getElementById('f'+(i+1)).parentElement.remove();
  }  document.getElementById("extendTable").parentNode.removeChild(document.getElementById("extendTable"));
}

function createTable() {
  let tableObj = document.createElement('table');
  tableObj.id = "extendTable";
  let tableHeadObj = document.createElement('thead');
  let tableBodyObj = document.createElement('tbody');
  
  tableObj.appendChild(tableHeadObj);
  tableObj.appendChild(tableBodyObj);
  // document.body.appendChild(tableObj);
  var place = document.getElementById("placeforbtns");
  place.appendChild(tableObj);
  
  for (let i = 0; i < sqrtSize; i++) {

    let trObj = document.createElement('tr');

    for (let j = 0; j < sqrtSize; j++) {
      let button = document.createElement('input');
      button.type = 'button';
      button.id = 'f'+(i*sqrtSize+(j+1));
      button.className='cell';
      button.value = ' ';
      let tdObj = document.createElement('td');
      tdObj.appendChild(button);
      trObj.appendChild(tdObj);
    }
    tableBodyObj.appendChild(trObj);
  }
}

function activeChangeSize(){
  document.getElementById('changesize').onclick = function() {
  
    copyValues();
    
    deleteTable();
  
    (sqrtSize>7)? sqrtSize=3:sqrtSize+=2;
    size=sqrtSize*sqrtSize;
    nInRow=3+(sqrtSize>3)+(sqrtSize>5)
    document.getElementById('changesize').value = sqrtSize;
    // document.body.style.zoom = "120%";
    createTable();
    
    matrixButtons();
    saveValues();
    changeColor();
  }
}
