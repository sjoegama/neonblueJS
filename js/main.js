//frame color switch
	//get nth-child
		const cardNode = document.querySelectorAll('.hCard');

		//set initial value
		let i = 0;

		//function to set time interval
		setInterval(function()	{

			//for each hCard in array remove class
			cardNode.forEach((hCard, i) => {
				hCard.classList.remove('shad');
			})

			//reset i
			if(i == cardNode.length)	{
				i = 0;
			}

			//add class to element
			cardNode[i].classList.add('shad');
			i++;
		}, 2000);
