#pragma strict

var speed = 10.0;// Determina la velocidad de movimiento
private var mover:boolean = false;// Determina la posibilidad de moverse o no
private var flag:boolean = true;

function Update () {
	if(mover){
		var translation = (Input.GetAxis ("Vertical"))*-1;
		var translation2 = (Input.GetAxis ("Horizontal"))*-1;
		translation = speed * translation; 
		translation2 = speed * translation2;
		translation *= Time.deltaTime; 
		translation2 *= Time.deltaTime;
		if(translation2 != 0){
			if(translation2 > 0){
				//Aqui va la animación de movimiento horizontal derecho
				SendMessage("DoAnim","izquierda");
				transform.Translate (translation2, 0, 0);
			}
			else{
				//Aqui va la animación de movimiento horizontal izquierdo
				SendMessage("DoAnim","walk");
				transform.Translate (translation2, 0, 0);
			}
		}
		else if(translation != 0){
			if(translation > 0){
				//Aqui va la animación de movimiento vertical arriba
				SendMessage("DoAnim","walk");
				transform.Translate (0,0 , translation);
			}
			else{
				//Aqui va la animación de movimiento vertical abajo
				SendMessage("DoAnim","espalda");
				transform.Translate (0,0 , translation);
			}
		}
		else{
			SendMessage("DoAnim","walk");
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