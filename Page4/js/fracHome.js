var fhQuestionArr= ['Who mostly manages social plans?',
'who mostly arranges plans with other parties involved?',
'Who mostly knows what’s going on each weekend?',
'Who mostly manages the social calendar?',
'Who mostly manages home repairs?',
'Who mostly does research for how to repair?',
'Who mostly researches and books the repair appointment?',
'Who mostly makes sure the repair is paid for?',
'Who mostly manages correspondence with the repair technician?',
'Who mostly calls customer service for a repair or question?',
'Who mtly cleans the home?',
'Who is mostly aware ofhat cleaning supplies are running low?',
'Who mostly makes sure tadd cleaning supplies to the grocery list?',
'Who mostly does researcfor cleaning services?', 
'Who mostly manages correspondenceith cleaning service?',
'Who mostly knows which dates are best fothe cleaning service to come?', 
'Who mostly arranges r a cleaning servi to clean the home?',
'Who is mostly responsible for vacation and travel planning?',
'Who is mostly responsible for booking flights?',
'Who is mostly in charge of researching and considering flight costs?',
'Who is mostly responsible for booking the hotel?',
'Who is mostly responsible for researching hotel costs?',
'Who is mostly responsible for researching the hotel location?',
'Who is mostly responsible for researching place to see while visiting?',
'Who is mostly responsible for planning out a daily itinerary?',
'Who is mostly responsible for checking when dates work for all parties?',
'Who is mostly responsible for long-term financial planning?',
'Who is mostly responsible for daily budget managfhent?',
'Who is mostly responsible for paying monthly utility bills?',
'Who is mostly responsible for paying mortgage or rent?',
'Who is mostly responsible for manage monthly subscriptions?',
'Who is mostly responsible for managing health insurance?',
'Who is mostly responsible for home renovation projects?',
'Who is mostly responsible for finding contractors for renovations?',
'Who is mostly in charge of scope and timeline with contractors?',
'Who is mostly responsible for birthday and holiday gifts?',
'Who mostly spends time researching what gifts to purchase?',
'Who mostly spends time making sure gifts are wrapped?',
'Who mostly spends time making sure gifts and sent + received in time?',];

	var fhclDivRowArr = [];
	var fhMCircleArr =[];
	var fhPCircleArr = [];
	var fhclQuestionDivArr=[];
	for(var i=0; i<fhQuestionArr.length; i++){
    var fhclDivRow = document.createElement('div');
    var fhMCircleHolder = document.createElement('span');
    var fhclQuestionHolder = document.createElement('span');
    var fhPCircleHolder= document.createElement('span');
    var fhMCircle = document.createElement('div');
    var fhPCircle = document.createElement('div');

    //var fhclQuestion = (cotent of question )

    fhMCircle.className = 'myselflCircle1';
    fhPCircle.className='partnerCircle1';
    fhMCircleHolder.className='col-sm-4 itemAlign';
    fhclQuestionHolder.className='col-sm-4 itemAlign question1';
    fhPCircleHolder.className='col-sm-4 itemAlign';
    fhclDivRow.className = 'questionRowBorder row';

    fhMCircleHolder.appendChild(fhMCircle);
    fhPCircleHolder.appendChild(fhPCircle);
    fhclDivRow.appendChild(fhMCircleHolder);
    fhclDivRow.appendChild(fhclQuestionHolder);
    fhclDivRow.appendChild(fhPCircleHolder);
    
    fhclDivRowArr.push(fhclDivRow);
    fhMCircleArr.push(fhMCircle);
    fhclQuestionDivArr.push(fhclQuestionHolder);
    fhPCircleArr.push(fhPCircle);

	}
	for(var i =0; i <fhQuestionArr.length; i++){
	fhclQuestionDivArr[i].innerHTML = fhQuestionArr[i];
	}
    for(var i=0; i<fhclDivRowArr.length;i++){
 		document.getElementById('questionBody3').appendChild(fhclDivRowArr[i]);

    }

  /*** color status ***/


for(let i =0; i <fhMCircleArr.length;i++){

 	fhMCircleArr[i].addEventListener("click", event =>
{

if(!fhMCircleArr[i].classList.contains('mPColor')){

	if(!fhPCircleArr[i].classList.contains('partnerCircle1Colo')){
		fhMCircleArr[i].classList.toggle('myselflCircle1Color');
	}else{
	  fhPCircleArr[i].classList.replace('partnerCircle1Color','mPColor');
	  fhMCircleArr[i].classList.add('mPColor');
	}
}
else{
	  fhMCircleArr[i].classList.remove('mPColor');
	  fhMCircleArr[i].classList.remove('myselflCircle1Color');
	  fhPCircleArr[i].classList.replace('mPColor','partnerCircle1Color');

}


}); 

 	fhPCircleArr[i].addEventListener("click", event =>
{

if(!fhPCircleArr[i].classList.contains('mPColor')){

	if(!fhMCircleArr[i].classList.contains('myselflCircle1Color')){
		fhPCircleArr[i].classList.toggle('partnerCircle1Color');
	}else{
	  fhPCircleArr[i].classList.add('mPColor');
	  fhMCircleArr[i].classList.replace('myselflCircle1Color','mPColor');
	}
}
else{
	fhPCircleArr[i].classList.remove('mPColor');
	 fhPCircleArr[i].classList.remove('partnerCircle1Color');
	  fhMCircleArr[i].classList.replace('mPColor','myselflCircle1Color');

}


});

}


