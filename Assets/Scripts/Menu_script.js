#pragma strict
//Menu_script: Este script controla las acciones del menu de personajes en la interfaz de usuario

private var player : GameObject; //Jugador activo en un momento dado
private var actualObject : GameObject;//Objecto actual con el que es posible efectuar una habilidad
private var itemList : Array = new Array(); //Guarda las texturas de los items que se recogen
private var actionList : Array = new Array(); //Guarda los comandos de accion de los items que se recogen
private var lastTooltip : String = " "; //Tooltip para controlar los mensajes del menu

// Las siguientes variables determinan el posicionamiento de los botones
private var posX : int;
private var posY : int;
private var ancho : int;
private var alto : int;
private var separacion : int;

//Las siguientes variables controlan la aparicion de los botones de habilidad
private var pausa :boolean = false;
private var noPuedo : boolean = false;
private var noHay : boolean = false;
private var hMano : boolean = false;
private var hFuerza : boolean = false;
private var hCurar : boolean = false;
private var hChiquita : boolean = false;

//Las siguientes variables determinan si el personaje en cuestión está dentro del grupo
// y es posible seleccionarlo para usarlo
var estaDario : boolean = false;
var estaDiana : boolean = false;
var estaCristina : boolean= false;
var estaFabio : boolean = false;

//Las siguientes variables determinan las texturas de los botones de cada personaje
var texturaDario : Texture2D;
var texturaDiana : Texture2D;
var texturaCristina : Texture2D;
var texturaFabio : Texture2D;
var texturaMano : Texture2D;
var texturaFuerza : Texture2D;
var texturaCurar : Texture2D;
var texturaChiquita : Texture2D;
var reiniciar : Texture2D;
var home : Texture2D;

//Inicializa el jugador activo al principio del nivel
function Start () {
	ancho = (Screen.width/8) - 50;
	alto = Screen.height/8;
	separacion = 3;
	player = GetComponent(Player_Manager).darActual();
	hMano = true;
}

function Update (){
}

//Dibuja el menu y responde a los eventos de los botones
function OnGUI () {
	posX = 0;
	posY = 0;
	GUI.depth = 0;
	
	if(!pausa){
		if(noPuedo){
			GUI.Label (Rect (200, 200, 200, 200), "No puedo hacer eso");
		}
		if(noHay){
			GUI.Label (Rect (200, 200, 200, 200), "¡Debemos buscar un botiquín!");
		}
	
		// Crea los botones de cada personaje
		if(estaDario){
			var bttDario = GUI.Button (new Rect (posX,posY,ancho,alto),GUIContent (texturaDario,"Boton"));
			posX += (ancho + separacion);
		}
	
		if(estaDiana){
			var bttDiana = GUI.Button (new Rect (posX,posY,ancho,alto),GUIContent (texturaDiana,"Boton"));
			posX += (ancho + separacion);
		}
	
		if(estaCristina){
			var bttCristina = GUI.Button (new Rect (posX,posY,ancho,alto),GUIContent (texturaCristina,"Boton"));
			posX += (ancho + separacion);
		}
	
		if(estaFabio){
			var bttFabio = GUI.Button (new Rect (posX,posY,ancho,alto),GUIContent (texturaFabio,"Boton"));
			posX += (ancho + separacion);
		}
	
		//Dibuja periodicamente los botones de los items
		for(var i:int=0;i < itemList.length;i++){
			var tex : Texture2D = itemList[i]; 
			if(GUI.Button(new Rect(i*ancho,Screen.height - alto,ancho,alto), GUIContent (tex,"Boton"))){
				SendMessage ("EventItem",actionList[i]);
			}
		}
	
		//Maneja los eventos de presionar algún boton de la interfaz
		if(bttDario && estaDario){
			SendMessage ("DarioButton", SendMessageOptions.DontRequireReceiver);
		}
	
		if(bttDiana && estaDiana){
			SendMessage ("DianaButton", SendMessageOptions.DontRequireReceiver);
		}
	
		if(bttCristina && estaCristina){
			SendMessage ("CristinaButton", SendMessageOptions.DontRequireReceiver);
		}
	
		if(bttFabio && estaFabio){
			SendMessage ("FabioButton", SendMessageOptions.DontRequireReceiver);
		}
	}
	else{
		if(GUI.Button (new Rect (Screen.width   - 50,50,150,50),GUIContent (reiniciar,"Boton"),"Reiniciar nivel")){
			Time.timeScale=1;
			pausa = false;
			Application.LoadLevel("Nivel1");
		}
		if(GUI.Button (new Rect (Screen.width - 50,100,150,50),GUIContent (home,"Boton"),"Salir del juego")){
			Time.timeScale=1;
			pausa = false;
			Application.LoadLevel("menu");
		}
	}
	 //Dibuja el boton de pausa
    if(GUI.Button (new Rect (Screen.width - 50,0,50,50),GUIContent (texturaChiquita,"Boton"))){
    	if(!pausa){
    		Time.timeScale=0;
    		pausa = true;
		}
		else{
			Time.timeScale=1;
			pausa = false;
		}
    }
	
	//Inicializa y maneja el tooltip de cada boton
	if (Event.current.type == EventType.Repaint && GUI.tooltip != lastTooltip) {        
    	if (lastTooltip != "") {//Maneja los eventos de OnMouseOut
        	SendMessage (lastTooltip + "OnMouseOut", SendMessageOptions.DontRequireReceiver);      
    	} 

    	if (GUI.tooltip != "") {//Maneja los eventos de OnMouseOver
       		SendMessage (GUI.tooltip + "OnMouseOver", SendMessageOptions.DontRequireReceiver);
    	}

    	lastTooltip = GUI.tooltip; 
	}
}

