#pragma strict
private var player : GameObject; //GameObject del jugador correspondiente que actua con este objeto
private var closeDistance : float = 0.5; // Distancia minima para interactar con el objeto
private var flag : boolean = false; // Flag de control para determinar el objeto actual
var actObject : String; //Comando de acción del objeto para manejar el evento
var manager : GameObject; //LevelManager de la escena

//Función que retorna true si el GameObject del jugador está a la distancia
//minima especificada
function  DistanceFromObject(){
	var onDistance : boolean = false;
	//Calcula la distancia absoluta ente los dos objetos
    var sqrLen = (player.transform.position - transform.position).sqrMagnitude;
    if(sqrLen < closeDistance){
    	onDistance = true;
        return onDistance;
    }
}

//Retorna el comando con el que se identifica este objeto
function DarComando(){
	return actObject;
}

//Verifica si el jugador está cerca para cambiar el objeto actual
function Update(){
	player = manager.GetComponent(Player_Manager).darActual(); 
	if(DistanceFromObject()){
		manager.GetComponent(Menu_script).ActualizarActualObject(this.gameObject);
		flag = true;
	}
	else if(flag){
		manager.GetComponent(Menu_script).ActualizarActualObject(null);
		flag = false;
	}
}
