window.onload = function() {
	var lookup = document.getElementById("lookup");
	var country = document.getElementById("country");
	var result= document.getElementById("result");
		lookup.addEventListener("click",function(){
		
		loadList(country.value);
	});
		function loadList(value){
		var httpRequest= new XMLHttpRequest();
		var url = "/world.php";
		httpRequest.onreadystatechange = function(){
			if (httpRequest.readyState === 4 && httpRequest.status === 200) {
				var response = httpRequest.responseText;
                result.innerHTML= response;
				
			}
		};
		httpRequest.open('GET',url+'?country='+value,true);
		console.log(httpRequest);
		httpRequest.send();
		

	}
	

}