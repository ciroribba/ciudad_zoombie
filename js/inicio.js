function myFunction(idButton) {
    var cero = document.getElementById('cero');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
  switch(idButton) {
    case 1:
            cero.style.display = 'none';
            uno.style.display = 'block';
            document.getElementById('demo').play();              
      break;
    case 2:
            uno.style.display = 'none';
            dos.style.display = 'block';            
      break;
  case 3:
            dos.style.display = 'none';
            var source = document.getElementById('sscript');
            source.src= 'js/juego.js';
            tres.style.display = 'block';
      break;
          }
    }