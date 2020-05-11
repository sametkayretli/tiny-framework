(function(global, $){

   var Greetr = function(firstName, lastName, language){
      return new Greetr.init(firstName, lastName, language);
   }

   // this is the actual object
   Greetr.init = function(firstName, lastName, language){

      Greetr.prototype = {};
      
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