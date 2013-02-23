#pragma strict

var speed = 10.0;// Determina la velocidad de movimiento
private var mover:boolean = false;// Determina la posibilidad de moverse o no

function Update () {
	if(true){
		var translation = (Input.GetAxis ("Vertical"))*-1; 
		var translation2 = (Input.GetAxis ("Horizontal"))*-1;
		translation = speed * translation; 
		translation2 = speed * translation2;
		translation *= Time.deltaTime; 
		translation2 *= Time.deltaTime;
		if(translation != 0 || translation2 != 0){
			SendMessage("DoAnim","walk_dario");
			transform.Translate (0, translation, 0);
			transform.Translate (translation2, 0, 0);
		}
		else{
			SendMessage("PauseAnim","walk");
		}
	}
}

function OnCollisionEnter(){
	gameObject.rigidbody.velocity = Vector3.zero;
}

function MoverOff(){
	mover = false;
}

function MoverOn(){
	mover = true;
}