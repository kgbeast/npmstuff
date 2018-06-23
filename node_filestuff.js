var fs = require('fs');
//The fs.appendFile() method appends specified content to a file. 
//If the file does not exist, the file will be created
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('fs.appendFile mynewfile1.txt Saved!');
});

//The fs.open() method takes a "flag" as the second argument, 
//if the flag is "w" for "writing", the specified file is opened for writing. 
//If the file does not exist, an empty file is created:
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('fs.open mynewfile2.txt Saved!');
});

//The fs.writeFile() method replaces the specified file and content if it exists. 
//If the file does not exist, a new file, containing the specified content, will be created:
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('fs.writeFile mynewfile3.txt Saved!');
});

//The fs.appendFile() method appends the specified content at the end of the specified file:
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('fs.appendFile mynewfile1.txt Updated!');
});

//The fs.writeFile() method replaces the specified file and content:
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('fs.writeFile mynewfile3.txt Replaced!');
});

//To delete a file with the File System module,  use the fs.unlink() method.
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('fs.unlink mynewfile2.tx File deleted!');
});

//To rename a file with the File System module,  use the fs.rename() method.
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
  
  
});

