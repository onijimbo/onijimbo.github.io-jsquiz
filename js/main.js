let newScore = localStorage.getItem('newScore');

let name = ['Zach', 'Jason', 'Billy'];
let scores = ['138', '120', '200'];

localStorage.setItem('scores', JSON.stringify(scores));
localStorage.setItem('name',JSON.stringify(name));

let nameSave =  JSON.parse(localStorage.getItem('name'));
let scoreSave =  JSON.parse(localStorage.getItem('scores'));



if(newScore){
 $('#total').text(newScore)
localStorage.removeItem('newScore')

for(let i = 0; i < nameSave.length; i++){ 
    let userName = $('<h2>');
    userName.text(nameSave[i])
    
    $('#nameView').prepend(userName)
};
for(let j = 0; j < scoreSave.length; j++){
    let userScore = $('<h2>');
    userScore.text(scoreSave[j])
    
    $('#scoreView').prepend(userScore)
};


};


$('#save').on('click', function(){
let nameEl = document.getElementById("name").value;
let scoreEl = document.getElementById("score").value;

name.push(nameEl);
scores.push(scoreEl);

localStorage.setItem('scores', JSON.stringify(scores));
localStorage.setItem('name',JSON.stringify(name));

let userName = $('<h2>');
userName.text(nameEl);
$('#nameView').prepend(userName);

let userScore = $('<h2>');
userScore.text(scoreEl.toString());
$('scoreView').prepend(userScore);

});