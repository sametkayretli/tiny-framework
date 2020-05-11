(function(global, $){

   var Greetr = function(firstName, lastName, language){
      return new Greetr.init(firstName, lastName, language);
   }

   var supportedLangs = ["en", "tr"];

   var greetings = {
      en: "Hello",
      tr: "Selam"
   };

   var formalGreetings = {
      en: "Greetings",
      tr: "Merhaba"
   };

   var logMessages = {
      en: "Logged In",
      tr: "Giriş Yapıldı"
   };



   Greetr.prototype = {

      // adding methods (functionallity)

      fullName: function(){
      
         return this.firstName + " " + this.lastName;
      
      },


      validate: function(){
   
         if(supportedLangs.indexOf(this.language) === -1){
   
            throw "Invalid Language";
   
         }
      },


      greeting: function(){
   
         return greetings[this.language] + " " + this.firstName + "!";

      },

         
      formalGreeting: function(){
   
         return formalGreetings[this.language] + ", " + this.fullName();
   
      },

      greet: function(formal){

         var msg;


         // if undefined or null it will be coerced to "false"

         if(formal){
             
            msg = this.formalGreeting();
            
         } else {
            
            msg = this.greeting();
            
         }

         if(console){

            console.log(msg);

         }

         /*
         "this" refers to the calling object at execution time make the 
         method chainable !!
         */
         return this;
      },

      log: function(){

         if(console){

            console.log(logMessages[this.language] + ": " + this.fullName());
         }
         return this;
      },

      setLang: function(lang){
         
         this.language = lang;
         this.validate();

         return this;
      }

   };
   
   
   // this is the actual object
   Greetr.init = function(firstName, lastName, language){
      
      //setting up this to self for safe
      
      var self = this;

      // setting up some default properties in function constructor
      self.firstName = firstName || "";
      self.lastName = lastName || "";
      self.language = language || "en";

   }

   Greetr.init.prototype = Greetr.prototype;

   /*
   Exposing or opening the function to the world, to the global. In order to use it 
   we can both write Greetr and G$ for it.
   */
   global.Greetr = global.G$ = Greetr;

}(window, jQuery));