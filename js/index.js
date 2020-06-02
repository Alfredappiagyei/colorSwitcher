document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('redButton').onclick = switchRed;
document.getElementById('blackButton').onclick = switchBlack;
document.getElementById('reset').onclick = switchTeal;


function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'orange';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}


function switchRed() {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'white';
  }
  
  
function switchBlack() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }
  
   
function switchTeal() {
    document.body.style.backgroundColor = 'teal';
    document.body.style.color = 'black';
  }
  