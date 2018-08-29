function showCount(countElem){
	 var endCount = countElem.innerHTML;
	$({numberValue: 0}).animate({numberValue: +endCount}, { 
		duration: 2500,
		easing: "linear", 
		step: function(val) {  
			$(countElem).html(Math.ceil(val));
		}
	}); 
}