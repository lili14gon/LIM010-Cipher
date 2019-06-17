window.cipher = {
  encode: (offset, string) => {
    let numAscci = 0;
    let newLetter = '';
    for (let i = 0; i < string.length; i++) {
       
      if(string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
        numAscci = (string.charCodeAt(i) - 48 + parseInt(offset)) % 10 + 48;
      }
      else if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        numAscci = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      }
      else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
        numAscci = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
      }
      // else if(string.charCodeAt(i)==209){
      //   numAscci =((65+parseInt(offset))%26+65);
      // }
      // else if (string.charCodeAt(i)==241) {
      //   numAscci=(97+parseInt(offset))%26+97;
      // }
      else {
        numAscci = string.charCodeAt(i);
      }
       newLetter = newLetter + String.fromCharCode(parseInt(numAscci));
    }
    return newLetter;
  },
  decode: (offset, string) => {
    let numAscci1 = 0;
    let newLetter1 = '';
    for (let i = 0; i < string.length; i++) {
      if(string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57){
        numAscci1 = 57 - ((57 - string.charCodeAt(i) + parseInt(offset)) % 10);
      }
      else if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
        numAscci1 = 90 - ((90 - string.charCodeAt(i) + parseInt(offset)) % 26);
      }
      //minuscula
      else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
        numAscci1 = 122 - ((122 - string.charCodeAt(i)+ parseInt(offset)) % 26);
      }
      else {
        numAscci1 = string.charCodeAt(i);
      } 
      newLetter1 = newLetter1 + String.fromCharCode(parseInt(numAscci1));
    }
    return newLetter1;
  }
};