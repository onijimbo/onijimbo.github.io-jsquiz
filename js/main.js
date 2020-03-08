let newScore = localStorage.getItem('newScore');

if (newScore) {
    $('#total').text(newScore)
    localStorage.removeItem('newScore')
};


function localView() {
    for(i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        
        let names = $(`<h2>${key}</h2>`)
        let scores = $(`<h2>${value}</h2>`)

        $('#nameView').prepend(names);
        $('#scoreView').prepend(scores)
        console.log(key, value)
    }
}

localView()

$('#save').on('click', function () {
    
    let key = document.getElementById("name").value;
    let value = document.getElementById("score").value;

    if(key && value){
        localStorage.setItem(key, value);
        
        
    }

    let names = (`<h2>${key}</h2>`)
    let scores= (`<h2>${value}</h2>`)

    $('#nameView').prepend(names)
    $('#scoreView').prepend(scores)
    
    
    $('input:text').val('')

});