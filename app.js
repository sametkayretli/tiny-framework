/*
Gets a new object (the architecture allows us to not have to
use the "new" keyword here)
*/
var s = G$("samet", "kayretli");

// use our chainable methods
s.greet().setLang("tr").greet(true).log();

// When you click the login button jQuery "click" method the function is invoked
$("#login").click(function(){

   // Create a variable for Greetr.js
   var loginGrtr = G$("samet", "kayretli");

   // Hide the login division
   $("#logindiv").hide();

   /*
   1. get the data for Greetr.js
   2. set the language by retrieving from #lang selector value
   3. invoke HTMLGreeting function
   4. Print the log message by invoking log function
   */
   loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});