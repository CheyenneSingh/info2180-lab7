window.onload = function() {
	var lookup = document.getElementById("lookup");
	var countrylookup = document.getElementById("country");
	var result= document.getElementById("result");
	var citieslookup = document.getElementById("cities");
		
		lookup.addEventListener("click",function(){
		
		loadList(countrylookup.value,false);
	});
		citieslookup.addEventListener("click",function(){
			loadList(countrylookup.value,true);
		});
		function loadList(value,cities){
		var httpRequest= new XMLHttpRequest();
		var url = "/world.php";
		httpRequest.onreadystatechange = function(){
			if (httpRequest.readyState === 4 && httpRequest.status === 200) {
				var response = httpRequest.responseText;
                result.innerHTML= response;
				
			}
		};
		if (cities==true){
		    httpRequest.open('GET',url+'?country='+value+'&context=cities',true);	
		}else{
		    httpRequest.open('GET',url+'?country='+value,true);
		}
		console.log(httpRequest);
		httpRequest.send();
		

	}
	

}