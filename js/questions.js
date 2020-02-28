const srtBttn =  $("#startButton")
const welcomeEl = $("#welcome")
const instructEl = $("#instruct")
const qBttns = $("#qB")
// function for timer 

// function for answers shuffle

// function for changing text on answer buttons

// function to calculate score

// function for adding score

// function that tells user if answer is correct

function clear() {
    $("#startButton").addClass("hidden")
    $("#welcome").addClass("hidden")
    $("#instruct").addClass("hidden")
    
};

function quiz() {
    $("#qB").removeClass("hidden")
}



 


$("#startButton").on("click", function(){
    clear()
    quiz()
});
        
const questions = [
    {
        question: "A value passed into a function is:",
        answers:[
            {text: "a parameter", correct: true},
            {text: "a method", correct: false},
            {text: "a boolean", correct: false},
            {text: "a taco", correct: false}
        ]
    },
    {
        question: "A value of true or false is:",
        answer:[
            {text: "a boolean", correct: true},
            {text: "a string", correct: false},
            {text: "an array", correct: false},
            {text: "a burger", correct: false}
        ]
    },
    {
        question: "The length of an array refers to:",
        answer:[
            {text: "the number of elements in an array", correct: true},
            {text: "how many pixals long", correct: false},
            {text: "the method of adding an element", correct: false},
            {text: "ramen", correct: false}
        ] 
    },
    {
        question: "Json is an acronym meaning:",
        answer:[
            {text: "JavaScript Object Notation", correct: true},
            {text:"JavaScript Object Number",  correct: false},
            {text: "Join Script On Null", correct: false},
            {text: "pizza", correct: false}
        ]
    },
    {
        question: "A value that is text within quotation marks is:",
        answer:[
            {text: "a string", correct: true},
            {text: "a method", correct: false},
            {text: "an array", correct: false},
            {text: "a steak", correct: false}
        ]
    },
    {
        question: "The method for adding to an established array:",
        answer:[
            {text: "push", correct: true},
            {text: "shift", correct: false},
            {text: "filter", correct: false},
            {text: "sandwich", correct: false}
        ] 
    },
    {
        question: "Which one of these methods are asynchronous:",
        answer:[
            {text: "fetch", correct: true},
            {text: "trim", correct: false},
            {text: "replace", correct: false},
            {text: "curry", correct: false}
        ]
    }    

        
    
]    
    










// questions = ["A value passed into a function is:",
//  "A value of true or false is:",
//  "The length of an array refers to:",
//  "Json is an acronym meaning:",
//  "A value that is text within quotation marks is:",
//  "The method for adding to an established array:",
//  "Which one of these methods are asynchronous:"];

// const quizArr = [
    
//      {a1: "a parameter",
//      wA1: "a method",
//      wA2: "a boolean",
//      wA3: "a taco"},
     

//      {
//      a2: "a boolean",
//      wA1: "a string",
//      wA2: "an array",
//      wA3: "a burger"},
     

//      {
//       a3: "the number of elements in an array",
//       wA1: "how many pixals long",
//       wA2: "the method of adding an element",
//       wA3: "ramen"},
      

//      {
//       a4: "JavaScript Object Notation",
//       wA1: "JavaScript Object Number",
//       wA2: "Join Script On Null",
//       wA3: "pizza"},
      

//      {
//       a1: "a string",
//       wA1: "a method",
//       wA2: "an array",
//       wA3: "a steak"},
      
    
//      {a6: "push",
//       wA1: "shift",
//       wA2: "filter",
//     wA3: "sandwich"},
     

//      {a7: "fetch",
//      wA1: "trim",
//      wA2: "replace",
//      wA3: "curry"}
     
// ]
