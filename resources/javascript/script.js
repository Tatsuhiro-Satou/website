	var GeneratePassword = function() {

	var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
	var numbers = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];
	var symbols = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=' ];
	this.myName = "Bob"; 
	 
	var random = Rng(3, 8);
	var password = "";

	for (i = 0; i < 10; i++) {

	    var randomCharacter = Rng(0, 3);

	    if (randomCharacter == 0) {
		//password = password + letters[Rng(0, 27)];
		password = password + letters[Rng(0, 27)];
	    }                
	    else if (randomCharacter == 1) {
		//password = password + numbers[Rng(0, 10)]; 
		password = password + numbers[Rng(0, 10)];
	    }                
	    else if (randomCharacter == 2) {
		//password = password + symbols[Rng(0, 12)];
		password = password + symbols[Rng(0, 12)]; 
	    }                

	}

	document.getElementById('textboxOne').value=password;

	}

	function Rng(minValue, maxValue)
	{
		return Math.round(Math.random() * ((maxValue - 1) - minValue));
	}


/*	<script>
	
		// $(function(){ below is shorthand notation

		$(document).ready(function(){
   			// $("ul".hide()
			//	$("#btnAddProfile").attr('value', 'Save'); //versions older than 1.6a
			$( "a" ).click(function( event ) {
		 
				alert( "Thanks for visiting!" );
				event.preventDefault();
		 
			});
		});

	</script>
*/ 

