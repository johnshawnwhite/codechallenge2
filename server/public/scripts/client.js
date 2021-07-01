console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    //listener set up to send the jokes to the dom
    $('#addJokeButton').on('click', addJoke)
    getJokes();

}


function addJoke() {
    console.log('Add joke button has been clicked');

    
    //post gathering from input fields
    //server will calculate

  $.ajax({
    method: 'POST',
    url: '/jokes',
    data:  {
        whoseJoke: $('#whoseJoke').val(),
        question: $('#question').val(),
        punchLine: $('#punchLine').val(),
    }
  })
  .then(result => {
    console.log('POST /joke added', result);
    getJokes();
  })
  .catch(err => {
    console.log('POST /adding joke failed', err);
  })
}



// i almost made it, last order of buisness
// 

function getJokes() {
    $.ajax({
      method: 'GET',
      url: '/jokes',
    })
      .then(result => {
        console.log('GET /jokes', result);

  
          // send jokes list to the dom
        $('#allJokes').empty();
          for (let jokes of result) {

            $('#allJokes').append(`
            <li> Author:   ${jokes.whoseJoke}  Question:   ${jokes.question}  Punchline:  ${jokes.punchLine}</li>
            `);
        }
  
  
      })
      .catch(err => {
        console.log(' GET /jokes', err);
  
  
        
        
      })
  }