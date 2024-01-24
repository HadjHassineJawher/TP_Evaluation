const personInfo = function(person) {
    const name = person.nom;
    const age = person.age;
    const city = person.ville;
  
    return name + " is " + age + " years old and lives in " + city + ".";
  };
  
  const person = {
    nom: "Jawher",
    age: 25,
    ville: "Tunis"
  };
  
  console.log(personInfo(person)); 