var testObjekat = {
  naziv: "Startit kurs pravljenja sajtova",
  trajanjeNedelja: 33,
  predavac: {
    ime: "Petar",
    prezime: "Popovic"
  },
  ocenePolaznika: [3, 2, 7, 4, 8, 1, 9, 2, 10, 10, 3, 6, 3, 1, 7, 3, 5, 4, 10, 9, 1, 9],
  organizacija: "Startit",
  kursJosTraje: true
};

var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  }
];


// // Vezba 1
// //   Dobili smo sirove podatke i zaduženje da izvučemo određenu statistiku.
// //   Naš zadatak: Napraviti novi objekat koji će da sadrži broj zaposlenih u svakom departmentu, dakle:
// //   {
// //     Engineering: 2,
// //     IT: 2,
// //     Management: 1
// //   }


var result = {};
for(var i = 0; i < people.length; i++)
{
  
  var worker = people[i];
  var departman = worker.department;
  var workerAll = worker.name;

  if(result[departman] != null){
    result[departman] =  result[departman] + 1;
  } 
  else
  {
    result[departman] = 1;
  }
 
  
}
  console.log(result);



// //update podataka;
var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  },
  {
    name: 'John Doe',
    yearsExperience: 7,
    department: 'Management'
  }
];



// // Vezba 2
// //   Dobili smo sirove podatke i zaduženje da izvučemo određenu statistiku.
// //   Naš zadatak: Napraviti novi objekat koji će da sadrži zaposlene razvrstane po iskustvu, dakle:
// //   {
// //     AMATEUR: ["Bill Billson"],
// //     EXPERT: ["Sally Sallerson", "Jane Janet"],
// //     NEWBIE: ["Joe Schmoe"],
// //     PRO: ["Bob Hope", "John Doe"]
// //   }


  var result = {};
  for(var i = 0; i < people.length; i++)
  {
    var worker = people[i];
    var workerName = worker.name;
    var workerExperience = worker.yearsExperience;

    if (workerExperience > 1 && workerExperience <= 5)
    {
      var key = "AMATEUR";
      updateObject(key);
    }
    else if(workerExperience > 10)
    {
      var key = "EXPERT";
      updateObject(key);     
    }
    else if( workerExperience  < 5)
    {
      var key = "NEWBIE";
      updateObject(key);   
    }

    else if( workerExperience > 5 && workerExperience < 10){
      var key = "PRO";
      updateObject(key);
    }
  }

  function updateObject(key) {
      if(result[key] != null) {
         result[key] = result[key] + ',' + workerName;
       }else{
         result[key] = workerName;
      }
  }
  console.log(result);

  

  

// Vezba 3
//   Dobili smo sirove podatke i zaduženje da izvučemo određenu statistiku.
//   Naš zadatak: Napraviti novi niz koji će da sadrži imena zaposlenih, dakle:
//   [
//        "Joe Schmoe",
//        "Sally Sallerson",
//        "Bill Billson",
//        "Jane Janet",
//        "Bob Hope",
//        "John Doe"
//   ]


function zaposleni(depart, ime)
 {
  var allDepartmants = [];

  for(var i = 0; i < depart.length; i++)
  {
    allDepartmants.push(depart[i][ime])
  }
  console.log(allDepartmants);
 }

zaposleni(people, "name");




// vezba 4 

var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];


//vezba 4
// Novi niz koji se dobija množenjem parnih elemenata sa 3,
// a neparnih sa 4, funkcija vraća niz

function multiplyEvenAndOdds(array) 
{
  var niz = [];
  for(var i = 0; i< array.length; i++)
    {
      
      if(array[i] % 2 === 0)
      {
        niz.push(array[i] *3);
      }
      else
      {
        niz.push(array[i] * 4);
      }
      
    }
    
    console.log(niz);
}

console.log(multiplyEvenAndOdds(test_niz1));
console.log(multiplyEvenAndOdds(test_niz2));
console.log(multiplyEvenAndOdds(test_niz3));






// vezba 5
// Koliko elemenata ulaznog niza je veće od zadatog broja?
// Funkcija vraća broj.
function getNumberOfElementsGreaterThan(array, limit) 
{
  var noviNiz = [];
  for(var i = 0; i < array.length; i++)
  {
    if( array[i] > limit)
    {
      noviNiz.push(array[i]);
    }
    
  }
  console.log(noviNiz.length);

}

console.log(getNumberOfElementsGreaterThan(test_niz1, 5));
console.log(getNumberOfElementsGreaterThan(test_niz2, 47));
console.log(getNumberOfElementsGreaterThan(test_niz3, 3));






// vezba 6
// Ako je treći argument true treba napraviti novi niz
// od elemenata ulaznog koji su VEĆI ili JEDNAKI od
// zadatog broja. Ako je treći argument false treba 
// napraviti novi niz od elemenata ulaznog koji su
// MANJI od zadatog broja. Funkcija vraća niz

function filterOutElements(array, limit, direction) {

  console.log(array);
  var nizTrue = [];
  var nizFalse = [];
  for(var i = 0; i < array.length; i++)
  {
    if (direction == true && array[i] >= limit)
    {
      nizTrue.push(array[i]);
    }
    else if(direction == false && array[i] < limit)
    {
      nizFalse.push(array[i]);
      
    }
  }
  console.log( "niz je  " + nizTrue + nizFalse);


}
console.log(filterOutElements(test_niz1, 5, true));
console.log(filterOutElements(test_niz1, 7, false));

console.log(filterOutElements(test_niz2, 47, false));
console.log(filterOutElements(test_niz2, 47, true));

console.log(filterOutElements(test_niz3, 1, true));
console.log(filterOutElements(test_niz3, 5, false));