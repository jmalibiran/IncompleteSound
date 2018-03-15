const keys = document.querySelectorAll('.sound');
const instruments = document.querySelectorAll('nav>a');


function clickSound(e){
  let soundKey = e.target.dataset['sound'];
  let audio = document.querySelector(`audio[data-sound="${soundKey}"]`);
  audio.currentTime = 0;
  audio.play();
}



function switchInstrument(e){
  e.preventDefault();
  let inst1 = document.querySelector('#instrument1');
  let inst2 = document.querySelector('#instrument2');
  let inst3 = document.querySelector('#instrument3');
  let instrument = e.target.dataset['instrument'];
  if(instrument=="instrument1"){
    inst1.style.display = "flex";
    inst2.style.display = "none";
    inst3.style.display = "none";
    return;
  }

  else if (instrument=="instrument2"){
  inst1.style.display = "none";
  inst2.style.display = "flex";
  inst3.style.display = "none";
  return;
  }

  else (instrument=="instrument3")
  inst1.style.display = "none";
  inst2.style.display = "none";
  inst3.style.display = "flex";
  return;
  }

keys.forEach(function(key){
    key.addEventListener("click", clickSound);
});

instruments.forEach(function(instrument){
  instrument.addEventListener("click", switchInstrument);
});
