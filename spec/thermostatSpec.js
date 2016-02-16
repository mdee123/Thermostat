describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('has a minimum temperature of 10 degrees', function () {
    expect(thermostat.minTemp).toEqual(10);
  });

  it('starts in power saving mode', function () {
    expect(thermostat.powerSaving).toBeTruthy();
  });

  describe('#up', function () {
    it('increases the temperature by 1 degree', function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('#down', function () {
    it('decreases the temperature by 1 degree', function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
  });

  describe('#switchPowerSaving', function () {
    describe('if power saving is on', function () {
      it('switches power saving off', function () {
        thermostat.switchPowerSaving();
        expect(thermostat.powerSaving).toBeFalsy();
      });
    });

    describe('if power saving is off', function () {
      beforeEach(function () {
        thermostat.switchPowerSaving();
      });

      it('switches power saving on', function () {
        thermostat.switchPowerSaving();
        expect(thermostat.powerSaving).toBeTruthy();
      });
    });
  });

  describe('#reset', function () {
    beforeEach(function () {
      thermostat.up();
    });

    it('resets the temperature to the default value', function () {
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('#energyUsage', function () {
    describe('if temperature is 25 degrees or above', function () {
      it('returns high', function () {
        thermostat.switchPowerSaving();
        for (var i = 0; i < 5; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual(Symbol.for("high"));
      });
    });

    describe('if temperature is 18 degrees or above', function () {
      it('returns medium', function () {
        expect(thermostat.energyUsage()).toEqual(Symbol.for("medium"));
      });
    });

    describe('if temperature is below 18 degrees', function () {
      it('returns low', function () {
        for (var i = 0; i < 5; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual(Symbol.for("low"));
      });
    });
  });
});
