#pragma strict
private var actual : GameObject;
var startPlayer : String; //Determina el jugados inicial del nivel
var dario : GameObject;
var diana : GameObject;
var cristina : GameObject;
var fabio : GameObject;
var camara : Camera;
var luz : GameObject;  

function Awake(){
	actual = GameObject.Find(startPlayer);
}

function Start () {
	//dario.GetComponent(MoverInput).MoverOff();
	//diana.GetComponent(MoverInput).MoverOff();
	//cristina.GetComponent(MoverInput).MoverOff();
	//fabio.GetComponent(MoverInput).MoverOff();
	actual.GetComponent(MoverInput).MoverOn();
}

function Update () {

}

function cambiarDario(){
	var posActual = actual.transform.position;
	var rotActual = actual.transform.rotation;
	actual.renderer.enabled = false;
	actual.collider.enabled = false;
	actual.GetComponent(MoverInput).MoverOff();
	//actual.GetComponent(MoverInput).SetTargetPosition(Vector3.zero);
	dario.transform.position = posActual;
	crearDario();
	dario.GetComponent(MoverInput).MoverOn();
	actual = dario;
	camara.GetComponent(SmoothFollow).ChangeTarget(actual.transform);
	luz.GetComponent(SmoothFollow).ChangeTarget(actual.transform);
	GetComponent(ScreenManager).CambiarCursor("CursorH");
}

function cambiarFabio(){
	var posActual = actual.transform.position;
	actual.renderer.enabled = false;
	actual.collider.enabled = false;
	actual.GetComponent(MoverInput).MoverOff();
	//actual.GetComponent(MoverInput).SetTargetPosition(Vector3.zero);
	fabio.transform.position = posActual;
	crearFabio();
	fabio.GetComponent(MoverInput).MoverOn();
	actual = fabio;
	camara.GetComponent(SmoothFollow).ChangeTarget(actual.transform);
	luz.GetComponent(SmoothFollow).ChangeTarget(actual.transform);
	GetComponent(ScreenManager).CambiarCursor("CursorFuerza");
}

function cambiarDiana(){
	var posActual = actual.transform.position;
	actual.renderer.enabled = false;
	actual.collider.enabled = false;
	actual.GetComponent(MoverInput).MoverOff();
	diana.transform.position = posActual;
	crearDiana();
	diana.GetComponent(MoverInput).MoverOn();
	actual = diana;
	camara.GetComponent(SmoothFollow).ChangeTarget(actual.transform);
	luz.GetComponent(SmoothFollow).ChangeTarget(actual.transform);
	GetComponent(ScreenManager).CambiarCursor("CursorCura");
}

function cambiarCristina(){
	var posActual = actual.transform.position;
	actual.renderer.enabled = false;
	actual.collider.enabled = false;
	actual.GetComponent(MoverInput).MoverOff();
	cristina.transform.position = posActual;
	crearCristina();
	cristina.GetComponent(MoverInput).MoverOn();
	actual = cristina;
	camara.GetComponent(SmoothFollow).ChangeTarget(actual.transform);
	luz.GetComponent(SmoothFollow).ChangeTarget(actual.transform);
	GetComponent(ScreenManager).CambiarCursor("CursorPeque");
}

function darActual(){
	return actual;
}

function darDario(){
	return dario;
}

function darDiana(){
	return diana;
}

function darCristina(){
	return cristina;
}

function darFabio(){
	return fabio;
}

function destruirFabio(){
	fabio.renderer.enabled = false;
	fabio.collider.enabled = false;
}

function destruirDario(){
	dario.renderer.enabled = false;
	dario.collider.enabled = false;
}

function destruirCristina(){
	cristina.renderer.enabled = false;
	cristina.collider.enabled = false;
}

function destruirDiana(){
	diana.renderer.enabled = false;
	diana.collider.enabled = false;
}

function crearFabio(){
	fabio.renderer.enabled = true;
	fabio.collider.enabled = true;
}

function crearDario(){
	dario.renderer.enabled = true;
	dario.collider.enabled = true;
}

function crearCristina(){
	cristina.renderer.enabled = true;
	cristina.collider.enabled = true;
}

function crearDiana(){
	diana.renderer.enabled = true;
	diana.collider.enabled = true;
}

function activarDario(){
	destruirDario();
	dario.GetComponent(MoverInput).MoverOn();
}

function activarDiana(){
	destruirDiana();
	diana.GetComponent(MoverInput).MoverOn();
}

function activarCristina(){
	destruirCristina();
	cristina.GetComponent(MoverInput).MoverOn();
}

function activarFabio(){
	destruirFabio();
	fabio.GetComponent(MoverInput).MoverOn();
}



