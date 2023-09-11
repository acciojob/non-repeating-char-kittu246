function firstNonRepeatedChar(str) {
 // Write your code here

	let n= str.length;

let i=0;
let j=i+1;
	while(i<n && j<n){

    if(str[i]!= str[j]){
        return(str[i]);
       
    }
    else{
        while(j<n && str[i]==str[j]){
            j++;
        }

        

    }

    i=j;
    j++;
}

return "null";
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
