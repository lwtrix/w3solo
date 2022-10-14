import { questions } from "./data/questions.js";
const currentQuestions = [];

const generateQuestionAnswers = (questionObj, questionContainer) => {
    const qtnAnswersContainer = document.createElement('div');
    qtnAnswersContainer.classList = 'question-answers'

    if(questionContainer) {
        const allAnswers = [questionObj.correct_answer, ...questionObj.incorrect_answers]
        
        for(let answer of allAnswers) {
            const answerText = document.createElement('span');
            answerText.classList = 'question-answer'
            answerText.textContent = answer;
            qtnAnswersContainer.appendChild(answerText);
            questionContainer.appendChild(qtnAnswersContainer)
        }

    }
}

const createQuestionElements = (questionsContainer) => {
    for(let question of questions) {
        const newQuestionContainer = document.createElement('div');
        newQuestionContainer.classList = 'question-container'
        newQuestionContainer.setAttribute('id', 'questionContainer')
        
        const type = document.createElement('span');
        type.classList = 'question-type';

        if(question.type === 'multiple') {
            type.innerHTML = 'This question is a <strong>multiple</strong> choice.'
        } else if(question.type === 'boolean') {
            type.innerHTML = 'This question can only be answered with True or False'
        }   

        const questionText = document.createElement('h2');
        const category = document.createElement('span');
       

        category.classList = 'question-category';
        questionText.classList = 'question-text';

        questionText.textContent = question.question;
        category.textContent = question.category;

        newQuestionContainer.appendChild(category);
        newQuestionContainer.appendChild(questionText);
        newQuestionContainer.appendChild(type);

        questionsContainer.appendChild(newQuestionContainer);

        generateQuestionAnswers(question, newQuestionContainer)
    }
}

const generateQuestionDetails = (quiz = false) => {
    const questionsContainer = document.querySelector('#questionsContainer');

    // GENERATE QUESTIONS AND THEIR DETAILS WITHOUT ANSWERS

    createQuestionElements(questionsContainer)    

}



generateQuestionDetails()


// <!--
// QUIZ GAME!

// RULES:
// / The player must guess correctly a certain amount of questions
// / Each correct answer gives him one point
// / Answers could be multiple or true/false
// / At the end of the game, the user must know his/her total score

// QUESTIONS:
// / You can get them from this URL ( http://bit.ly/strive_QUIZZ ) or you can write your own
// / Could be multiple of boolean (true / false)

// HINTS:
// / Keep a global variable score for the user score
// / Keep a variable questionNumber for the question the user is answering
// / When questionNumber is bigger then the available questions, present the score
// / Start working with the questions saved in a variable (or you can use AJAX for fetching external questions if you already know how to do it!)
// / Start with the easier version and THEN implement the EXTRAs
// / Please debug everything / try it on the console to be sure of what to expect from your code

// EXTRA:
// / Show if the answer provided was the wrong one or correct it after clicking
// / Present the questions one at a time instead of having all of them displayed together
// / Let the user select difficulty and number of questions (you can get q/a from https://opentdb.com/api.php?amount=10&category=18&difficulty=easy modifying amount and difficulty)

// /* WHEN YOU ARE FINISHED
//   Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
// */
// -->
