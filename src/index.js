const password=document.getElementById("password");
//secciones
const secLogin=document.getElementById("secLogin");
const secCodyDec=document.getElementById("secCodyDec");
const secResult=document.getElementById("secResult");
const mnsError=document.getElementById("mnsError");
//botones
const ingresar=document.getElementById("btnIngresar");
const codificar=document.getElementById("btnCodificar");
const decodificar=document.getElementById("btnDecodificar");
const volver=document.getElementById("btnVolver");
const finalizar=document.getElementById("btnFinalizar");
//Funcion decodificar
codificar.addEventListener('click',()=>{
  secLogin.classList.add('hide');
  secCodyDec.classList.add('hide');
  secResult.classList.remove('hide');
    const key=document.getElementById("number").value;
    const text=document.getElementById("menCodyDec").value;
    const result=document.getElementById("textAreaResult");
    const rememberKeys=document.getElementById(" strongRememberKeys");
    let call=cipher.encode(key,text);
    rememberKeys.innerHTML=key;
    result.innerHTML=(call);
});
//Funcion decodificar
decodificar.addEventListener('click',()=>{
    secLogin.classList.add('hide');
    secCodyDec.classList.add('hide');
    secResult.classList.remove('hide');
    const key=document.getElementById("number");
    const text=document.getElementById("menCodyDec");
    const result=document.getElementById("textAreaResult");
    const rememberKeys=document.getElementById(" strongRememberKeys");
    let call=cipher.decode(key.value,text.value);
    rememberKeys.innerHTML=key.value;
    result.innerHTML=(call);
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
            mnsError.innerHTML="Se sugiere ingresar password !";
		}
		else
        {
		contador=contador+1;
            if (contador<=2){
                mnsError.innerHTML="Contraseña incorrecta";
            }
            else{
            mnsError.innerHTML="Intentos agotados, por ahora no podrás ingresar";
            password.disabled = true;
            ingresar.disabled = true;
            }
        }
    }
 document.getElementById("password").value="";
}
function Volver(){
 secLogin.classList.add('hide');
 secResult.classList.add('hide');
 secCodyDec.classList.remove('hide'); 
 document.getElementById("menCodyDec").value="";
 document.getElementById("number").value="";
 }
 function Finalizar(){
 secLogin.classList.remove('hide');
 secCodyDec.classList.add('hide');
 secResult.classList.add('hide');
 document.getElementById("password").value="";
 document.getElementById("menCodyDec").value="";
 document.getElementById("number").value="";
 }