#pragma strict
// Interfaz que comunica los Interactors con todos los scripts Manager# que
// implementen estos métodos

// Evento que maneja las acciones relacionadas a Interactor_switch
function Switch(objName : String){
	SendMessage("EventSwitch", objName);
}

// Evento que maneja las acciones realcionadas a Interactor trigger
function Trigger(objName : String){
	SendMessage("EventTrigger", objName);
}

// Evento que maneja las accciones realizadas con items del inventario
function Item(objName : String){
	SendMessage ("EventItem",objName);
}

//Retorna la image cinemática con el indice pedido, la imagen tiene que existir en
// el arreglo correspondiento dentro del Manager correspondiente
function Cinematicas(index : String){
	SendMessage("DarCinematica", index);
}
