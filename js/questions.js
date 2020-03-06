let currentQ = 0;
let seconds = 75;
let score = 0;
let time = 1;



// function for timer 

// function for answers shuffle

// function for changing text on answer buttons

// function to calculate score

// function for adding score

// function that tells user if answer is correct


const questions = [
    {
        question: "A value passed into a function is:",
        answer: [
            { text: "a parameter", correct: true },
            { text: "a method", correct: false },
            { text: "a boolean", correct: false },
            { text: "a taco", correct: false }
        ]
    },
    {
        question: "A value of true or false is:",
        answer: [
            { text: "a boolean", correct: true },
            { text: "a string", correct: false },
            { text: "an array", correct: false },
            { text: "a burger", correct: false }
        ]
    },
    {
        question: "The length of an array refers to:",
        answer: [
            { text: "the number of elements in an array", correct: true },
            { text: "how many pixals long", correct: false },
            { text: "the method of adding an element", correct: false },
            { text: "ramen", correct: false }
        ]
    },
    {
        question: "Json is an acronym meaning:",
        answer: [
            { text: "JavaScript Object Notation", correct: true },
            { text: "JavaScript Object Number", correct: false },
            { text: "Join Script On Null", correct: false },
            { text: "pizza", correct: false }
        ]
    },
    {
        question: "A value that is text within quotation marks is:",
        answer: [
            { text: "a string", correct: true },
            { text: "a method", correct: false },
            { text: "an array", correct: false },
            { text: "a steak", correct: false }
        ]
    },
    {
        question: "The method for adding to an established array:",
        answer: [
            { text: "push", correct: true },
            { text: "shift", correct: false },
            { text: "filter", correct: false },
            { text: "sandwich", correct: false }
        ]
    },
    {
        question: "Which one of these methods are asynchronous:",
        answer: [
            { text: "fetch", correct: true },
            { text: "trim", correct: false },
            { text: "replace", correct: false },
            { text: "curry", correct: false }
        ]
    },
    {
        question: `You are finished!`,
        answer: [
            {text: null},
            {text: null},
            {text: null},
            {text: null}
            
        ]
    }


]

Array.prototype.shuffle = function(){
    let i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i]
        this[i] = temp;
    }
    return this;
}




function correct() {
    $('#correct > span').append('Correct!')
    const right = setInterval(function () {
        time--
        $('#correct > span').empty()
        if (time < 0) {
            clearInterval(right)
        }
    }, 500);
};

function incorrect() {
    $('#wrong > span').append('Wrong! Minus 5 seconds on timer!')
    const right = setInterval(function () {
        time--
        $('#wrong > span').empty()
        if (time < 0) {
            clearInterval(right)
        }
    }, 500);
    seconds = seconds - 5
};

function finalScore(){
    $('#quizQ').empty()
    let finalScore = score * seconds
    localStorage.setItem('newScore', finalScore);
    $('#quizQ').append(`<h3>Your final score is ${finalScore}! Click <a href="scores.html">High Scores!</a> to log it!</h3>`)
};


function timeOut() {
    $('.wrapper').empty()
    $('.container').append('<h1>Game Over! Try again!</h1>')
};

function countDown() {
    $('#seconds').append(seconds)
    let interval = setInterval(function(){
        $('#seconds').text(seconds--)
        if (seconds < 0) {
            clearInterval(interval)
            timeOut()
        } else if(currentQ > 6){
            clearInterval(interval)
            finalScore()
        };
    }, 1000);  
};


function quiz() {
    $('#quizQ').removeClass('hidden')
    nextQuestion()
    countDown()
    for (let i = 0; i < questions[currentQ].answer.length; i++){
        $(`#qB${i+1}`).on('click', function(){
            

            if ($(`#qB${i+1}`).text() === questions[currentQ].answer[0].text) {
                   score++ 
                   correct()
             } else {
                incorrect() 
             }
        
        currentQ++
        nextQuestion()
         });
       
        }
    

};    
    
    

function nextQuestion() {
    $('#q').text(questions[currentQ].question)
    const arr = [0,1,2,3 ]
    let num = arr.shuffle()
    for (let i = 0; i < questions[currentQ].answer.length; i++) {
        
        $(`#qB${i + 1}`).text(questions[currentQ].answer[num[i]].text)
        
    }    
    
};




$("#startButton").on("click", function () {
    $("#welcomescreen").addClass("hidden")
    
    quiz()
});







 








