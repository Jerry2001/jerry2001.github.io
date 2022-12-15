// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        imgSrc1 : "image-variation/ai_1.png",
        imgSrc2 : "image-variation/art_1.png",
        humanCredit:"Resistance by u/KymmaLabeija",
        choiceA : "1",
        choiceB : "Wrong",
        choiceC : "2",
        correct : "C"
    },
    {
        imgSrc1 : "image-variation/ai_2.png",
        imgSrc2 : "image-variation/art_2.png",
        humanCredit:"Landscape painting by John Hughnes",
        choiceA : "1",
        choiceB : "Wrong",
        choiceC : "2",
        correct : "C"
    },
    {
        imgSrc1 : "image-variation/ai_3.png",
        imgSrc2 : "image-variation/art_3.png",
        humanCredit:"Composition VII by Wassily Kandinsky",
        choiceA : "A",
        choiceB : "Wrong",
        choiceC : "B",
        correct : "C"
    },
    {
        imgSrc1 : "image-variation/art_5.png",
        imgSrc2 : "image-variation/ai_5.png",
        choiceA : "1",
        humanCredit:"The Elephant Celebes by Max Ernst",
        choiceB : "Wrong",
        choiceC : "2",
        correct : "A"
    },
    {
        imgSrc1 : "image-variation/ai_6.png",
        imgSrc2 : "image-variation/art_6.png",
        choiceA : "1",
        humanCredit: "Still Life with Fruit on a Stone Ledge by Caravaggio",
        choiceB : "Wrong",
        choiceC : "2",
        correct : "C"
    },
    {
        imgSrc1 : "image-variation/art_7.png",
        imgSrc2 : "image-variation/ai_7.png",
        choiceA : "1",
        humanCredit:"Ene, Traditional Healer by Tim Benson",
        choiceB : "Wrong",
        choiceC : "2",
        correct : "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    choiceA.setAttribute("onclick","checkAnswer('A')");
    choiceC.setAttribute("onclick","checkAnswer('C')");
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>Which of these two photos is made by human?</p>";
    qImg.innerHTML = "<img class = 'zoom' src="+ q.imgSrc1 +">";
    qImg.innerHTML += "<img class = 'zoom' src="+ q.imgSrc2 +">";
    choiceA.innerHTML = q.choiceA;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "inline-block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        renderResult();
    }
}

function isNextQuestion(){
    if(runningQuestion < lastQuestion){
        choiceA.onclick = "checkAnswer('A')";
        choiceC.onclick = "checkAnswer('C')";
        runningQuestion++;
        renderQuestion();
        renderCounter();
        TIMER = setInterval(renderCounter,1000);
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}
function renderResult(){
    clearInterval(TIMER);
    let q = questions[runningQuestion];
    choiceA.onclick = "";
    choiceC.onclick = "";
    if(q.correct == "A"){
        choiceA.innerHTML = q.humanCredit;
        choiceC.innerHTML = "AI, StableDiffusion";
    } else {
        choiceA.innerHTML = "AI, StableDiffusion";
        choiceC.innerHTML = q.humanCredit;
    }
    setTimeout(isNextQuestion, 3000);
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    renderResult()
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "flex";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















