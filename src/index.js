const pasword=document.getElementById("password");
// const respuesta=document.getElementById("idResultado");

const secLogin=document.getElementById("secLogin");
const secCodyDec=document.getElementById("secCodyDec");
const secResultado=document.getElementById("secResultado");
const secBloqueo=document.getElementById("secBloqueo");

const ingresar=document.getElementById("btnIngresar");
const codificar=document.getElementById("btnCodificar");
const decodificar=document.getElementById("btnDecodificar");
const volver=document.getElementById("btnVolver");
const finalizar=document.getElementById("btnFinalizar");
 // secBloqueo.style.display="none";


// codificar.addEventListener('click',cipher.encode);

codificar.addEventListener('click',()=>{

	 secLogin.style.display="none";
     secCodyDec.style.display="none";
     secResultado.style.display="block";  

    const llave=document.getElementById("number").value;
    const texto=document.getElementById("menCodyDec").value;

    const respuesta=document.getElementById("idResultado");
    let Resultado=cipher.encode(llave,texto);

    respuesta.innerHTML=(Resultado);

});

decodificar.addEventListener('click',()=>{
    secLogin.style.display="none";
    secCodyDec.style.display="none";
    secResultado.style.display="block";

    const llave=document.getElementById("number");
    const texto=document.getElementById("menCodyDec").value;

    const respuesta=document.getElementById("idResultado");
    let Resultado=cipher.decode(llave.value,texto.value);

    respuesta.innerHTML=(Resultado);

});



ingresar.addEventListener('click',Login);
volver.addEventListener('click',Volver);
finalizar.addEventListener('click',Finalizar);

let contador=0;
//secCodyDec.style.display="none";
function Login(){
  
	if(pasword.value==='LABORATORIA'){
    //mensaje.innerHTML;
    secLogin.style.display="none";
    secCodyDec.style.display="block";
   
            //  alert("correcto");
	}

	if(password.value!=='LABORATORIA') {
		if(pasword.value===''){
			alert("ingresar pasword");
		}
		else{
		contador=contador+1;
	           if (contador<=2){
	    	       alert("incorrecto");
	    	
	             }
	           else{

	           	    //document.write("Ya utilizaste todos tus intentos, en este momento no podrás ingresar");

	    	        // alert("Ya utilizaste todos tus intentos, en este momento no podrás ingresar");
	    	        // secLogin.style.display="none";

	    	        secLogin.style.display="none";
	    	        secBloqueo.style.display="block";

	    	       }
	    }
 
    }
     

 document.getElementById("password").value="";
}
function Volver(){
 secCodyDec.style.display="block";
 secLogin.style.display="none";
 secResultado.style.display="none";
 document.getElementById("menCodyDec").value="";
 document.getElementById("number").value="";
 }

 function Finalizar(){
 secLogin.style.display="block";
 secCodyDec.style.display="none";
 secResultado.style.display="none";

 }



