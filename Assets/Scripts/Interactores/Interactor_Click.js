#pragma strict
private var player : GameObject;
private var closeDistance : float = 1.5;
private var flag : boolean = true;
private var cursor : String;
var actObject : String;
var manager : GameObject;
function Start () {
}

function Update () {
	player = manager.GetComponent(Player_Manager).darActual();
	cursor = manager.GetComponent(ScreenManager).Cursor();
}

function  DistanceFromObject(){
	var onDistance : boolean = false;
    var sqrLen = (player.transform.position - transform.position).sqrMagnitude;
    if( sqrLen < closeDistance){
    	onDistance = true;
        return onDistance;
    }
}

function FlagOn(){
	flag = true;
}

function FlagOff(){
	flag = false;
}

function OnMouseEnter(){
	if(DistanceFromObject() && flag)
		GameObject.Find(cursor).GetComponent(CursorControl).ActivarCursor();
}

function OnMouseExit(){
	if(flag)
		GameObject.Find(cursor).GetComponent(CursorControl).DesactivarCursor();
}

function OnMouseDown(){
	print("entre!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
	if(DistanceFromObject() && flag)
		manager.GetComponent(IEvent_manager).Switch(actObject);
	else if (DistanceFromObject() && !flag)
		manager.GetComponent(IEvent_manager).Switch(actObject + "S");
}