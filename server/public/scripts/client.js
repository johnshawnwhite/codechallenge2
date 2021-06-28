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
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val(),
    }
  })
  .then(result => {
    console.log('POST /joke added', result);
    getOperation();
  })
  .catch(err => {
    console.log('POST /adding joke failed fail', err);
  })
}