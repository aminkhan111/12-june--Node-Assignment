 var fs = require("fs");
console.log("Deleting...");
fs.unlink('Nodejs_Arichitecture1.txt', function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("File deleted successfully!");
});

