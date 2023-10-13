function decimalToBinary(num) {
  //Write you code here
	let ans="";
	while(num>0){
		ans=ans+(num%2);
		num/=2;
	}
	console.log(ans)
	return ans;
  
}

window.decimalToBinary = decimalToBinary;
