var currentFrontCardUrl = 'cards/Mage/FirstArcanistThalyssra.json'; //default value

function updateFrontCard()
{
	var heightPer = 0.24; //% space between top and bottom of the screen
	var tokenScale = 1.5; //how much smaller the tokens are compared to the main card
	var windowWidth = window.innerWidth, windowHeight = window.innerHeight;	
		
	var paddingVertical = (1-2*heightPer)*windowHeight/12; 	
	var paddingLeft = windowHeight*(1-2*heightPer)*400/(569*10); //distance between card and description		
	var fontSz = (1-2*heightPer)*windowHeight/22;
	var descriptionWidth = (windowHeight*(1-2*heightPer)*400/569)*1.7+8;		
	
	if (windowHeight*2.80*(1-2*heightPer)*400/569 > windowWidth)		
	{
		heightPer = (1-windowWidth*569/(400*2.80*windowHeight))/2;
		
		paddingVertical = (1-2*heightPer)*windowHeight/12; 	
		paddingLeft = windowHeight*(1-2*heightPer)*400/(569*10); //distance between card and description		
		fontSz = (1-2*heightPer)*windowHeight/22;
		descriptionWidth = (windowHeight*(1-2*heightPer)*400/569)*1.7;	
	}
	
	var frontCardWrapper = document.getElementsByClassName('frontCardWrapper');				
	
	for (i = 0; i < frontCardWrapper.length; i++)
	{											
		frontCardWrapper[i].style.height = (windowHeight*(1-2*heightPer)).toString() + 'px';
		frontCardWrapper[i].style.top = (100*heightPer).toString() + '%';
		
		frontCardWrapper[i].style.left = ( ( windowWidth - (windowHeight*(1-2*heightPer)*400/569 + paddingLeft + descriptionWidth) )/2 ).toString() + "px";
		frontCardWrapper[i].style.width = (windowHeight*(1-2*heightPer)*400/569 + paddingLeft + descriptionWidth).toString() + 'px';
	}
	
	var frontCardShowcase = document.getElementsByClassName('frontCardShowcase');
	
	for (i = 0; i < frontCardShowcase.length; i++)
	{
		frontCardShowcase[i].style.width = (windowHeight*(1-2*heightPer)*400/569).toString() + 'px';			
	}
	
	var frontCardShowcaseToken = document.getElementsByClassName('frontCardShowcaseToken');
	
	for (i = 0; i < frontCardShowcaseToken.length; i++)
	{
		frontCardShowcaseToken[i].style.width = (windowHeight*(1-2*heightPer)*400/(569*tokenScale)).toString() + 'px';			
	}
	
	var frontCardContentWrapper = document.getElementsByClassName('frontCardContentWrapper');
	
	for (i = 0; i < frontCardContentWrapper.length; i++)
	{		
		frontCardContentWrapper[i].style.fontSize = fontSz.toString() + 'px';
		frontCardContentWrapper[i].style.height = (windowHeight*(1-2*heightPer) - 2*paddingVertical).toString() + 'px';	
		frontCardContentWrapper[i].style.width = descriptionWidth.toString() + "px";
		frontCardContentWrapper[i].style.paddingLeft = paddingLeft + "px";
		frontCardContentWrapper[i].style.paddingTop = paddingVertical + "px";
		frontCardContentWrapper[i].style.paddingBottom = paddingVertical + "px";
	}
	
	var frontCardNameHeader = document.getElementsByClassName('frontCardNameHeader');
	
	for (i = 0; i < frontCardNameHeader.length; i++)
	{
		frontCardNameHeader[i].style.fontSize = (fontSz*1.4).toString() + 'px';
	}
}

function closeFrontCard()
{
	var frontCard = document.getElementsByClassName('frontCard');
	
	for (i = 0; i < frontCard.length; i++)
	{
		frontCard[i].parentNode.removeChild(frontCard[i]);
	}
}

function createFrontCard(cardurl)
{
	closeFrontCard();
	currentCardUrl = cardurl;
	document.body.innerHTML += '<div class="frontCard" onclick="closeFrontCard()">  <div class="frontCardWrapper">  </div>  </div>';
	
	$.getJSON(cardurl, function(result){
		
		var frontCardWrapper = document.getElementsByClassName('frontCardWrapper');	

		for (i = 0; i < frontCardWrapper.length; i++)
		{
			var newHTML = '';
			var cardTypeDislpay = result.type;
			if (result.type == "Minion" && result.tribe != "None") cardTypeDislpay =  result.tribe;				
					
			newHTML += '<div style="display: inline-block; float: left;"> <img src="' + result.cardSource + '" class="frontCardShowcase"/> </div>';									
			newHTML += '<div class="frontCardContentWrapper">';
			newHTML += '<div class="frontCardNameHeader"> <b>'+ result.name + '</b> </div>';
			newHTML += result.rarity + ' ' + result.cardClass + ' ' + cardTypeDislpay + '<br/> <br/>';
			newHTML += result.text + '<br/> <br/> <br/>';
			newHTML += '<i>' + result.flavor + '</i> <br/> <br/>';			
						
			if (result.hasOwnProperty('tokenLinks'))
			{				
				if (result.tokenLinks.length > 0)
				{					
					newHTML += 'Related cards: <br/></br>';
					newHTML += '<div style="display: inline-block; float: left; white-space: nowrap;">';
					for (j = 0; j < result.tokenLinks.length; j++)
					{			
						newHTML += '<img src="' + result.tokenLinks[j] + '" class="frontCardShowcaseToken ' + result.tokenTypes[j] + '"/>';				
					}
					newHTML += '</div>';
				}	
			}
			
			newHTML += '</div>';
			
			frontCardWrapper[i].innerHTML = newHTML;
		}
		
		updateFrontCard();
	})
		
	
}