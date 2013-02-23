var guiskin: GUISkin;
var guiskin2: GUISkin;
var guiskin3: GUISkin;
private var guienable:boolean=true;
//Just provide any value here and other buttons will be set accordingly
static var buttonWidth: int=300;
static var buttonHeight: int=150;


function OnGUI ()
{
	GUI.skin=guiskin;	
	
	if(GUI.Button(Rect(20,250,buttonWidth,buttonHeight),""))
	{
		Application.LoadLevel("cinematica");
	}	
	
	GUI.skin=guiskin2;	
	if(GUI.Button(Rect(20,350,buttonWidth,buttonHeight),""))
	{	
		Application.LoadLevel("instructions1");
	}	
   	
   	GUI.skin=guiskin3;	
	if(GUI.Button(Rect(20,450,buttonWidth,buttonHeight),""))
	{	
		Application.LoadLevel("creditos");
	}	

   
}//end of GUI
 



