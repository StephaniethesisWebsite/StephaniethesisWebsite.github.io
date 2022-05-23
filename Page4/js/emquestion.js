var emQuestionArr= ['Who mostly manages social plans?',
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
'Who is mostly responsible for daily budget management?',
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

	var emclDivRowArr = [];
	var emMCircleArr =[];
	var emPCircleArr = [];
	var emclQuestionDivArr=[];
	for(var i=0; i<emQuestionArr.length; i++){
    var emclDivRow = document.createElement('div');
    var emMCircleHolder = document.createElement('span');
    var emclQuestionHolder = document.createElement('span');
    var emPCircleHolder= document.createElement('span');
    var emMCircle = document.createElement('div');
    var emPCircle = document.createElement('div');

    //var emclQuestion = (cotent of question )

    emMCircle.className = 'myselflCircle1';
    emPCircle.className='partnerCircle1';
    emMCircleHolder.className='col-sm-4 itemAlign';
    emclQuestionHolder.className='col-sm-4 itemAlign question1';
    emPCircleHolder.className='col-sm-4 itemAlign';
    emclDivRow.className = 'questionRowBorder rowHeight';

    emMCircleHolder.appendChild(emMCircle);
    emPCircleHolder.appendChild(emPCircle);
    emclDivRow.appendChild(emMCircleHolder);
    emclDivRow.appendChild(emclQuestionHolder);
    emclDivRow.appendChild(emPCircleHolder);
    
    emclDivRowArr.push(emclDivRow);
    emMCircleArr.push(emMCircle);
    emclQuestionDivArr.push(emclQuestionHolder);
    emPCircleArr.push(emPCircle);

	}
	for(var i =0; i <emQuestionArr.length; i++){
	emclQuestionDivArr[i].innerHTML = emQuestionArr[i];
	}
    for(var i=0; i<emclDivRowArr.length;i++){
 		document.getElementById('questionBody2').appendChild(emclDivRowArr[i]);

    }

  /*** color status ***/


for(let i =0; i <emMCircleArr.length;i++){

 	emMCircleArr[i].addEventListener("click", event =>
{

if(!emMCircleArr[i].classList.contains('mPColor')){

	if(!emPCircleArr[i].classList.contains('partnerCircle1Colo')){
		emMCircleArr[i].classList.toggle('myselflCircle1Color');
	}else{
	  emPCircleArr[i].classList.replace('partnerCircle1Color','mPColor');
	  emMCircleArr[i].classList.add('mPColor');
	}
}
else{
	  emMCircleArr[i].classList.remove('mPColor');
	  emMCircleArr[i].classList.remove('myselflCircle1Color');
	  emPCircleArr[i].classList.replace('mPColor','partnerCircle1Color');

}


}); 

 	emPCircleArr[i].addEventListener("click", event =>
{

if(!emPCircleArr[i].classList.contains('mPColor')){

	if(!emMCircleArr[i].classList.contains('myselflCircle1Color')){
		emPCircleArr[i].classList.toggle('partnerCircle1Color');
	}else{
	  emPCircleArr[i].classList.add('mPColor');
	  emMCircleArr[i].classList.replace('myselflCircle1Color','mPColor');
	}
}
else{
	emPCircleArr[i].classList.remove('mPColor');
	emPCircleArr[i].classList.remove('partnerCircle1Color');
	emMCircleArr[i].classList.replace('mPColor','myselflCircle1Color');

}


});

}


