var guiskin: GUISkin;
private var guienable:boolean=true;
//Just provide any value here and other buttons will be set accordingly
static var buttonWidth: int=150;
static var buttonHeight: int=75;


function OnGUI ()
{
	GUI.skin=guiskin;	
	
	if(GUI.Button(Rect(20,470,buttonWidth,buttonHeight),""))
	{
		Application.LoadLevel("menu");
	}	
	
	
		
   	
   
}//end of GUI
