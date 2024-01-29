const questions = [
    {   //question 1
        question: "What is the biggest planet in our solar system?",
        answers: [
            { text: "(A) Jupiter", correct: true },
            { text: "(B) Saturn", correct: false },
            { text: "(C) Uranus", correct: false },
            { text: "(D) Neptune", correct: false },
        ]
    },
    {
        //question 2
        question: "Question 2: Which planet is also called the Red Planet?",
        answers: [
            {text: "(A) Mars", correct: true},
            {text: "(B) Venus", correct: false},
            {text: "(C) Earth", correct: false},
            {text: "(D) Mercury", correct: false},
        ]
    },
    {
        //question 3 
        question: "How does light travel when it does not hit anything?",
        answers: [
            {text: "(A) It travels in a straight line.", correct: true},
            {text: "(B) It bounces off of objects.", correct: false},
            {text: "(C) It goes through objects.", correct: false},
            {text: "(D) It disappears.", correct: false},
        ]
    },
    { 
        //question 4 
        question: "Frog is a reptile or amphibian?",
        answers: [
            {text: "(A) Reptile", correct: false},
            {text: "(B) Amphibian", correct: true},
            {text: "(C) Fish", correct: false},
            {text: "(D) Bird", correct: false},
        ]
    },
    {
        //question 5
        question: "What helps pump blood through the entire body",
        answers: [
            {text: "(A) Lungs", correct: false},
            {text: "(B) Liver", correct: false},
            {text: "(C) Heart", correct: true},
            {text: "(D) Kidneys", correct: false},
        ]
    },
];

let questionElement = document.getElementById('question')
let ansBtn = document.getElementById('ansBtn')
const nextBtn = document.querySelector('.nextBtn')

let score = 0;
let currentQuestionIndex = 0;

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextBtn.innerHTML = "Next"
    showQuiz();
}

function showQuiz() {
    resetState();
    //display question
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    //display answer
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add('btn');
        ansBtn.appendChild(button);

        //correct answer check
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)  
    });
}

function resetState(){
    nextBtn.style.display = "none"
    while(ansBtn.firstChild){
        ansBtn.removeChild(ansBtn.firstChild)
    }
}

function selectAnswer(e){
    const selectBtn = e.target
    const isCorrect = selectBtn.dataset.correct === 'true'
    if(isCorrect){
        selectBtn.classList.add('correct')
        score++
    }else{
        selectBtn.classList.add('incorrect')
    }
    Array.from(ansBtn.children).forEach(button => {
        if(button.dataset.correct){
            button.classList.add('correct')
        }
        button.disabled = true
    });
    nextBtn.style.display = 'block'
}

function showScore() {
    resetState()
    questionElement.innerHTML = `Your Score ${score} out of ${questions.length}`
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = 'block'
}

function handleNextBtn() {
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuiz()
    }else{
        showScore()
    }
}

nextBtn.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn()
    }else{
        startQuiz()
    }
})


// console.log(questions[3])
startQuiz();