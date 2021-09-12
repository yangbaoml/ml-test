var formidable = require('formidable'),
  http = require('http'),
  util = require('util');
var fs = require('fs');

http.createServer(function (req, res) {

  // This if statement is here to catch form submissions, and initiate multipart form data parsing.

  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {

    // Instantiate a new formidable form for processing.

    var form = new formidable.IncomingForm();

    // form.parse analyzes the incoming stream data, picking apart the different fields and files for you.

    form.parse(req, function (err, fields, files) {
      if (err) {

        // Check for and handle any errors here.

        console.error(err.message);
        return;
      }

      console.log("path", files.upload.path)
      var readStream = fs.createReadStream(files.upload.path);
      readStream.on('open', function () {
        // This just pipes the read stream to the response object (which goes to the client)
        readStream.pipe(res);
      });

      // This catches any errors that happen while creating the readable stream (usually invalid names)
      readStream.on('error', function (err) {
        res.end(err);
      });
    });
    return;
  }

  // If this is a regular request, and not a form submission, then send the form.

  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">' +
    '<input type="text" name="title"><br>' +
    '<input type="file" name="upload" multiple="multiple"><br>' +
    '<input type="submit" value="Upload">' +
    '</form>'
  );
}).listen(8080);