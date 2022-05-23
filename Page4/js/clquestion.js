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

var clDivRowArr = [];
var clMCircleArr = [];
var clPCircleArr = [];
var clQuestionDivArr = [];
var isLeftOn = [];
var isRightOn = [];

for (var i = 0; i < c1QuestionArr.length; i++) {
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
for (var i = 0; i < 23; i++) {
  clQuestionDivArr[i].innerHTML = c1QuestionArr[i];
}
for (var i = 0; i < clDivRowArr.length; i++) {
  document.getElementById('questionBody1').appendChild(clDivRowArr[i]);
  isLeftOn.push(false);
  isRightOn.push(false);
}

/*** color status ***/

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

function updateRowColor(i) {
  let l = isLeftOn[i];
  let r = isRightOn[i];
  console.log(l, r);

  if (l && r) {
    // both side on
    clMCircleArr[i].className = 'question-circle question-circle-both-on-color';
    clPCircleArr[i].className = 'question-circle question-circle-both-on-color';
  } else if (l && !r) {
    clMCircleArr[i].className = 'question-circle question-circle-left-on-color';
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
