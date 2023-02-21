let cool = document.getElementById("cool").addEventListener('click', function() { changeBackgroundColor() } );

function changeBackgroundColor() {
  document.body.style.background = 'lightblue';
}


let exciting = document.getElementById("exciting").addEventListener('click', function() { twirlText() } );

let str = document.getElementById("exciting")

function twirlText() {
  str.textContent = "Woohoo that was fun!";
  document.body.style.background = '#edddf0';
}

let eek = document.getElementById("eek").addEventListener('click', function() { ohNo() } );

function ohNo() {
  document.body.style.background = 'red';
  alert('Pay the price!! This will hurt your eyes hehehe');
}
