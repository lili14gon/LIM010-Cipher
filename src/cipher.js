

// let NumAscci=0;
// let Nuevaletra='';

window.cipher = {

  encode: (offset, string) => {
      let NumAscci=0;
      let Nuevaletra='';

     for(let i=0;i<string.length;i++){
      if(string.charCodeAt(i)===32){
        NumAscci=string.charCodeAt(i);
        }
      else{
        NumAscci=(string.charCodeAt(i)-65+parseInt(offset))%26+65;
        }

        Nuevaletra=Nuevaletra+String.fromCharCode(parseInt(NumAscci));
     }
     //respuesta.innerHTML=Nuevaletra;
     return Nuevaletra;
    /* Acá va tu código que cifra*/
  },
  decode: (offset, string) => {
  	let NumAscci1=0;
  	let Nuevaletra1='';
  	for(let i=0; i<string.length;i++){
  		if(string.charCodeAt(i)==32){
         NumAscci1=string.charCodeAt(i);
  		    }
        else{
        NumAscci1=90-((90-string.charCodeAt(i)+parseInt(offset))%26);
        }  
        Nuevaletra1=Nuevaletra1+String.fromCharCode(parseInt(NumAscci1));
  	   }
  	   return Nuevaletra1;
    /* Acá va tu código que descifra*/
  
   }
};
