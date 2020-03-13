var domnURL = 'https://MYDOMAIN.TLD';
var vrtTitl = new Array();
var vrtLink = new Array();
var vrtImag = new Array();
var vrtAltt = new Array();

// These initial[0] values should be inherited from ads/loadvrt
vrtTitl[0] = 'Unannoying advertising';
vrtLink[0] = 'https://badad.one/help_videos.php';
vrtImag[0] = domnURL+'/vrts/badad_01.png';
vrtAltt[0] = 'badAad.one';

vrtTitl[1] = 'Unannoying advertising';
vrtLink[1] = 'https://badad.one/help_videos.php';
vrtImag[1] = domnURL+'/vrts/badad_02.png';
vrtAltt[1] = 'badAad.one';

vrtTitl[2] = 'Unannoying advertising';
vrtLink[2] = 'https://badad.one/help_videos.php';
vrtImag[2] = domnURL+'/vrts/badad_03.png';
vrtAltt[2] = 'badAad.one';

vrtTitl[3] = 'Unannoying advertising';
vrtLink[3] = 'https://badad.one/help_videos.php';
vrtImag[3] = domnURL+'/vrts/badad_04.png';
vrtAltt[3] = 'badAad.one';

vrtTitl[4] = 'Unannoying advertising';
vrtLink[4] = 'https://badad.one/help_videos.php';
vrtImag[4] = domnURL+'/vrts/badad_05.png';
vrtAltt[4] = 'badAad.one';

vrtTitl[5] = 'Unannoying advertising';
vrtLink[5] = 'https://badad.one/help_videos.php';
vrtImag[5] = domnURL+'/vrts/badad_06.png';
vrtAltt[5] = 'badAad.one';

vrtTitl[6] = 'Unannoying advertising';
vrtLink[6] = 'https://badad.one/help_videos.php';
vrtImag[6] = domnURL+'/vrts/badad_07.png';
vrtAltt[6] = 'badAad.one';

vrtTitl[7] = 'Unannoying advertising';
vrtLink[7] = 'https://badad.one/help_videos.php';
vrtImag[7] = domnURL+'/vrts/badad_08.png';
vrtAltt[7] = 'badAad.one';

vrtTitl[8] = 'Unannoying advertising';
vrtLink[8] = 'https://badad.one/help_videos.php';
vrtImag[8] = domnURL+'/vrts/badad_09.png';
vrtAltt[8] = 'badAad.one';

vrtTitl[9] = 'Unannoying advertising';
vrtLink[9] = 'https://badad.one/help_videos.php';
vrtImag[9] = domnURL+'/vrts/badad_10.png';
vrtAltt[9] = 'badAad.one';

vrtTitl[10] = 'Unannoying advertising';
vrtLink[10] = 'https://badad.one/help_videos.php';
vrtImag[10] = domnURL+'/vrts/badad_11.png';
vrtAltt[10] = 'badAad.one';

vrtTitl[11] = 'Unannoying advertising';
vrtLink[11] = 'https://badad.one/help_videos.php';
vrtImag[11] = domnURL+'/vrts/badad_12.png';
vrtAltt[11] = 'badAad.one';

var cycle = 0
window.onload = function vrtSwitch() {
  if (!document.images) { return; }

  document.getElementById("vrtLnk1").href = vrtLink[cycle];
  document.getElementById("vrtLnk1").title = vrtTitl[cycle];
  document.getElementById('vrtImg1').src = vrtImag[cycle];
  document.getElementById('vrtImg1').alt = vrtAltt[cycle];
  document.getElementById("vrtLnk2").href = vrtLink[cycle];
  document.getElementById("vrtLnk2").title = vrtTitl[cycle];
  document.getElementById('vrtImg2').src = vrtImag[cycle];
  document.getElementById('vrtImg2').alt = vrtAltt[cycle];

  if (cycle<11) {
    cycle ++;
  } else {
    cycle = 0;
  }

  setTimeout(vrtSwitch,10000);
}
window.onload = vrtSwitch();
