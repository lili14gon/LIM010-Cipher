const pasword=document.getElementById("password");
const respuesta=document.getElementById("idRespuesta");
const secLogin=document.getElementById("secLogin");
const secCodyDec=document.getElementById("secCodyDec");
const secResultado=document.getElementById("secResultado");

const ingresar=document.getElementById("btnIngresar");
const codificar=document.getElementById("btnCodificar");
const decodificar=document.getElementById("btnDecodificar");
const volver=document.getElementById("btnVolver");
const finalizar=document.getElementById("btnFinalizar");


codificar.addEventListener('click',cipher.encode);
decodificar.addEventListener('click',cipher.decode);
ingresar.addEventListener('click',Login);
volver.addEventListener('click',Volver);
finalizar.addEventListener('click',Finalizar);

let contador=0;
//secCodyDec.style.display="none";
function Login(){
	if(pasword.value==='LABORATORIA'){
    //mensaje.innerHTML;
    secLogin.style.display="none";
    secCodyDec.style.display="flex";
            //  alert("correcto");
	}
	if(password.value!=='LABORATORIA') {
		contador=contador+1;
	    if (contador<=2){
	    	alert("incorrecto");
	    }
	    else{
	    	alert("Ya utilizaste todos tus intentos, en este momento no podrás ingresar");
	    }
	}
}
function Volver(){
 secLogin.style.display="none";
 secCodyDec.style.display="flex";
 secResultado.style.display="none";
 }

 function Finalizar(){
 secLogin.style.display="flex";
 secCodyDec.style.display="none";
 secResultado.style.display="none";

 }



