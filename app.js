function cumCounter(text) {
  let lettersOnly = text.replace(/[^a-zA-Z]/g, '');


  return lettersOnly.length;
}

const result = cumCounter("Salam, necəsən?");
console.log(result); 
