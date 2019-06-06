const llave=document.getElementById("number");
const palabra=document.getElementById("menCodyDec");
let NumAscci=0;
window.cipher = {
  encode: (offset, string) => {

    secLogin.style.display="none";
    secCodyDec.style.display="none";
    secResultado.style.display="flex";
    for(let i=0;i<palabra.value.leght;i++){
     NumAscci=palabra.value.NumAscci(i);
      mensaje.innerHTML="el texto tiene de tamaño"+ NumAscci;
      alert(NumAscci);

    }

    /* Acá va tu código que cifra*/
  },
  decode: (offset, string) => {
  	secLogin.style.display="none";
    secCodyDec.style.display="none";
    secResultado.style.display="flex";
    /* Acá va tu código que descifra*/
  }
};
