var c1QuestionArr = [
  'Who is mostly responsible for meal planning?',
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
  'Who mostly remembers to add these supplies to the grocery list?',
];
populateQuestionRows(c1QuestionArr, 'questionBody1');

var emQuestionArr = [
  'Who mostly manages social plans?',
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
  'Who mostly spends time making sure gifts and sent + received in time?',
];
populateQuestionRows(emQuestionArr, 'questionBody2');

var fhQuestionArr = [
  'Who mostly manages social plans?',
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
  'Who mostly spends time making sure gifts and sent + received in time?',
];
populateQuestionRows(fhQuestionArr, 'questionBody3');

function populateQuestionRows(questions, targetDivName) {
  var clDivRowArr = [];
  var clMCircleArr = [];
  var clPCircleArr = [];
  var clQuestionDivArr = [];
  var isLeftOn = [];
  var isRightOn = [];

  for (var i = 0; i < questions.length; i++) {
    var clDivRow = document.createElement('div');
    var clRowLeft = document.createElement('div');
    var clRowRight = document.createElement('div');
    var clMCircleHolder = document.createElement('div');
    var clQuestionHolder = document.createElement('div');
    var clPCircleHolder = document.createElement('div');
    var clMCircle = document.createElement('div');
    var clPCircle = document.createElement('div');

    //var clQuestion = (cotent of question )

    clMCircle.className = 'question-circle';
    clPCircle.className = 'question-circle';
    clMCircleHolder.className = 'question-circle-container';
    clPCircleHolder.className = 'question-circle-container';
    clRowLeft.className = 'question-row-side';
    clQuestionHolder.className = 'question-row-center';
    clRowRight.className = 'question-row-side';
    clDivRow.className = 'question-row';

    clMCircleHolder.appendChild(clMCircle);
    clPCircleHolder.appendChild(clPCircle);
    clRowLeft.appendChild(clMCircleHolder);
    clRowRight.appendChild(clPCircleHolder);
    clDivRow.appendChild(clRowLeft);
    clDivRow.appendChild(clQuestionHolder);
    clDivRow.appendChild(clRowRight);

    clDivRowArr.push(clDivRow);
    clMCircleArr.push(clMCircle);
    clQuestionDivArr.push(clQuestionHolder);
    clPCircleArr.push(clPCircle);
  }
  for (var i = 0; i < clDivRowArr.length; i++) {
    clQuestionDivArr[i].innerHTML = questions[i];
  }
  for (var i = 0; i < clDivRowArr.length; i++) {
    document.getElementById(targetDivName).appendChild(clDivRowArr[i]);
    isLeftOn.push(false);
    isRightOn.push(false);
  }

  /*** color status ***/

  function updateRowColor(i) {
    let l = isLeftOn[i];
    let r = isRightOn[i];
    console.log(l, r);

    if (l && r) {
      // both side on
      clMCircleArr[i].className =
        'question-circle question-circle-both-on-color';
      clPCircleArr[i].className =
        'question-circle question-circle-both-on-color';
    } else if (l && !r) {
      clMCircleArr[i].className =
        'question-circle question-circle-left-on-color';
      clPCircleArr[i].className = 'question-circle';
    } else if (!l && r) {
      clMCircleArr[i].className = 'question-circle';
      clPCircleArr[i].className =
        'question-circle question-circle-right-on-color';
    } else if (!l && !r) {
      clMCircleArr[i].className = 'question-circle';
      clPCircleArr[i].className = 'question-circle';
    } else {
      console.log('should not go here');
    }
  }

  for (let i = 0; i < clMCircleArr.length; i++) {
    clMCircleArr[i].addEventListener('click', (event) => {
      isLeftOn[i] = !isLeftOn[i];
      updateRowColor(i);
    });

    clPCircleArr[i].addEventListener('click', (event) => {
      isRightOn[i] = !isRightOn[i];
      updateRowColor(i);
    });
  }
}
