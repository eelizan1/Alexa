exports.handler = function(event, context) {
  // event can access the request object and its properties
  // context deals with lambda service (success or fail)

  var request = event.request;

  /* REQUEST TYPES
    1. LauchRequest          Ex. "Open greetre"
    2. IntentRequest         Ex. "Say hello to John"
    3. SessionEndedRequest   Ex. "Exit"
  */

  if(request.type === "LaunchRequest") {

  } else if(request.type === "IntentRequest") {

  } else if(request.type === "SessionEndedRequest") {

  } else {
    // error handling
    context.fail("Unknown intent type");
  }
}

// function to form the repsonse
// options are the response type
function buildResponse(options) {
  var response = {
    version: "1.0",

  }
}
