function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
  this.MIN_TEMP    = 10;
  this.MAX_TEMP_ON  = 25;
  this.MAX_TEMP_OFF  = 32;
}

Thermostat.prototype.up = function () {
  if(this.powerSaving === true) {
    if(this.temperature >= this.MAX_TEMP_ON ) {
      throw "Can't go above max temperature";
    } else {
      this.temperature++;
    }
  }
  else if(this.powerSaving === false) {
    if(this.temperature >= this.MAX_TEMP_OFF ) {
      throw "Can't go above max temperature";
    } else {
      this.temperature++;
    }
  }
};

Thermostat.prototype.down = function () {
  if(this.temperature <= this.MIN_TEMP) {
    throw "Can't go below min temperature";
  } else {
    this.temperature--;
  }
};

Thermostat.prototype.switchPowerSaving = function () {
  this.powerSaving = !this.powerSaving;
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature >= 25) {
    return "high";
  } else if (this.temperature >= 18) {
    return "medium";
  } else {
    return "low";
  }
};
