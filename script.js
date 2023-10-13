function decimalToBinary(num) {
  //Write you code here
	let ans=0;
	while(num>0){
		ans=(num%2);
		num/=2;
	}
	return ans;
  
}

window.decimalToBinary = decimalToBinary;
