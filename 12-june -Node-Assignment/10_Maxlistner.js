const EventEmitter = require("events");
const event = new EventEmitter();

 
event.on("sayMessage", () => {
  console.log("you SUBSCRIBE  The Youtube Channel");
});

event.emit("saycMessage");





console.log(
  `The default maximum number of event listners are: ${event.getMaxListeners()}`
);

event.setMaxListeners(5);

console.log(
  `The updated maximum number of event listners are: ${event.getMaxListeners()}`
);

