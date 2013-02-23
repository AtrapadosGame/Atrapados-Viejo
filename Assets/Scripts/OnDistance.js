#pragma strict
var closeDistance : float = 0.5;

//Función que retorna true si el GameObject del jugador está a la distancia
//minima especificada
function  DistanceFromObject(object1 : GameObject, object2 : GameObject){
	var onDistance : boolean = false;
	//Calcula la distancia absoluta ente los dos objetos
    var sqrLen = (object1.transform.position - object2.transform.position).sqrMagnitude;
    if(sqrLen < closeDistance){
    	onDistance = true;
    }
    return onDistance;
}