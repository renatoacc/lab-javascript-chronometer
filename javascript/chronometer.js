class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {

      if(callback){
        callback(this.split());
      }
      this.currentTime++;

    }, 1000);
  }

  getMinutes() {
    let min = 0;
    // if(this.currentTime % 60 === 0){
    //   min = this.currentTime / 60;
    // };
    if(this.currentTime >= 60){
      min = Math.floor(this.currentTime / 60);
    }
    return min;
    //return Math.floor(min);
  }

  getSeconds() {
    let sec = 0; 
    sec = Math.floor(this.currentTime % 60);
    return sec;
  }

  computeTwoDigitNumber(value) {
    let toDigital = value.toString();
    if(toDigital.length === 1){
      return toDigital = `0${toDigital}`;
    }
      return toDigital;
    }

  stop() {
    clearInterval(this.intervalId);
  }

  reset(callback) {
    this.currentTime = 0;
    if(callback){
      callback(this.split());
    };
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let secunds = this.computeTwoDigitNumber(this.getSeconds());

    return (`${minutes}:${secunds}`);
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
