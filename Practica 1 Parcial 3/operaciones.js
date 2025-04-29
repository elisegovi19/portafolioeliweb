function sumar() {
	var n1=document.getElementById("num1").value; /*value es para entrada*/
    var n2=document.getElementById("num2").value;
    var res=parseFloat(n1)+parseFloat(n2);
    document.getElementById("resultado").innerHTML=res;/*innerHTML es para salida*/
}
function restar() {
	var n1=document.getElementById("num1").value; /*value es para entrada*/
    var n2=document.getElementById("num2").value;
    var res=parseFloat(n1)-parseFloat(n2);
    document.getElementById("resultado").innerHTML=res;/*innerHTML es para salida*/
}
function multiplicar() {
	var n1=document.getElementById("num1").value; /*value es para entrada*/
    var n2=document.getElementById("num2").value;
    var res=parseInt(n1)*parseInt(n2);
    document.getElementById("resultado").innerHTML=res;/*innerHTML es para salida*/
}
function dividir() {
	var n1=document.getElementById("num1").value; /*value es para entrada*/
    var n2=document.getElementById("num2").value;
    var res=parseFloat(n1)/parseFloat(n2);
    document.getElementById("resultado").innerHTML=res;/*innerHTML es para salida*/
}