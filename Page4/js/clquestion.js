var c1QuestionArr= ['Who is mostly responsible for meal planning?',
'Who mostly generates the grocery list?',
'Who mostly keeps a tab on items that are running low?',
'Who mostly know what brands of foods to purchase?',
'Who mostly purchases groceries?',
'Who mostly cooks the meals?',
'Who mostly preps the meals?',
'Who mostly knows what foods are needed to make the meal?',
'Who mostly mostly knows what ingredients exist in the home?',
'Who mostly decides what to make for each meal?',
'Who mostly takes out the garbage?',
'Who mostly notices when the garbage is full?',
'Who mostly notices when the trash bags are running low?',
'Who mostly remembers to add trash bags to the grocery list?',
'Who mostly notices when the dishes are piling up?',
'Who mostly washes the dishes?',
'Who mostly loads the dishes?',
'Who mostly unloads the dishwasher?',
'Who mostly remembers that the dishwasher needs unloading?',
'Who mostly knows what brand dish soap to purchase?',
'Who mostly notices when the dish soap is running low?',
'Who mostly notices when other household supplies are running low?',
'Who mostly remembers to add these supplies to the grocery list?'];

	var clDivRowArr = [];
	var clMCircleArr =[];
	var clPCircleArr = [];
	var clQuestionDivArr=[];
	for(var i=0; i<c1QuestionArr.length; i++){
    var clDivRow = document.createElement('div');
    var clMCircleHolder = document.createElement('span');
    var clQuestionHolder = document.createElement('span');
    var clPCircleHolder= document.createElement('span');
    var clMCircle = document.createElement('div');
    var clPCircle = document.createElement('div');

    //var clQuestion = (cotent of question )

    clMCircle.className = 'myselflCircle1';
    clPCircle.className='partnerCircle1';
    clMCircleHolder.className='col-sm-4 itemAlign';
    clQuestionHolder.className='col-sm-4 itemAlign question1';
    clPCircleHolder.className='col-sm-4 itemAlign';
    clDivRow.className = 'questionRowBorder rowHeight';

    clMCircleHolder.appendChild(clMCircle);
    clPCircleHolder.appendChild(clPCircle);
    clDivRow.appendChild(clMCircleHolder);
    clDivRow.appendChild(clQuestionHolder);
    clDivRow.appendChild(clPCircleHolder);
    
    clDivRowArr.push(clDivRow);
    clMCircleArr.push(clMCircle);
    clQuestionDivArr.push(clQuestionHolder);
    clPCircleArr.push(clPCircle);

	}
	for(var i =0; i <23; i++){
	clQuestionDivArr[i].innerHTML = c1QuestionArr[i];
	}
    for(var i=0; i<clDivRowArr.length;i++){
 		document.getElementById('questionBody1').appendChild(clDivRowArr[i]);

    }

  /*** color status ***/


for(let i =0; i <clMCircleArr.length;i++){

 	clMCircleArr[i].addEventListener("click", event =>
{

if(!clMCircleArr[i].classList.contains('mPColor')){

	if(!clPCircleArr[i].classList.contains('partnerCircle1Color')){
		clMCircleArr[i].classList.toggle('myselflCircle1Color');
	}else{
	  clPCircleArr[i].classList.replace('partnerCircle1Color','mPColor');
	  clMCircleArr[i].classList.add('mPColor');
	}
}
else{
	  clMCircleArr[i].classList.remove('mPColor');
	  clMCircleArr[i].classList.remove('myselflCircle1Color');
	  clPCircleArr[i].classList.replace('mPColor','partnerCircle1Color');

}


}); 

 	clPCircleArr[i].addEventListener("click", event =>
{

if(!clPCircleArr[i].classList.contains('mPColor')){

	if(!clMCircleArr[i].classList.contains('myselflCircle1Color')){
		clPCircleArr[i].classList.toggle('partnerCircle1Color');
	}else{
	  clPCircleArr[i].classList.add('mPColor');
	  clMCircleArr[i].classList.replace('myselflCircle1Color','mPColor');
	}
}
else{
	clPCircleArr[i].classList.remove('mPColor');
	 clPCircleArr[i].classList.remove('partnerCircle1Color');
	  clMCircleArr[i].classList.replace('mPColor','myselflCircle1Color');

}


});

}


