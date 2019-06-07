
const offset=document.getElementById("number");
const string=document.getElementById("menCodyDec");
let NumAscci=0;
let Nuevaletra='';

window.cipher = {
  encode: (offset, string) => {

   
     for(let i=0;i<string.value.lengt;i++){
      if(string.value.charCodeAt(i)==32){
        NumAscci=string.value.charCodeAt(i);
        }
      else{
        NumAscci=(string.value.charCodeAt(i)-65+parseInt(offset.value))%26+65;
        }

        Nuevaletra=Nuevaletra+String.fromCharCode(parseInt(NumAscci));
     }
     respuesta.innerHTML=Nuevaletra;
     //return Nuevaletra;
    /* Acá va tu código que cifra*/
  },
  decode: (offset, string) => {
  	
    /* Acá va tu código que descifra*/
  
   }
};
