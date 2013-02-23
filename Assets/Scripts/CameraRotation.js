#pragma strict
var MainCamera : Camera;
private var initRotationX : float;
private var initRotationY : float;
private var initRotationZ : float;

function Start () {
	initRotationX = MainCamera.transform.rotation.x;
	print(initRotationX);
}

function Update () {

}

function OnTriggerEnter (other : Collider){
	print("entre");
	MainCamera.transform.rotation.x = initRotationX + 10;
}

function OnTriggerExit(other : Collider){
	print("sali");
	MainCamera.transform.rotation.x = initRotationX;
}