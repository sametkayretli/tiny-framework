(function(global, $){

   // Creating variable Greetr and put a "new" object to it
   var Greetr = function(firstName, lastName, language){
      return new Greetr.init(firstName, lastName, language);
   }

   // Hidden within the scope of the IIFE  and never directly accessible
   var supportedLangs = ["en", "tr"];

   // Informal greetings
   var greetings = {
      en: "Hello",
      tr: "Selam"
   };

   // Formal greetings
   var formalGreetings = {
      en: "Greetings",
      tr: "Merhaba"
   };

   // Logger messages
   var logMessages = {
      en: "Logged In",
      tr: "Giriş Yapıldı"
   };


   // The prototype that holds methods (to save memory space)
   Greetr.prototype = {

      // adding methods (functionallity)

      // "this" refers to the calling object at execution time
      fullName: function(){
      
         return this.firstName + " " + this.lastName;
      
      },


      validate: function(){

         // Check that is a valid language
         // References the externally inaccessible "supportedLangs" within the closure 
         if(supportedLangs.indexOf(this.language) === -1){
   
            throw "Invalid Language";
   
         }
      },

      // Rerieve messages from object by referring to properties using [] syntax
      greeting: function(){
   
         return greetings[this.language] + " " + this.firstName + "!";

      },

         
      formalGreeting: function(){
   
         return formalGreetings[this.language] + ", " + this.fullName();
   
      },

      // Chainable methods return their own containing object
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

         // Make chainable
         return this;
      },

      setLang: function(lang){
         
         // Set the language
         this.language = lang;

         //validate
         this.validate();

         // Make chainable
         return this;
      },

      HTMLGreeting: function(selector, formal){
         if(!$){

            throw "jQuery not loaded";
         } 
         
         if(!selector){
         
            throw "Missing jQuery selector";
         }

         // Determine the message
         var msg;

         if(formal){

            msg = this.formalGreeting();
         
         } else {
            
            msg = this.greeting();
         }

         // Inject the message in the chosen place in the DOM
         $(selector).html(msg);

         // Make chainable
         return this;
      }

   };
   
   
   /* 
   This is the actual object created here, allowing us to "new" an object
   without calling "new"
   */
   Greetr.init = function(firstName, lastName, language){
      
      //setting up this to self for safe
      
      var self = this;

      // setting up some default properties in function constructor
      self.firstName = firstName || "";
      self.lastName = lastName || "";
      self.language = language || "en";

      self.validate();

   }

   // Trick borrowed from jQuery so we don't have to use the "new" keyword
   Greetr.init.prototype = Greetr.prototype;

   /*
   Exposing or opening the function to the world, to the global. In order to use it 
   we can both write Greetr and G$ for it.
   */
   global.Greetr = global.G$ = Greetr;

}(window, jQuery));