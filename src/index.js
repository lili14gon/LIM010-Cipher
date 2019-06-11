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

codificar.addEventListener('click',()=>{

	 // secLogin.style.display="none";
  //    secCodyDec.style.display="none";
  //    secResultado.style.display="block";  

  secLogin.classList.add('hide');
  secCodyDec.classList.add('hide');
  secResultado.classList.remove('hide');

    const llave=document.getElementById("number").value;
    const texto=document.getElementById("menCodyDec").value;

    const respuesta=document.getElementById("idResultado");
    const recLlave=document.getElementById("recLlave")

    let Resultado=cipher.encode(llave,texto);

    recLlave.innerHTML=llave;
    respuesta.innerHTML=(Resultado);

});

decodificar.addEventListener('click',()=>{
    secLogin.classList.add('hide');
    secCodyDec.classList.add('hide');
    secResultado.classList.remove('hide');


    const llave=document.getElementById("number");
    const texto=document.getElementById("menCodyDec");

    const respuesta=document.getElementById("idResultado");
    const recLlave=document.getElementById("recLlave")

    let Resultado=cipher.decode(llave.value,texto.value);
    recLlave.innerHTML=llave.value;
    respuesta.innerHTML=(Resultado);

});



ingresar.addEventListener('click',Login);
volver.addEventListener('click',Volver);
finalizar.addEventListener('click',Finalizar);

let contador=0;
function Login(){
  
	if(pasword.value==='LABORATORIA'){
    
    secLogin.classList.add('hide');
    secCodyDec.classList.remove('hide');
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
                    //secLogin.classList.add('hide');
                    // secBloqueo.classList.remove('hide');
                    pasword.disabled = true;
                    alert("Ya utilizaste todos tus intentos, en este momento no podrás ingresar");

	    	       }
	    }
 
    }
 document.getElementById("password").value="";
}
function Volver(){
 secLogin.classList.add('hide');
 secResultado.classList.add('hide');
 secCodyDec.classList.remove('hide'); 

 document.getElementById("menCodyDec").value="";
 document.getElementById("number").value="";
 }

 function Finalizar(){
 secLogin.classList.remove('hide');
 secCodyDec.classList.add('hide');
 secResultado.classList.add('hide');

 document.getElementById("password").value="";
 document.getElementById("menCodyDec").value="";
 document.getElementById("number").value="";

 }



