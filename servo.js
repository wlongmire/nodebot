var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var servo = new five.Servo(11);
  var position = servo.range[0];

  setInterval(()=>{
    servo.to(position);
    position = (position >= servo.range[1])?0:position + 60;
  }, 300);

  // servo.sweep({
  //   range:[0,180],
  //   interval: 5000,
  //   step:100
  // });

  // this.repl.inject({
  //   servo: servo
  // });
});
