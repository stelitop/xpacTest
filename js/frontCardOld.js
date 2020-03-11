function setFrontCardDimensions()
{
	var heightPer = 0.22; //% space between top and bottom of the screen		
	var windowWidth = window.innerWidth, windowHeight = window.innerHeight;	
	
	var paddingVertical = (1-2*heightPer)*windowHeight/8; 	
	var paddingLeft = windowHeight*(1-2*heightPer)*400/(569*10); //distance between card and description		
	var fontSz = (1-2*heightPer)*windowHeight/18;
	var descriptionWidth = (windowHeight*(1-2*heightPer)*400/569)*1.7;		
	
	if (windowHeight*2.80*(1-2*heightPer)*400/569 > windowWidth)		
	{
		heightPer = (1-windowWidth*569/(400*2.80*windowHeight))/2;
		
		paddingVertical = (1-2*heightPer)*windowHeight/8; 	
		paddingLeft = windowHeight*(1-2*heightPer)*400/(569*10); //distance between card and description		
		fontSz = (1-2*heightPer)*windowHeight/18;
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
		frontCardNameHeader[i].style.fontSize = (fontSz*1.2).toString() + 'px';
	}
}