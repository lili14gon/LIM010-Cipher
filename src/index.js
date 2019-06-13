const password=document.getElementById("password");
//secciones
const secLogin=document.getElementById("secLogin");
const secCodyDec=document.getElementById("secCodyDec");
const secResultado=document.getElementById("secResultado");
//botones
const ingresar=document.getElementById("btnIngresar");
const codificar=document.getElementById("btnCodificar");
const decodificar=document.getElementById("btnDecodificar");
const volver=document.getElementById("btnVolver");
const finalizar=document.getElementById("btnFinalizar");
//Funcion decodificar
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
    const recLlave=document.getElementById("recLlave");
    let Resultado=cipher.encode(llave,texto);
    recLlave.innerHTML=llave;
    respuesta.innerHTML=(Resultado);
});
//Funcion decodificar
decodificar.addEventListener('click',()=>{
    secLogin.classList.add('hide');
    secCodyDec.classList.add('hide');
    secResultado.classList.remove('hide');
    const llave=document.getElementById("number");
    const texto=document.getElementById("menCodyDec");
    const respuesta=document.getElementById("idResultado");
    const recLlave=document.getElementById("recLlave");
    let Resultado=cipher.decode(llave.value,texto.value);
    recLlave.innerHTML=llave.value;
    respuesta.innerHTML=(Resultado);
});
ingresar.addEventListener('click',Login);
volver.addEventListener('click',Volver);
finalizar.addEventListener('click',Finalizar);
let contador=0;
//Funcion login
function Login(){
	if(password.value==='LABORATORIA'){
    secLogin.classList.add('hide');
    secCodyDec.classList.remove('hide');
	}
	if(password.value!=='LABORATORIA') {
		if(password.value===''){
			alert("ingresar pasword");
		}
		else
        {
		contador=contador+1;
            if (contador<=2){
                alert("incorrecto");
            }
            else{
           //secLogin.classList.add('hide');
            alert("Ya utilizaste todos tus intentos, en este momento no podrás ingresar");
            password.disabled = true;
            ingresar.disabled = true;
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