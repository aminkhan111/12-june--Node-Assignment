var fs = require("fs");
fs.readFile('Nodejs_Arichitecture.txt', function (err, data) {
if (err) {
return console.error(err);
}
console.log("Asynchronous read: " + data)
// .toString())
});

var data = "1### High Performance  Non-blocking I/O Scalability Rich Ecosystem Single Language Community Support Cross-Platform Easy to Learn and Use Microservices Architecture ###";
// Append data to File
fs.appendFile('Nodejs_Arichitecture.txt', data, 'utf8', function(err) {
  if (err) throw err;
  // If no error
  console.log("Data is appended to file successfully.");
});


fs.readFile('Nodejs_Arichitecture.txt', function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
 