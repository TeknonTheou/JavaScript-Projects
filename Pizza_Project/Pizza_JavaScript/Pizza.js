function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";//adds pizza size to order output display
		}
	}
	//Determines pizza size selected, and sets starting price of pizza
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
    } else if (selectedSize === "Gluten Free") {
		sizeTotal = 12;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getTopping(runningTotal,text1); // All three of these variables will be passed on to each function
};

function getTopping(runningTotal,text1) {
	var toppingTotal = 0;
	var selectedTopping = [];
	var toppingArray = document.getElementsByClassName("toppings");
	for (var j = 0; j < toppingArray.length; j++) {
		if (toppingArray[j].checked) {//determine which toppings were selected
			selectedTopping.push(toppingArray[j].value);
			console.log("selected topping item: ("+toppingArray[j].value+")");
			text1 = text1+toppingArray[j].value+"<br>";//adds topping list to order output
		}
	}
	var toppingCount = selectedTopping.length;//determines how many toppings were selected
	if (toppingCount > 1) {//determines if any toppings selected, adds 1 to total price for each
		toppingTotal = (toppingCount - 1);//"removes" one topping from the count (first topping free) 
	} else {
		toppingTotal = 0;
	}
	runningTotal = (runningTotal + toppingTotal);//adds topping price to base pizza price
	console.log("total selected topping items: "+toppingCount);
	console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
	console.log("topping text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;//outputs order summary (pizza size selection and all toppings)
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";//displays total price.
};