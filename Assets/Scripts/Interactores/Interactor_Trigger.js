#pragma strict
var actObject : String;
var manager : GameObject;
var encendido : boolean = true;

function OnTriggerEnter (other : Collider) {
	if(encendido){
		manager.GetComponent(IEvent_manager).Trigger(actObject);
	}
}

function apagar(){
	encendido = false;
}

function encender(){
	encendido = true;
}