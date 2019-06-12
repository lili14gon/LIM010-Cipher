window.cipher = {
  encode: (offset, string) => {
    let NumAscci = 0;
    let Nuevaletra = '';
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) === 32) {
        NumAscci = string.charCodeAt(i);
      }
      else if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
        NumAscci = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      }
      else if(string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
        NumAscci=(string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
      }
      Nuevaletra = Nuevaletra + String.fromCharCode(parseInt(NumAscci));
    }
    return Nuevaletra;
  },
  decode: (offset, string) => {
    let NumAscci1 = 0;
    let Nuevaletra1 = '';
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) == 32) {
        NumAscci1 = string.charCodeAt(i);
      }
      else if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
        NumAscci1 = 90 - ((90 - string.charCodeAt(i) + parseInt(offset)) % 26);
      }
      else if(string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
        NumAscci1 = 122 - ((122 - string.charCodeAt(i) + parseInt(offset)) % 26);
      }
      Nuevaletra1 = Nuevaletra1 + String.fromCharCode(parseInt(NumAscci1));
    }
    return Nuevaletra1;
  }
};