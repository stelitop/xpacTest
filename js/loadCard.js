function loadCard(cardName, cardClass)
{
	var jsonPath = "cards/"+cardClass+"/"+cardName+".json";
	
	$.getJSON(jsonPath, function(result){
		
		document.getElementById("cardGalleryWrapper").innerHTML += '<div class="card"> </div>';
	})
}