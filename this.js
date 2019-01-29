
function User() {
    var FirstName, Surname;
    
    this.setFirstName = function(firstName){
      FirstName = firstName;
    };
    
    this.setSurname = function (surname){
      Surname = surname;
    };
    
    var fullName = FirstName + Surname;
    this.getFullName = function(){
      return FirstName + ' ' + Surname;
    };
    
  }
  
  var user = new User();
  user.setFirstName("Петя");
  user.setSurname("Иванов");
  console.log( user.getFullName() ); // Петя Иванов