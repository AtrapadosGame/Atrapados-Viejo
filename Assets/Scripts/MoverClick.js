#pragma strict
//Mueve el objeto hacia la posición donde se hizo click con el mouse
 
private var mover:boolean = true;// Determina la posibilidad de moverse o no
private var targetPosition:Vector3;//Posición a la cual moverse
var smooth:int; // Determina la velocidad de movimiento

function Awake(){
	targetPosition = Vector3.zero;
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Mouse0) && mover)
	{
		//Crea un raycast hasta la posición deseada
		var playerPlane = new Plane(Vector3.up, transform.position);
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hitdist = 0.0;
 
		if (playerPlane.Raycast (ray, hitdist)) {
			var targetPoint = ray.GetPoint(hitdist);
			targetPosition = ray.GetPoint(hitdist);
			//Rota para mirar ahacia la posición deseada
			//var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
			//transform.rotation = targetRotation;
		}
		
		
	}
 	//Interpola la posición hasta llegar al destino
 	if(targetPosition != Vector3.zero)
			transform.position = Vector3.MoveTowards(transform.position, targetPosition, Time.deltaTime * smooth);
}

function OnCollisionEnter(){
	targetPosition = Vector3.zero;
	gameObject.rigidbody.velocity = Vector3.zero;
}

function SetTargetPosition(nTarget : Vector3){
	targetPosition = nTarget;
}

function MoverOff(){
	mover = false;
}

function MoverOn(){
	mover = true;
}