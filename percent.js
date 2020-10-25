$("button selector").click( function(event) {
	event.preventDefault();
  });
  
function percentage()
		{

			
			var a = Number(document.getElementById("t1").value);
			var b = Number(document.getElementById("t2").value) / 100;
			$("#Result").text(a*b);
			
		}
	