var five = require("johnny-five");
var board = new five.Board();
var blink_rate = 250;

var light_states = {
  blink_on:true,
  leds:[],

  init:(leds)=>{
    this.leds = leds;
  },

  off:()=>{
    this.leds[0].off();
    this.leds[1].off();
  },

  on:()=>{
    this.leds[0].on();
    this.leds[1].on();
  },

  pulse:()=>{
    this.leds[0].pulse();
    this.leds[1].pulse();
  },


  blink:()=>{
    this.leds[0].off();
    this.leds[1].off();

    if (this.blink_on) {
      this.leds[0].on();
      this.leds[1].off();
    } else {
      this.leds[0].off();
      this.leds[1].on();
    }

    this.blink_on = !this.blink_on;
  }
}

board.on("ready", function() {

  light_states.init([new five.Led(11), new five.Led(9)]);

  var state = process.argv[2];
  var speed = process.argv[3] || 500;

  setInterval(()=>{
    light_states[state]();
  }, Number(speed));

});
