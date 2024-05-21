let jahr = 0;
let korn = 6000;
let buerger = 100;
let land = 400;
let ende = false;
let landPreis = 5;
let ernteProAcker;

function spieleEineRunde() {
  console.log('Ich spiele eine Runde');
}

function verarbeiteBefehle() {
  console.log('Ich verarbeite Befehle');
}

function bestimmeErnteErfolg() {
  ernteProAcker = Math.round(Math.random() * 5 + Math.random() * 5 + 0.5);
}

function bestimmeLandPreis() {
  landPreis = Math.round(Math.random() * 10 + 0.5);
  if (Math.random() > 0.9) {
    landPreis = Math.round(Math.random() * 15 + 0.5);
  }
}

function bevoelkerung(nahrung) {
  console.log('Nahrung');
}

function aussaat(saat) {
  console.log('Saat');
}

function handel(kauf) {
  console.log('Kaufe Land');
}

function erstelleBericht() {
  let ernte;
  switch (ernteProAcker) {
    case 1:
      ernte = 'Unwetter vernichteten Teile der Ernte.';
      break;

    case 2:
    case 3:
      ernte = 'Das Wetter war schlecht.';
      break;
    case 6:
    case 7:
      ernte = 'Das Wetter war gut. Die Ernte war reichlich.';
      break;
    case 8:
    case 9:
    case 10:
      ernte = 'Das Wetter war sehr gut. Die Ernte war hervorragend.';
      break;
    case 4:
    case 5:
    default:
      ernte = 'Das Wetter war normal.';
      break;
  }
  let info = 'Weiser Herrscher aus Babylon!<br>';
  info += 'Wir schreiben das Jahr ' + jahr + ' Eurer Herrschaft.<br><br>';
  info += buerger + ' treue Bürger zählt Euer Reich.<br>';
  info +=
    ernte + '<br>' + korn + ' Scheffel Korn lagern in den Kornkammern.<br>';
  info += land + ' Acker Land besitzt Ihr.<br>';
  info += landPreis + ' Scheffel Korn kostet ein Acker Land.';
  monitor.innerHTML = info;
  return;
}

function pruefeEnde() {
  console.log('Ist das das Ende?');
}
