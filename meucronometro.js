var tempo = 10;
function aguarda() {
if (tempo >= 0) {
	var el = document.getElementById("inicio");
		if( el ){
			secondscamp = parseInt(tempo / 1);
			hours2 = parseInt(secondscamp / 3600);
			secondscamp = secondscamp % 3600;
			minutes2 = parseInt(secondscamp / 60);
			secondscamp = secondscamp % 60;
			el.innerHTML = minutes2 + ":" + secondscamp;
		}
		tempo = tempo - 1;
		setTimeout("aguarda()", 1000);
		}if (tempo == 0) {
			var v = document.getElementsByTagName("audio")[0];
			v.play();
            }
            }else{
            } 
}
aguarda();
