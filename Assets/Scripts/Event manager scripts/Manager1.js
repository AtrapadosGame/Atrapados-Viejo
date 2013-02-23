#pragma strict
	private var act_Player : GameObject;
	private var ply_posx : float = 500;
	private var ply_posy : float = 50;
	private var startTime : float;
	private var myStyle = new GUIStyle();
	//Conversaciones y textos
	private var noPuedo : boolean = false;//No puedo hacer eso aqui
	private var text1 : boolean = false;
	private var txt1 : String = "¡El hospital se está\n derrumbando, hay que\n salir pronto de aquí!"; 
	private var text2 : boolean = false;
	private var txt2 : String = "¡Esta cerrada,\n debe haber una llave\n para abrir la puerta!";
	private var text3 : boolean = false;
	private var txt3 : String = "¡Aquí debe estar\n la llave de la puerta!";
	private var text4 : boolean = false;
	private var txt4 : String = "¡Esta debe ser!";
	private var text5 : boolean = false;
	private var txt5 : String = "AUXILIOOOOOO";
	private var text6 : boolean = false;
	private var txt6a : String = "¡No puedo ayudar\n a esta persona, no puedo\n levantar los escombros!";
	private var txt6b : String = "¡Aquí hay alguien\n atrapado, seguramente Fabio\n podrá ayudar!";
	private var text7 : boolean = false;
	private var txt7 : String = "AYUDENMEEEEEE";
	private var text8 : boolean = false;
	private var txt8a : String = "¡Hay una chica\n bajo este armario!\n ¡Pero no puedo moverlo!";
	private var txt8b : String = "¡Aquí hay alguien\n atrapado, seguramente Fabio\n podrá ayudar!";
	private var text9 : boolean = false;
	private var txt9 : String = "¡Señor!\n  ¿Se encuentra bien?";
	private var text10 : boolean = false;
	private var txt10 : String = "Si doctor,\n estoy bien…";
	private var text11 : boolean = false;
	private var txt11 : String = "¡Otro derrumbe!\n ¿Ahora que hacemos?";
	private var text12 : boolean = false;
	private var txt12 : String = "No se preocupe Doctor,\n Yo puedo mover eso…";
	private var text13 : boolean = false;
	private var txt13 : String = "¡FABIO SE HA UNIDO\n A TU GRUPO!";
	private var text14 : boolean = false;
	private var txt14 : String = "Listo, ya podemos salir.";
	private var text15 : boolean = false;
	private var txt15 : String = "¡Si, pero hay\n más personas, debemos\n ir por ellas!";
	private var text16 : boolean = false;
	private var txt16 : String = "Listo";
	private var text17 : boolean = false;
	private var txt17 : String = "¡Encontramos el botiquín!\n Ya podemos continuar.";
	private var text18 : boolean = false;
	private var txt18 : String = "¡Gracias. Creí que\n iba a morir! Pero me duele\n mucho la pierna…";
	private var text19 : boolean = false;
	private var txt19 : String = "¡Gracias por ayudarme!\n Hay gente herida,\n deberíamos buscar\n un botiquín.";
	private var text20 : boolean = false;
	private var txt20 : String = "¡Ya esta!\n Ya podemos irnos.";
	private var text21 : boolean = false;
	private var txt21 : String = "¡Es la salida!\n Pero no, aun hay\n gente atrapada.";
	private var text22 : boolean = false;
	private var txt22 : String = "Obvio, el ascensor no\n funciona. Hay que buscar\n otra salida.";
	private var text23 : boolean = false;
	private var txt23 : String = "¡No podremos salir\n por aquí, hay que buscar\n otra salida!";
	private var text24 : boolean = false;
	private var txt24 : String = "¡Esta es una escalera de\n incendios pero la\n chapa esta rota!";
	private var text25 : boolean = false;
	private var txt25 : String = "¡Yo puedo trepar por\n esa ventanilla y abrirla\n desde el otro lado!";
	private var text26 : boolean = false;
	private var txt26 : String = "Puedo usar la\n llave que encontré\n para abrir la puerta";
	private var text27 : boolean = false;
	private var txt27 : String = "Fabio dijo que él\n podia mover esto.";
	private var text28 : boolean = false;
	private var txt28 : String = "Un botiquin,\n podria llegar a ser útil";
	private var text29 : boolean = false;
	private var txt29 : String = "Fin del juego,\n gracias por jugar.";
	private var text30 : boolean = false;
	private var txt30 : String = "Aqui hay un botiquin,\n Diana puede sacarlo.";
	private var text31 : boolean = false;
	private var txt31 : String = "Solo las enfermeras\n pueden abrir estos cajones.";
	private var text32 : boolean = false;
	private var txt32 : String = "DIANA SE HA UNIDO\n A TU GRUPO.";
	private var text33 : boolean = false;
	private var txt33 : String = "CRISTINA SE HA UNIDO\n A TU GRUPO.";
	//Flags de control
	private var flag1 : boolean = false;//Conseguir a Fabio
	private var flag2 : boolean = false;//Conseguir la llave
	private var flag3 : boolean = false;//Conseguir a diana
	private var cm1 : boolean = false;//Derrumbe fabio-dario
	private var cm2 : boolean = false;//Curar Cristina
	private var cm3 : boolean = false;//Cristina puerta emergencia
	private var gd : boolean = false;//Globo de dialogo
	private var gp : boolean = false;//Globo de pensamiento
	private var gdOp : boolean = false;//Globo de dialogo opuesto
	private var gdIn : boolean = false;//Globo de dialogo inverso
	private var fCaja : boolean = true;
	private var fCajon : boolean = true;
	
	//Texturas
	var cinematicas : Texture2D[] = new Texture2D[5];
	var texturaLlave : Texture2D;
	var texturaBotiquin : Texture2D;
	var globoPens : Texture2D;
	var globoDial : Texture2D;
	var globoDialOp : Texture2D;
	var globoDialIn : Texture2D;
	var cuadradroTxt : Texture2D;
	var myFont : Font;
	
	
	function Start () {
		startTime = GetComponent(Timer).StartTime();
		GetComponent(Player_Manager).destruirCristina();
		GameObject.Find("Derrumbe").renderer.enabled = false;
		GameObject.Find("Derrumbe").collider.enabled = false;
		GameObject.Find("Derrumbe2").renderer.enabled = false;
		GameObject.Find("Derrumbe2").collider.enabled = false;
    	myStyle.font = myFont;	
	}

	function Update() {
		act_Player = GetComponent(Player_Manager).darActual();
		var pTime : float = Time.time - startTime;
		if(pTime >= 1.5 && pTime <= 6.5 )
			StartCoroutine(ShowAndWaitUntilHide(16));
	}
	
	function OnGUI(){
	
		if(gp)
			GUI.Label (Rect (ply_posx, ply_posy, 200, 200), new GUIContent(globoPens));
		
		if(gd)
			GUI.Label (Rect (ply_posx, ply_posy, 200, 200), new GUIContent(globoDial));
			
		if(noPuedo){
			GUI.Label (Rect (200, 200, 200, 200), "No puedo hacer eso aqui.");
		}
		
		if(text1){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+32, 50, 50), txt1,myStyle);
		}
		
		if(text2){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+30, 50, 50), txt2,myStyle);
		}
		
		if(text3){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt3,myStyle);
		}
		
		if(text4){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt4,myStyle);
		}
		
		if(text5){
			GUI.Label (Rect (Screen.width - 200, 0, 200, 200), new GUIContent(globoDialOp));
			GUI.Label (Rect (Screen.width - 143, 50, 50, 50), txt5,myStyle);
		}
		
		if(text6 && !flag1){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+45, 50, 50), txt6a,myStyle);
		}
		else if(text6 && flag1){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt6b,myStyle);
		}
		
		if(text7){
			GUI.Label (Rect (Screen.width/2 - 200, 50, 200, 200), new GUIContent(globoDialIn));
			GUI.Label (Rect (Screen.width/2 - 150, 170, 50, 50), txt7,myStyle);
		}
		
		if(text8 && !flag1){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+45, 50, 50), txt8a,myStyle);
		}
		else if (text8 && flag1){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt8b,myStyle);
		}
		
		if(text9){
			gd = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt9,myStyle);
		}
		if(text10){
			GUI.Label (Rect (Screen.width/2 + 200, 50, 200, 200), new GUIContent(globoDialIn));
			GUI.Label (Rect (Screen.width/2 + 220, 170, 50, 50), txt10,myStyle);
		}
		if(text11){
			gd = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt11,myStyle);
		}
		if(text12){
			GUI.Label (Rect (Screen.width/2 + 200, 50, 200, 200), new GUIContent(globoDialIn));
			GUI.Label (Rect (Screen.width/2 + 220, 170, 50, 50), txt12,myStyle);
		}
		if(text13){
			GUI.Label (Rect (Screen.width - 280, 0, 256, 64), cuadradroTxt);
			GUI.Label (Rect (Screen.width - 276, 7, 256, 64), txt13,myStyle);
		}
		if(text14){
			gd = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt14,myStyle);
		}
		if(text15){
			GUI.Label (Rect (0, 50, 200, 200), new GUIContent(globoDialIn));
			GUI.Label (Rect (13, 143, 50, 50), txt15,myStyle);
		}
		if(text16){
			gd = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt16,myStyle);
		}
		if(text17){
			gd = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt17,myStyle);
		}
		if(text18){
			GUI.Label (Rect (150, Screen.height - 250, 200, 200), new GUIContent(globoDialIn));
			GUI.Label (Rect (155, Screen.height - 150, 50, 50), txt18,myStyle);
		}
		if(text19){
			GUI.Label (Rect (Screen.width/2 + 200, 150, 200, 200), new GUIContent(globoDialIn));
			GUI.Label (Rect (Screen.width/2 + 220, 260, 50, 50), txt19,myStyle);
		}
		if(text20){
			gd = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt20,myStyle);
		}
		if(text21){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt21,myStyle);
		}
		if(text22){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt22,myStyle);
		}
		if(text23){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt23,myStyle);
		}
		if(text24){
			gd = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt24,myStyle);
		}
		if(text25){
			GUI.Label (Rect (150, 50, 200, 200), new GUIContent(globoDialIn));
			GUI.Label (Rect (163, 143, 50, 50), txt25,myStyle);
		}
		if(text26){
			gp = true;
			GUI.Label (Rect (ply_posx + 13, ply_posy+43, 50, 50), txt26,myStyle);
		}
		if(text27){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt27,myStyle);
		}
		if(text28){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt28,myStyle);
		}
		if(text29){
			gd = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt29,myStyle);
		}
		if(text30){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt30,myStyle);
		}
		if(text31){
			gp = true;
			GUI.Label (Rect (ply_posx + 10, ply_posy+50, 50, 50), txt31,myStyle);
		}
		if(text32){
			GUI.Label (Rect (Screen.width - 280, 0, 256, 64), cuadradroTxt);
			GUI.Label (Rect (Screen.width - 276, 7, 256, 64), txt32,myStyle);
		}
		if(text33){
			GUI.Label (Rect (Screen.width - 280, 0, 256, 64), cuadradroTxt);
			GUI.Label (Rect (Screen.width - 276, 7, 256, 64), txt33,myStyle);
		}
		
		if(cm1){
			GUI.Label (Rect (0,50, Screen.width, Screen.height), cinematicas[0]);
		}
		if(cm2){
			GUI.Label (Rect (0, 50, Screen.width, Screen.height), cinematicas[1]);
		}
		if(cm3){
			GUI.Label (Rect (0, 50, Screen.width, Screen.height), cinematicas[2]);
		}
	}
	
	//Implementación de la función Trigger()
	function EventTrigger(objName : String){
		if(objName.Equals("Auxilio")){
			StartCoroutine(ShowAndWaitUntilHide(5));
		}
		if(objName.Equals("Ayuda")){
			StartCoroutine(ShowAndWaitUntilHide(7));
		}
		if(objName.Equals("Fabio")){
			StartCoroutine(ShowAndWaitUntilHide(9));
			GameObject.Find("TFabio").GetComponent(Interactor_Trigger).apagar();
			StartCoroutine(ShowAndWaitUntilHide(10));
		}
		if(objName.Equals("Salida")){
			var fabio : boolean = GetComponent(Menu_script).EstaPersonaje("Fabio");
			var diana : boolean = GetComponent(Menu_script).EstaPersonaje("Diana");
			var cris : boolean = GetComponent(Menu_script).EstaPersonaje("Cristina");
			if(fabio && diana && cris){
				text22 = true;
				yield WaitForSeconds(5);
				text22 = false;
				gp = false;
				Destroy(GameObject.Find("Lsalida"));
				GameObject.Find("TSalida").GetComponent(Interactor_Trigger).apagar();
			}
			else{
				text21 = true;
				yield WaitForSeconds(5);
				text21 = false;
				gp = false;
			}
		}
		if(objName.Equals("Salida2")){
		print("salida2");
		fabio = GetComponent(Menu_script).EstaPersonaje("Fabio");
		diana = GetComponent(Menu_script).EstaPersonaje("Diana");
		cris = GetComponent(Menu_script).EstaPersonaje("Cristina");
		print(fabio+ ""+diana+""+cris);
			if(fabio && diana && cris){
				var der = GameObject.Find("Derrumbe2");
				der.renderer.enabled = true;
				der.collider.enabled = true;
				der.audio.Play();
				yield WaitForSeconds(0.5);
				text23 = true;
				yield WaitForSeconds(3);
				text23 = false;
				gp = false;
				GameObject.Find("Lsalida2").transform.position = new Vector3(-10.3,0.5,-12);
				GameObject.Find("TSalida2").GetComponent(Interactor_Trigger).apagar();
			}
			else{
				text21 = true;
				yield WaitForSeconds(5);
				text21 = false;
			}
		}
		
		if(objName.Equals("End")){
			text29 = true;
			yield WaitForSeconds(3);
			text29 = false;
			gd= false;
			Application.LoadLevel("cambio nivel");
		}
		if(objName.Equals("Sonido")){
			var son = GameObject.Find("TSonido");
			son.audio.Play();
		}
	}
	
	//Imlementación de la funcion Switch()
	function EventSwitch(comando : String){
		var habID;
		print(comando);
		//Caja donde esta la llave
		if(comando.Equals("Caja") && fCaja){
			fCaja = false;
			GetComponent(Menu_script).agregarItem(texturaLlave, "llave");
			StartCoroutine(ShowAndWaitUntilHide(3));
			flag2 = true;
		}
		//Puerta de la primera habitación
		if(comando.Equals("PuertaS")){
			StartCoroutine(ShowAndWaitUntilHide(4));
			Screen.showCursor = true;
			GameObject.Find("CursorLlave").GetComponent(CursorControlLlave).DesactivarCursor();
		}
		
		if(comando.Equals("Puerta")){
			if(flag2)
				StartCoroutine(ShowAndWaitUntilHide(14));
			else
				StartCoroutine(ShowAndWaitUntilHide(2));
		}
		
		//Cajon donde esta el botiquin
		if(comando.Equals("Cajon") && fCajon){
			if(!(act_Player.GetComponent(Player).Nombre().Equals("Diana"))){
				if(flag3){
					text30 = true;
					yield WaitForSeconds(5);
					text30 = false;
					gp = false;
				}
				else{
					text31 = true;
					yield WaitForSeconds(5);
					text31 = false;
					gp = false;
				}
			}
			else{
				fCajon = false;
				GetComponent(Menu_script).agregarItem(texturaBotiquin, "Botiquin");
				StartCoroutine(ShowAndWaitUntilHide(13));
			}
		}
		//Derrumbe de la habitacion donde esta fabio
		if(comando.Equals("Derrumbe")){
			if(act_Player.GetComponent(Player).Nombre().Equals("Fabio")){
				StartCoroutine(ShowAndWaitUntilHide(11));
				GameObject.Find("CursorFuerza").GetComponent(CursorControl).DesactivarCursor();
			}
			else if(act_Player.GetComponent(Player).Nombre().Equals("Dario")){
				text27 = true;
				yield WaitForSeconds(5);
				text27 = false;
				gp = false;
			}
		}
		//Armario donde esta atrapada cristina
		if(comando.Equals("Armario")){
			if(!(act_Player.GetComponent(Player).Nombre().Equals("Fabio"))){
				StartCoroutine(ShowAndWaitUntilHide(8));
			}
			else{
				Destroy(GameObject.Find("Armario"));
				GameObject.Find("TAyuda").GetComponent(Interactor_Trigger).apagar();
				GameObject.Find("CursorFuerza").GetComponent(CursorControl).DesactivarCursor();
				GetComponent(Player_Manager).crearCristina();
				cm1 = true;
				yield WaitForSeconds(5);
				cm1 = false;
				text18 = true;
				yield WaitForSeconds(5);
				text18 = false;
			}
		}
		//Escombros donde esta atrapada diana
		if(comando.Equals("Escombros")){
			if(act_Player.GetComponent(Player).Nombre().Equals("Fabio")){
				StartCoroutine(ShowAndWaitUntilHide(12));
				Destroy(GameObject.Find("Escombros"));
				Destroy(GameObject.Find("ParedOC"));
				GameObject.Find("TAuxilio").GetComponent(Interactor_Trigger).apagar();
				GameObject.Find("CursorFuerza").GetComponent(CursorControl).DesactivarCursor();
				flag3 = true;
			}
			else if(act_Player.GetComponent(Player).Nombre().Equals("Dario"))
				StartCoroutine(ShowAndWaitUntilHide(6));
		}
		//Curar a Cristina
		if(comando.Equals("Cristina")){
			if(act_Player.GetComponent(Player).Nombre().Equals("Diana")){
				cm2 = true;
				yield WaitForSeconds(5);
				cm2 = false;
				text20 = true;
				yield WaitForSeconds(5);
				text20 = false;
				text33 = true;
				gd = false;
				GetComponent(Menu_script).ActivarCristina();
				GetComponent(Player_Manager).darCristina().GetComponent(Interactor_Click).enabled = false;
				yield WaitForSeconds(5);
				text33 = false;
			}
		}
		
		if(comando.Equals("Emergencia")){
			if(act_Player.GetComponent(Player).Nombre().Equals("Cristina")){
				cm3 = true;
				Destroy(GameObject.Find("Emergencia"));
				GameObject.Find("CursorPeque").GetComponent(CursorControl).DesactivarCursor();
				yield WaitForSeconds(5);
				cm3 = false;
			}
			else{
				text24 = true;
				yield WaitForSeconds(5);
				text24 = false;
				gd = false;
				if(GetComponent(Menu_script).EstaPersonaje("Cristina")){
					text25 = true;
					yield WaitForSeconds(5);
					text25 = false;
				}
			}	
		}
	}
	
	//Implementación de la funcion Item() de la interfaz
	function EventItem(objName : String){
		//Llave
		if(objName.Equals("llave")){
			Screen.showCursor = false;
			GameObject.Find("CursorLlave").GetComponent(CursorControlLlave).ActivarCursor();
			GameObject.Find("Puerta").GetComponent(Interactor_Click).FlagOff();	
		}
	}
	
	function ShowAndWaitUntilHide(textID : int){
		if(textID == 2){
			text2 = true;
			yield WaitForSeconds(5);
			text2 = false;
			gp = false;
		}
		
		if(textID == 3){
			text3 = true;
			yield WaitForSeconds(5);
			text3 = false;
			gp = false;
		}
		
		if(textID == 4){
			var puerta : GameObject = GameObject.Find("Puerta");
			puerta.audio.Play();
			yield WaitForSeconds(0.5);
			Destroy(puerta);
		}
		if(textID == 5){
			text5 = true;
			yield WaitForSeconds(2);
			text5 = false;
			gd = false;
		}
		if(textID == 6){
			text6 = true;
			yield WaitForSeconds(5);
			text6 = false;
			gp = false;
		}
		if(textID == 7){
			text7 = true;
			yield WaitForSeconds(2);
			text7 = false;
			gd = false;
		}
		if(textID == 8){
			text8 = true;
			yield WaitForSeconds(5);
			text8 = false;
			gp = false;
		}
		if(textID == 9){
			text9 = true;
			yield WaitForSeconds(3);
			text10 = true;
			yield WaitForSeconds(2);
			text9 = false;
			gd = false;
			yield WaitForSeconds(3);
			text10 = false;
		}
		if(textID == 10){
			yield WaitForSeconds(8.02);
			var der = GameObject.Find("Derrumbe");
			der.renderer.enabled = true;
			der.collider.enabled = true;
			der.audio.Play();
			yield WaitForSeconds(0.5);
			text11 = true;
			yield WaitForSeconds(3);
			text12 = true;
			yield WaitForSeconds(2);
			text11 = false;
			text13 = true;
			text12 = false;
			gd = false;
			GetComponent(Menu_script).ActivarFabio();
			yield WaitForSeconds(5);
			text13 = false;
		}
		if(textID == 11){
			cm1 = true;
			yield WaitForSeconds(5);
			cm1 = false;
			Destroy(GameObject.Find("Derrumbe"));
			yield WaitForSeconds(1);
			text14 = true;
			yield WaitForSeconds(5);
			text14 = false;
			gd = false;
			text15 = true;
			yield WaitForSeconds(5);
			text15 = false;
			flag1 = true;
		}
		
		if(textID == 12){
			cm1 = true;
			yield WaitForSeconds(5);
			cm1 = false;
			text19 = true;
			yield WaitForSeconds(5);
			text19 = false;
			text32 = true;
			yield WaitForSeconds(5);
			text32 = false;
			GetComponent(Menu_script).ActivarDiana();
		}
		if(textID == 13){
			text17 = true;
			yield WaitForSeconds(5);
			text17 = false;
			gd = false;
		}
		if(textID == 14){
			text26 = true;
			yield WaitForSeconds(5);
			text26 = false;
			gp = false;
		}
		if(textID == 15){
			noPuedo = true;
			yield WaitForSeconds(5);
			noPuedo = false;
		}
		if(textID == 16){
			text1 = true;
			yield WaitForSeconds(5);
			text1 = false;
			gp = false;
		}
	}
	
	function DarCinematica(index : int){
		return cinematicas[index];
	}