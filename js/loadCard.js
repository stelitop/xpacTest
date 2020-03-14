function loadCard(cardurl) // DONT USE IS SHIT
{	
	$.getJSON(cardurl, function(result){
		
		//var newHTML = '';
		
		var cardTypeDimensions = '';
		
		if (result.rarity == 'Legendary')
		{
			if (result.type == 'Weapon')  cardTypeDimensions = 'CardLegendaryWeapon';
			else 'CardLegendary';
		}
		else
		{
			if (result.type == 'Weapon') cardTypeDimensions = 'CardWeapon';
			else cardTypeDimensions = 'CardNormal';
		}
		
		var newCard = document.createElement("div");
		newCard.classList.add("card");
			
		newCard.addEventListener("click", function(){
			createFrontCard("FirstArcanistThalyssra.json");
		});							
		
		var cardImage = document.createElement("img");
		cardImage.src = result.cardSource;
		cardImage.classList.add("cardimage");
		cardImage.classList.add(cardTypeDimensions);
		
		setCardDimensions(cardImage);
		
		newCard.appendChild(cardImage);			
		
		document.getElementById("cardGalleryWrapper").appendChild(newCard);		
		
		//newHTML += '<div class="card" onclick=\'createFrontCard("' + cardurl + '")\'>';
		//newHTML += '<img src="' + result.cardSource + '" class="cardimage tempClassSetDimension' + cardTypeDimensions + '"/>';
		//newHTML += '</div>';
		//
		//document.getElementById("cardGalleryWrapper").innerHTML += newHTML;
		//
		//var newCards = document.getElementsByClassName('tempClassSetDimension');
		//for (i = 0; i < newCards.length; i++)
		//{			
		//	setCardDimensions(newCards[i]);
		//	newCards[i].classList.remove('tempClassSetDimension');
		//}
	});
}

function setCardDimensions(cardImageElement, width=0)
{
	if (width <= 0) width = 300;
	
	cardImageElement.style.width = width;
	
	if (cardImageElement.classList.contains("CardLegendary"))
	{
		cardImageElement.style.height = (width*569/400).toString() + 'px';
		cardImageElement.style.paddingTop = (width*0/400).toString() + 'px';
	}
	else if (cardImageElement.classList.contains("CardWeapon"))
	{
		cardImageElement.style.height = (width*550/400).toString() + 'px';
		cardImageElement.style.paddingTop = (width*19/400).toString() + 'px';
	}
	else if (cardImageElement.classList.contains("CardLegendaryWeapon"))
	{
		cardImageElement.style.height = (width*557/400).toString() + 'px';
		cardImageElement.style.paddingTop = (width*12/400).toString() + 'px';
	}
	else
	{
		cardImageElement.style.height = (width*543/400).toString() + 'px';
		cardImageElement.style.paddingTop = (width*26/400).toString() + 'px';
	}
}

function loadClass(allClassCardsUrl)
{
	$.getJSON(allClassCardsUrl, function(result){
		
		var cardGalleryWrapper = document.getElementById('cardGalleryWrapper');
		for (i = 0; i < result.cards.length; i++)
		{
			var newHTML = '';
			newHTML += '<div class="card" id="displayCard'+ i.toString() + '" onclick=\'createFrontCard("'+ result.directory + result.cards[i].cardLink +'")\'> ';	
			newHTML += '<img src="'+ result.cards[i].artSource + '" class="cardimage '+ result.cards[i].cardType +'"/>';
			newHTML += '</div>';
			cardGalleryWrapper.innerHTML += newHTML;
		}
		
		var x = document.getElementsByClassName('cardimage');
		for (i = 0; i < x.length; i++)
		{
			setCardDimensions(x[i], 300);
		}
	});			
}