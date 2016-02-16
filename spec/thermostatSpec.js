describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('thermostat starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase the temperature with the up button', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease the temperature with the up button', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

});
