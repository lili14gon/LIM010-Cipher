const pasword=document.getElementById("password");
const ingresar=document.getElementById("btnIngresar");
const mensaje=document.getElementById("titulo");
const secLogin=document.getElementById("secLogin");
const secCodyDec=document.getElementById("secCodyDec");

ingresar.addEventListener('click',login);
let contador=0;
secCodyDec.style.display="none";

function login(){
	if(pasword.value==='LABORATORIA'){
    mensaje.innerHTML;
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

