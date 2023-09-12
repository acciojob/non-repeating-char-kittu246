function firstNonRepeatedChar(str) {
 // Write your code here

	let flag = true;
  for(let i=0;i<str.length-1;i++){
    for(let j=i+1;j<str.length;j++){
      if(str[i]==str[j]){
        flag = false;
        break;
      }
    }
    if(flag == true){
      return str[i];
    }
  }
  return "null";
	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
