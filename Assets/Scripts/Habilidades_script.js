#pragma strict

private var actFuerza = false;
private var actCurar = false;
private var actPequena = false;
private var getBotiquin = false;
var habFuerza : Texture2D;
var habCurar : Texture2D;
var habPequena : Texture2D;

function Start () {

}

function OnGUI () {
	
	if(getBotiquin){
		GUI.Label(new Rect (Screen.width - habCurar.width,Screen.height - habCurar.height,habCurar.width,habCurar.height),habCurar);
	}
	
	if(actFuerza){
		GUI.Label(new Rect ((Screen.width/2) - habFuerza.width/2,(Screen.height/2) - habFuerza.height/2,habFuerza.width,habFuerza.height),habFuerza);
	}
	
	if(actCurar){
		GUI.Label(new Rect ((Screen.width/2) - habCurar.width/2,(Screen.height/2) - habCurar.height/2,habCurar.width,habCurar.height),habCurar);
	}
	
	if(actPequena){
		GUI.Label(new Rect ((Screen.width/2) - habFuerza.width/2,(Screen.height/2) - habPequena.height/2,habPequena.width,habPequena.height),habPequena);
	}
}

function displayFuerza(){
	actFuerza = true;
	yield WaitForSeconds(1.5);
	actFuerza = false;
}

function displayCurar(){
	if(getBotiquin){
		actCurar = true;
		yield WaitForSeconds(1.5);
		actCurar = false;
		getBotiquin = false;
	}
}

function displayPequena(){
	actPequena = true;
	yield WaitForSeconds(1.5);
	actPequena = false;
}

function cogerBotiquin(){
	getBotiquin = true;
}