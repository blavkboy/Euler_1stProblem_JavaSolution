var totalSum = 0

for (var sum = 0; sum < 1000; sum++){
	if(sum%3 === 0 || sum%5 === 0){
		totalSum = totalSum + sum;
	}else{
		continue;
	}
}
console.log(totalSum)