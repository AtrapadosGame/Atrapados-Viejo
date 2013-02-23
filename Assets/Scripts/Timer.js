#pragma strict

private var startTime : float;
private var restSeconds : int;
private var roundedRestSeconds : int;
private var displaySeconds : int;
private var displayMinutes : int;
var myFont : Font;

var countDownSeconds : int;

function Awake() {
    startTime = Time.time;
}

function OnGUI () {
    //make sure that your time is based on when this script was first called
    //instead of when your game started
    var guiTime = Time.time - startTime;
    restSeconds = countDownSeconds - (guiTime);
    if (restSeconds == 0) {
        Application.LoadLevel ("Game Over");
    }

    //display the timer
    roundedRestSeconds = Mathf.CeilToInt(restSeconds);
    displaySeconds = roundedRestSeconds % 60;
    displayMinutes = roundedRestSeconds / 60; 

    var text : String = String.Format ("{0:00}:{1:00}", displayMinutes, displaySeconds);
    var myStyle = new GUIStyle();
    myStyle.font = myFont;
    var anchoLabel:int = Screen.width/8;
    var altoLabel:int = Screen.height/8; 
    GUI.Label (Rect (Screen.width/2 - anchoLabel, 0, anchoLabel, altoLabel), text,myStyle);
}

function StartTime(){
	return startTime;
}