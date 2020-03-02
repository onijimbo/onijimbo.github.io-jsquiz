let currentQ = 0;

let seconds = 75;
let score = 0;
let time = 3;
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
    }



]
function correct() {
    
    const right = setInterval(function () {
        time--
        $('#correct > span').append('Correct!')
        if (time < 0) {
            clearInterval(right)
        }
    }, 1000);
};


function timeOut() {
    $('.wrapper').empty()
    $('.container').append('<h1>Game Over! Try again!</h1>')
}

function countDown() {
    $('#seconds').append(seconds)
    const x = setInterval(function () {
        $('#seconds').text(seconds--)
        if (seconds < 0) {
            clearInterval(x)
            timeOut()
        }
    }, 1000);
};

function quiz() {
    $('#quizQ').removeClass('hidden')
    nextQuestion()
    countDown()
    for (let i = 0; i < questions[currentQ].answer.length; i++){
        $(`#qB${i+1}`).on('click', function(){
            if ($(`#qB${i+1}`).text() === questions[currentQ].answer[0].text) {
                console.log('shit!')
                   correct()
             }
        currentQ++
        nextQuestion()
        
        });

        }
};    
    
    // $(this).on('click', function () {
    //     console.log($('#qB > button'))
    //     for (let i = 0; i < questions[currentQ].answer.length; i++) {
    //         
    //     };
    
    // });


function nextQuestion() {
    $('#q').text(questions[currentQ].question)

    for (var i = 0; i < questions[currentQ].answer.length; i++) {
        $(`#qB${i + 1}`).text(questions[currentQ].answer[i].text)
        
    }
};




$("#startButton").on("click", function () {
    $("#welcomescreen").addClass("hidden")
    quiz()
});







 



// function randoBttn(){
// let randoIndex = Math.floor(Math.random()*4);
// for(let i = 0; i < questions[i].answer.length; i ++){
// questions[1].answer[randoIndex].text.splice(randoIndex, 1);



// };
// };

// console.log(randoBttn());
// {
//     question: "Json is an acronym meaning:",
//     answer: [
//         { text: "JavaScript Object Notation", correct: true },
//         { text: "JavaScript Object Number", correct: false },
//         { text: "Join Script On Null", correct: false },
//         { text: "pizza", correct: false }
//     ]
// },










