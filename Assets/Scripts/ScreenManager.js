#pragma strict
//Script que controla el comportamiento de la pantalla y los cursores del juego
private var cursor : String = "CursorH"; 

function Awake () {
	Screen.SetResolution (960, 600, false);
}

function Cursor(){
	return cursor;
}

function CambiarCursor(nCursor : String){
	cursor = nCursor;
}