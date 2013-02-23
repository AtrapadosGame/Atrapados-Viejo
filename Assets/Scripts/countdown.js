var countDownSeconds : int;

var m1 : UnityEngine.Transform;
var textColor = Color.black;

private var startTime;
private var restSeconds : int;
private var roundedRestSeconds : int;
private var displaySeconds : int;
private var displayMinutes : int;



function Awake() {
    startTime = Time.time;
    guiText.material.color = textColor;

}

function OnGUI () {


    //make sure that your time is based on when this script was first called
    //instead of when your game started
    var guiTime = Time.time - startTime;

    restSeconds = countDownSeconds - (guiTime);

    //display messages or whatever here -->do stuff based on your timer
    if (restSeconds == 890) {
        print ("se esta derrumbando");
    }
    if (restSeconds == 700) {
        print ("se esta derrumbando!");
    }
    if (restSeconds == 600) {
        print ("no vamos a poder salir!!");
    }
    if (restSeconds == 0) {
        print ("Time is Over");
		
		Application.LoadLevel (5);
		
		//Destroy(m1.gameObject);
        //do stuff here
    }

    //display the timer
    roundedRestSeconds = Mathf.CeilToInt(restSeconds);
    displaySeconds = roundedRestSeconds % 60;
    displayMinutes = roundedRestSeconds / 60; 

    text = String.Format ("{0:00}:{1:00}", displayMinutes, displaySeconds); 

 //GUI.Label (Rect (400, 25, 100, 30), text);

guiText.text = text;
}


//guiText.text = "ACELERE HUEVON!!!!!!!!!!!!!!!!!!!!";
//yield WaitForSeconds (2);
//guiText.text = "";