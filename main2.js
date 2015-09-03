function init(){
    $('#go').click(goClicked);
    $('#zip').on('keypress:', inputKeyPress);
    $('#yodaGo').click(getYoda);
    $('#getQuote').click(getQuote);
}

function getLocation(){
  var
}

function getQuote() {
  var symbol = $('#symbol').val();
  $.ajax('http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol,{
    dataType: 'jsonp'
  })
  .always(function(data) {
    console.log(data);
  })
}

function getYoda() {
  var text = $('#yodaInput').val();

  text = text.replace(' ', '+');

  $.ajax({
    url: 'https://yoda.p.mashape.com/yoda?sentence=' + text,
    headers: {
      'X-Mashape-Key': 'QlGoDB9WpJmshzsDTluavJd1isP6p1aOxicjsn7WfLnACygIR7',
      'Accept': 'text/plain')
}
