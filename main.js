'use strict';

$(document).ready(init);

function init() {
  $('#go').click(goClicked);
  // $('#getLocalWeatherForecast').click(go);
  // $('#threeDayLowForecast').click(get3DayWeatherForecast);
  // $('#threeDayHiForecast').click(get3DayWeatherForecast);
  // $('#weatherCondition').click(weatherCondition);
};

var results;

//   function getLocation(e) {
//     var promise= $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/geolookup/q/autoip.json");
//     // var promise2 = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/geolookup/q/" + city + ".json");

//     var city = data.location.city;

//     promise.success(function(data) {
//     // console.log('success data:', data);
//   });
// }

// function getLocalWeatherForecast(event){
//   var promise = $.getJSON("")
// }

function goClicked(event){
  var zipcode = $("#inputCurrentForecast").val();
  console.log(zipcode);
  var promise = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/conditions/q/" + zipcode + ".json")


  promise.success(function(data) {
  var currentForecast = (data.current_observation.weather);

  $('#go').text(currentForecast);
  $('#mainImage').attr("src", data.current_observation.icon_url);
  });
}

// function weatherCondition(e) {
//   var promise1 = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/conditions/q/CA/San_Francisco.json")

//   promise.success(function(data) {
//     console.log('success data:', data.current_observation.icon);

//     // var weatherCondition = data.conditions.imag
//     console.log(weatherCondition);

//     // $('#go').text()
//     //   });

//     // var weatherConditionForecast = data.forecast.
//   })
// }

// function get3DayWeatherForecast(e) {
//     // var promise = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/forecast/q/"+ city + ".json");

//     var promise = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/forecast/q/CA/San_Francisco.json");

//     promise.success(function(data) {
//       console.log('success data:', data);

//       var threeDayForecast = data.forecast.simpleforecast.forecastday
//       threeDayForecast.forEach(function(d){
//         var lowFar = d.low.fahrenheit;
//         var lowFarLen = lowFar.length;
//         // console.log((lowFar).length);
//         var lowFarAvg = lowFar / lowFarLen;
//         // console.log(lowFarAvg);

//         var highFar = d.high.fahrenheit
//         // console.log(highFar);
//         var highFarLen = highFar.length;
//         // console.log(highFarLen);
//         var highFarAvg = highFar / highFarLen;

//         console.log(highFarAvg);

//     $('#threeDayLowForecast').text(lowFarAvg)
//     var lowFarAvg = lowFar / lowFarLen;
//     console.log(highFarAvg);

//     $('#threeDayHiForecast').text(highFarAvg)
//       });


//





  // });


// var threeDayForecast = data.forecast.simpleforecast.forecastday
// console.log(threeDayForecast);
// }

// function goClicked(event){
//     // var promise = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/history_19500802/q/CA/San_Francisco.json");
//     // var promise = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/history_19501220/q/CA/Los_Angeles.json");
//     var promise = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/webcams/q/CA/Los_Angeles.json");

//   promise.success(function(data) {
//   console.log('success data:', data);

//     // var city = data.history.city;

//     var webcams = data.webcams.city;
    // var country = data.current_observation.display_location.country;

    // var historyConditions = data.history.observations.conds;

    // $('#currentLocation').text();
    // var currentLocation =

    // $('#get10DayWeathForecast').text();
    // var forecast10Days =

    // $('#webcams').text();
    // var cityState = $('input').val();
    // console.log(cityState);

    // $('#historyConditions').text();
    // var cityState = $('input').val();
    // console.log(cityState);







    // $('#location').text(city + ', ' + historyConditions);

    // $('#historyConditions').text(data.history);

    // $('#date').text(historyConditions + ' , ' + city);

//     // data.current observation.temp_f
//     // data.current observation.local_tz_long

// data.history.utcdate;

  //   results = data;
  // });
  // promise.fail(function(error) {
  //   console.log('error:', error);
  // });
  // promise.always(function(data) {
  //   console.log('always data:', data);
  // }) // In case there is something that you want to get done no matter what
// }

//   function getResults() {
//     console.log(results);
//   }



