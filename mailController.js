
module.exports=function(email){
 var request = require("request");
var options = { method: 'POST',
url: 'https://us20.api.mailchimp.com/3.0/lists/b28a698bcf/members',
headers: 
 { 'Postman-Token': '758afb09-52bb-43df-855b-f192d2d9b986',
   'cache-control': 'no-cache',
   Authorization: 'Basic YW55c3RyaW5nOmQ3NjZhZjc4ODQ1NTNkOTEwYzFiNTMwMmQzYjhkZmY2LXVzMjA=',
   'Content-Type': 'application/json' },
body: { email_address:email, status: 'subscribed' },
json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
  return true
});

}