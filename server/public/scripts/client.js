console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    //listener set up to send the jokes to the dom
    $('#addJokeButton').on('click', addJoke)

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
        jokeQuestion: $('#question').val(),
        punchLine: $('#punchLine').val(),
    }
  })
  .then(result => {
    console.log('POST /joke added', result);
  })
  .catch(err => {
    console.log('POST /adding joke failed', err);
  })
}



// i almost made it, last order of buisness
// 

// function getOperation() {
//     $.ajax({
//       method: 'GET',
//       url: '/jokes',
//     })
//       .then(result => {
//         console.log('GET /jokes', result);
  
//           // send calculations list to the dom
//         $('#jokes').empty();
//           for (let jokes of jokes) {
//             $('#jokes').append(`
//             <li>By:${jokes.whoseJoke}Question: ${jokes.jokeQuestion}Punchline: ${jokes.punchLine}</li>
//             `);
//         }
  
  
//       })
//       .catch(err => {
//         console.log(' GET /calculations', err);
  
  
        
        
//       })
//   }