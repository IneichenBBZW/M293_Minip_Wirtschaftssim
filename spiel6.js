let jahr = 0;
let korn = 6000;
let buerger = 100;
let land = 400;
let ende = false;
let landPreis = 5;
let ernteProAcker;

function spieleEineRunde() {
  if (ende == false) {
    //Hurra! Ein neues Jahr bricht an
    jahr = jahr + 1;
    //Wir legen jetzt fest, wie gut die Ernte in diesem Jahr sein wird.
    bestimmeErnteErfolg();
    //Hier regeln wir die Eingabe der Befehle und kümmern uns darum, dass sie (soweit möglich) auch in die Tat umgesetzt werden.
    verarbeiteBefehle();
    //Erst nachdem der Handel mit Land abgeschlossen ist, darf ein neuer Landpreis berechnet werden.
    bestimmeLandPreis();
    erstelleBericht();
    pruefeEnde();
  }
}

function verarbeiteBefehle() {
  let eingabe = prompt(
    'Erteilt Eure Befehle, hoher Herrscher',
    'Nahrung,Aussaat,Landhandel'
  );
  let befehle = eingabe.split(',');
  let verteileKorn = parseInt(befehle[0]);
  let saeheKorn = parseInt(befehle[1]);
  let landKauf = parseInt(befehle[2]);

  if (isNaN(verteileKorn) || verteileKorn < 0) {
    verteileKorn = 0;
  }
  if (isNaN(saeheKorn) || saeheKorn < 0) {
    saeheKorn = 0;
  }
  if (isNaN(landKauf)) {
    landKauf = 0;
  }
  bevoelkerung(verteileKorn);
  aussaat(saeheKorn);
  handel(landKauf);
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
  if (nahrung > korn) {
    nahrung = korn;
  }
  korn = korn - nahrung;
  let ausreichendNahrung = Math.round(nahrung / 20) - buerger;
  let neueBuerger = 0;
  if (ausreichendNahrung > 0) {
    neueBuerger = ausreichendNahrung / 2;
  }
  let verstorbeneBuerger = 0;
  if (ausreichendNahrung < 0) {
    verstorbeneBuerger = -ausreichendNahrung;
  }
  buerger = Math.round(buerger + neueBuerger - verstorbeneBuerger);
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
