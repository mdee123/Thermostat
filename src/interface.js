$(document).ready(function() {
  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });
  var thermostat = new Thermostat();
  updateTemp();

  $('#temp-up').click(function(){
    thermostat.up();
    updateTemp();
  });

  $('#temp-down').click(function(){
    thermostat.down();
    updateTemp();
  });

  $('#temp-reset').click(function(){
    thermostat.reset();
    updateTemp();
  });


  $('#powersaving-switch').click(function(){
    thermostat.switchPowerSaving();
    if(thermostat.powerSaving === true) {
      $('#power-saving-status').text('on');
    }
    else if (thermostat.powerSaving === false){
      $('#power-saving-status').text('off');
    }
    updateTemp();
  });

  function updateTemp() {
    $('#temp').text(thermostat.temperature);
    $('#temp').attr('class', thermostat.energyUsage());
  }
  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=28fb71753f403e1aae7b03974297c42b';
    var unit = '&units=metric';
    $.get(url + token + unit, function(data){
      $('#current-temp').text(data.main.temp);
    });
  }
});
