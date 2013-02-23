#pragma strict
function Start () {

}

function Update () {

}

function EventSwitch(objName : String){

}

function EventTalk(objName : String){
	GetComponent(Player_Manager).destruirFabio();
	GetComponent(Menu_script).ActivarFabio();
}
