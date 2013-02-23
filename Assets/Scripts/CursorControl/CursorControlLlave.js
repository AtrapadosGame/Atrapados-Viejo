#pragma strict

function Start () {
	guiTexture.enabled = false;
}

function Update () {
	// gets the current cursor position as a Vector2 type variable
	var pos = Input.mousePosition;
	// feed its x and y positions back into the GUI Texture object’s parameters
	guiTexture.pixelInset.x = pos.x-480;
	guiTexture.pixelInset.y = pos.y-326; // offset to top
}

function ActivarCursor(){
	Screen.showCursor = false;
	guiTexture.enabled = true;
}

function DesactivarCursor(){
	guiTexture.enabled = false;
	Screen.showCursor = true;
}