//Estas funciones activan o desactivan algún personaje dentro del grupo
function ActivarDario(){
	estaDario = true;
	GetComponent(Player_Manager).activarDario();
}

function ActivarDiana(){
	estaDiana = true;
	hCurar = true;
	GetComponent(Player_Manager).activarDiana();
}

function ActivarCristina(){
	estaCristina = true;
	hChiquita = true;
	GetComponent(Player_Manager).activarCristina();
}

function ActivarFabio(){
	estaFabio = true;
	hFuerza = true;
	GetComponent(Player_Manager).activarFabio();
}

function DesactivarDario(){
	estaDario = false;
}

function DesactivarDiana(){
	estaDiana = false;
}

function DesactivarCristina(){
	estaCristina = false;
}

function DesactivarFabio(){
	estaFabio = false;
}

// Estas funciones manejan los eventos que ocurren si el cursor está sobre los botones de personajes
// Evita que los personajes se muevan cuando se hace click en un boton
function BotonOnMouseOver() {
	apagarMovimiento();
}

//Reactivan el movimiento cuando el cursor ya no está sobre el boton
function BotonOnMouseOut () {
	encenderMovimiento();
}

// Estas funciones controlan la accion de los botones
// Cambian el control del personaje actual
function DarioButton(){
	GetComponent(Player_Manager).cambiarDario();
	player = GetComponent(Player_Manager).darActual();
}

function DianaButton(){
	GetComponent(Player_Manager).cambiarDiana();
	player = GetComponent(Player_Manager).darActual();
}

function CristinaButton(){
	GetComponent(Player_Manager).cambiarCristina();
	player = GetComponent(Player_Manager).darActual();
}

function FabioButton(){
	GetComponent(Player_Manager).cambiarFabio();
	player = GetComponent(Player_Manager).darActual();
}

//Estas funciones permiten controlar el movimiento cuando se presiona un boton 
function apagarMovimiento(){
	player.GetComponent(MoverInput).MoverOff();
}

function encenderMovimiento(){
	player.GetComponent(MoverInput).MoverOn();
}

//Permite agregar nuevos items al menu
function agregarItem(texture : Texture2D, command : String){
	itemList.Add(texture);
	actionList.Add(command);
}

function sacarItem(command : String){
}

function ActualizarActualObject(nuevo: GameObject){
	actualObject = nuevo;
}

function EstaPersonaje(name : String){
	if(name.Equals("Dario"))
		return estaDario;
	if(name.Equals("Diana"))
		return estaDiana;
	if(name.Equals("Cristina"))
		return estaCristina;
	if(name.Equals("Fabio"))
		return estaFabio;
}

function EstaItem(comando : String){
	var esta : boolean = false;
	for(var i : int = 0; i < actionList.length; i++){
		var actual : String = actionList[i];
		if(actual.Equals(comando))
			esta = true;
	}
	return esta;
}

function ShowAndWaitUntilHide(textID : int){
	if(textID == 1){
		noPuedo = true;
		yield WaitForSeconds(5);
		noPuedo = false;
	}
	if(textID == 2){
		noHay = true;
		yield WaitForSeconds(5);
		noHay = false;
	}
}