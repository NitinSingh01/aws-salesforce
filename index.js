var jsforce = require('jsforce');
var USERNAME = "";
var PASSWORD = "";
var conn = new jsforce.Connection({
 clientId: '',
 clientSecret: '',
 redirectUri: 'http://localhost:3000/oauth/_callback',
// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Licensed under the Amazon Software License
// http://aws.amazon.com/asl/
 mode: 'single'
});
console.log("Hello");
var conn = new jsforce.Connection({});
conn.login(USERNAME, PASSWORD, function(err, userInfo) {
  if (err) { return console.error(err); }
  console.log("Hello");
  conn.streaming.topic("/event/OppCRUD__e").subscribe(function(message) {
	console.log("Hello");
    console.dir(message);
  });
});
