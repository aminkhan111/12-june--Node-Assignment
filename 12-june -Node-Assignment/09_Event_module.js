const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define the event handler
const eventHandler = () => {
  console.log('Event handler called');
};

// Add the event handler to the 'myEvent' event
eventEmitter.on('myEvent', eventHandler);

// Call the 'myEvent' event
eventEmitter.emit('myEvent'); // Output: Event handler called

// Remove the event handler from the 'myEvent' event
eventEmitter.off('myEvent', eventHandler);

// // Try to call the 'myEvent' event again
eventEmitter.emit('myEvent'); // Output: Nothing happens, as the event handler has been removed
