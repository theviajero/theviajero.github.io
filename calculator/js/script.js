var total = 0;
var tempNum;

//Function that receive the push button of the numbers.
function pushNumber(num) {
	var checkOperator = new RegExp(/\+|\-|\*|\//);
	if (total === 0) {
		total = num.toString();
		document.getElementById('result').value = total;
	} else if (total[total.length-1] == '.' && num == '.' ) {
	} else if (checkOperator.test(total[total.length-1])) {
		total = total + num.toString();
		document.getElementById('result').value = total;
	} else if (num == '.') {
		total = total + num;
		document.getElementById('result').value = total;
	} else if (total[total.length-1] == '.') {
		total = total + num;
		document.getElementById('result').value = total;
	} else if (typeof(total) === "string") {
      if (total % 1 === 0) {
			  total = total + num.toString();
			  document.getElementById('result').value = total;
			} else {
			    document.getElementById('result').value = total.toFixed(1) + num.toString();
			    total = total + num.toString();
			}
	}
}

//Function that receive the push button of the operators.
function operation(operator) {
	var checkOperator = new RegExp(/\+|\-|\*|\//);
	if (checkOperator.test(total[total.length - 1])) { 
	} else if (total[total.length-1] == '.' ) { 
	} else {
		if (total % 1 === 0) {
			total = total + operator;
	    document.getElementById('result').value = total;
	  } else {
        if (isNaN(Number(total))) {			
		      document.getElementById('result').value = total + operator;
					total = total + operator;
			  } else if (typeof(Number(total)) == "number") {
					total = Number(total);
					document.getElementById('result').value = total.toFixed(1) + operator;
					total = total + operator;
				}
        
		}
	}
}

//Function that eval the string builded with the numbers and operators.
function equal() {
	var makeTheOperation = eval(total);
	total = makeTheOperation;
	if (total % 1 === 0) {
	    document.getElementById('result').value = total;
	} else {
		  document.getElementById('result').value = total.toFixed(1); 
	}
}

//Function that clear the result.
function clearResult() {
  total = 0;
  document.getElementById('result').value = total;
}
