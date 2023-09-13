function firstNonRepeatedChar(str) {
 // Write your code here

	// let flag = true;
 //  for(let i=0;i<str.length-1;i++){
 //    for(let j=i+1;j<str.length;j++){
 //      if(str[i]==str[j]){
 //        flag = false;
 //        break;
 //      }
 //    }
 //    if(flag == true){
 //      return str[i];
 //    }
 //  }
 //  return "null";

	// Optimal Approach

	let obj = {};


    for(let i=0;i<str.length;i++){

      if(obj[str[i]]== undefined){
        obj[str[i]] = 1;
      }
      else{

        obj[str[i]]++ ;
      }

    }

    for(let j=0;j<str.length;j++){
       if(obj[str[j]] == 1){
        return str[j];
       }
    }

     return null;

	
	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
