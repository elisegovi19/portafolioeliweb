function leer() {
	//referencia por pseudoclase
	var nombre=document.forms["formulario"].elements[0].value;
    
    //refrencia por id
    var clave=document.getElementById("pass").value;

    //referencia por tagname
    var car=document.getElementsByTagName("select")[0].value;
    
    //referencia por nombre
    var gen=document.getElementsByName("genero");
    var i,g;
    for(i=0; i<gen.length; i++){
    	if (gen[i].checked){
    		g=gen[i].value;
    	}
    }

    //referencia por id
    var p=document.getElementById("privacidad").checked;

    document.getElementById("datos").innerHTML=
    "\<br>Tu nombre es: "+nombre+
    "\<br>Contraseña: "+clave+
    "\<br>Tu carrera es: "+car+
    "\<br>Tu género es:"+g+
    "\<br>Aceptó el acuerdo: "+p;


}