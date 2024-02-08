

const EventEmitter = require("events");
const event = new EventEmitter();

 
event.on("sayMessage", () => {
  console.log("you SUBSCRIBE  The Youtube Channel");
});

event.emit("saycMessage");



 

