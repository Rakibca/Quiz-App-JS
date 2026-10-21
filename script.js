/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const form = document.querySelector('#quiz-form');
const answer = document.querySelector('.answer');
const question = document.querySelector('.question-item');
const alert = document.querySelector('#alert');

// TODO: 3. Create a submit event listener for the form that does the following.
//    1. Prevent the default behaviour
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)

//MY ANSWER:

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Default behavior prevented!');

  //const temp = document.querySelector('input[name="answer-1"]:checked');
  //console.log(temp);

  // const answers = {
  //   q1: document.querySelector('input[name="answer-1"]:checked')?.value,
  //   q2: document.querySelector('input[name="answer-2"]:checked')?.value,
  //   q3: document.querySelector('input[name="answer-3"]:checked')?.value,
  // };

  const answers = {};

  for (let i = 1; i <= 3; i++) {
    const options = document.querySelectorAll(`input[name="answer-${i}"]`);
    options.forEach((option) => {
      if (option.checked && option.value === 'true') {
        answers[`answer-${i}`] = option.value;
        option.closest('.question-item').classList.add('correct');
      }

      if (option.checked && option.value === 'false') {
        option.closest('.question-item').classList.add('incorrect');
      }
    });
  }

  console.log(answers);
});
