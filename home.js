const questions = [
    {"question": "What is the capital of Australia?", "correctAnswer": "Canberra", "2": "Sydney", "3": "Melbourne", "4": "Brisbane"},
    {"question": "What is the largest continent?", "correctAnswer": "Asia", "2": "Antarctica", "3": "Africa", "4": "North America"},
    {"question": "What continent is Chile located in?", "correctAnswer": "South America", "2": "Africa", "3": "Asia", "4": "Europe"},
    {"question": "What is the capital of Canada?", "correctAnswer": "Ottawa", "2": "Ontario", "3": "Quebec", "4": "Toronto"},
    {"question": "Which of the following is not a continent?", "correctAnswer": "Russia", "2": "Australia", "3": "Antarctica", "4": "Europe"},
    {"question": "In the USA, which of the following is not a state?", "correctAnswer": "New Orleans", "2": "New Mexico", "3": "Illinois", "4": "Mississippi"},
    {"question": "What is the capital of the United States?", "correctAnswer": "Washington, D.C.", "2": "New York City, New York", "3": "San Francisco, California", "4": "Dallas, Texas"},
    {"question": "What continent is Greece located in?", "correctAnswer": "Europe", "2": "Africa", "3": "South America", "4": "Australia"},
    {"question": "In the USA, what was the first state?", "correctAnswer": "Delaware", "2": "Pennsylvania", "3": "New Jersey", "4": "Virginia"},
    {"question": "Alaska borders what?", "correctAnswer": "Canada", "2": "Washington", "3": "North Dakota", "4": "Maine"},
    {"question": "New Zealand is closest to which of the following?", "correctAnswer": "Australia", "2": "India", "3": "Indonesia", "4": "Russia"}   
];

let count = 1, answer;
function generateQuestion() {
    let availableQuestions = questions, questionNumber = Math.floor(Math.random() * availableQuestions.length);
    document.getElementById("question").innerHTML = availableQuestions[questionNumber]["question"];
    determineAnswerOrder(availableQuestions, questionNumber);
    answer = availableQuestions[questionNumber]["correctAnswer"];
    availableQuestions = availableQuestions.splice(questionNumber, 1);
    document.getElementById("question-number").innerHTML = `Question Number: ${count}/10`;
}

function determineAnswerOrder(array, number) {
    let random = Math.floor(Math.random() * 4);
    if (random === 0) {
        document.getElementById("label-one").innerHTML = array[number]["correctAnswer"], document.getElementById("answer-one").setAttribute("value", array[number]["correctAnswer"]);
        document.getElementById("label-two").innerHTML = array[number]["2"], document.getElementById("answer-two").setAttribute("value", array[number]["2"]);
        document.getElementById("label-three").innerHTML = array[number]["3"], document.getElementById("answer-three").setAttribute("value", array[number]["3"]);
        document.getElementById("label-four").innerHTML = array[number]["4"], document.getElementById("answer-four").setAttribute("value", array[number]["4"]);
    } else if (random === 1) {
        document.getElementById("label-four").innerHTML = array[number]["correctAnswer"], document.getElementById("answer-four").setAttribute("value", array[number]["correctAnswer"]);;
        document.getElementById("label-three").innerHTML = array[number]["2"], document.getElementById("answer-three").setAttribute("value", array[number]["2"]);;
        document.getElementById("label-two").innerHTML = array[number]["3"], document.getElementById("answer-two").setAttribute("value", array[number]["3"]);;
        document.getElementById("label-one").innerHTML = array[number]["4"], document.getElementById("answer-one").setAttribute("value", array[number]["4"]);;  
    } else if (random === 2) {
        document.getElementById("label-three").innerHTML = array[number]["correctAnswer"], document.getElementById("answer-three").setAttribute("value", array[number]["correctAnswer"]);;
        document.getElementById("label-one").innerHTML = array[number]["2"], document.getElementById("answer-one").setAttribute("value", array[number]["2"]);;
        document.getElementById("label-four").innerHTML = array[number]["3"], document.getElementById("answer-four").setAttribute("value", array[number]["3"]);;
        document.getElementById("label-two").innerHTML = array[number]["4"], document.getElementById("answer-two").setAttribute("value", array[number]["4"]);;  
    } else if (random === 3) {
        document.getElementById("label-two").innerHTML = array[number]["correctAnswer"], document.getElementById("answer-two").setAttribute("value", array[number]["correctAnswer"]);;
        document.getElementById("label-four").innerHTML = array[number]["2"], document.getElementById("answer-four").setAttribute("value", array[number]["2"]);;
        document.getElementById("label-one").innerHTML = array[number]["3"], document.getElementById("answer-one").setAttribute("value", array[number]["3"]);;
        document.getElementById("label-three").innerHTML = array[number]["4"], document.getElementById("answer-three").setAttribute("value", array[number]["4"]);;  
    }
}

function nextQuestion() {
    count++;
    checkAnswer();
    if (count > 10) {
        document.getElementById("question").innerHTML = `Quiz completed. Your score is ${score}/10.`;
        for (let i = 1; i <= 4; i++) {
            let child = document.getElementById("answer-list").childNodes[i];
            child.parentNode.removeChild(child);
        }
        document.getElementById("bottom-btn").parentNode.removeChild(document.getElementById("bottom-btn"));
        let playAgain = document.createElement("button");
        playAgain.innerHTML = "Play again";
        playAgain.setAttribute("onclick", "location.reload();");
        document.getElementById("buttons").appendChild(playAgain);
    } else {
        generateQuestion(); 
    }
}

let score = 0;
function checkAnswer() {
    let opOne = document.getElementById("answer-one"), opTwo = document.getElementById("answer-two"), opThree = document.getElementById("answer-three"), opFour = document.getElementById("answer-four");
    let selected = opOne.checked ? opOne : opTwo.checked ? opTwo : opThree.checked ? opThree : opFour.checked ? opFour : "none";
    if (selected.value === answer) {
        score++;
    }
}

