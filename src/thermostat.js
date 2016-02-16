function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
  this.minTemp     = 10;
  this.maxTemp     = this.powerSaving ? 25 : 32;
}

Thermostat.prototype.up = function () {
  this.temperature += 1;
};

Thermostat.prototype.down = function () {
  this.temperature -= 1;
};

Thermostat.prototype.switchPowerSaving = function () {
  this.powerSaving = !this.powerSaving;
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function () {
  var usageLevel;

  if (this.temperature >= 25) {
    usageLevel = Symbol.for("high");
  } else if (this.temperature >= 18) {
    usageLevel = Symbol.for("medium");
  } else {
    usageLevel = Symbol.for("low");
  }

  return usageLevel;
};
