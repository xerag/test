console.log("start");
var Twit = require('twit')
 
var T = new Twit({
  consumer_key:         'MR1YjgjKOwO6DZqJuWbTpanoG',
  consumer_secret:      'hD8LZa3Q8OT3lgfsxgfLAbsYlNjtbX5VrJxsaGPsDaa5hEx5gD',
  access_token:         '628169433-yegVNl0ZuphBfBTWHmmUFgIcLBDdmdbbJMUKUl6P',
  access_token_secret:  'dt0TmTIU1NLfRtKfx7aWyLhkbqYMH5Dj7bi7KSeectxv8',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})
 
// 
//  tweet 'hello world!' 
// 
T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})
 
// 
//  search twitter for all tweets containing the word 'banana' since July 11, 2011 
// 
T.get('search/tweets', { q: '北朝鮮 since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})
 

