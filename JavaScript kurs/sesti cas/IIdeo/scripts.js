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

// vezba IV
// Dobili smo sirove podatke i zaduženje da izvučemo određenu statistiku.
// Izračunati koliko godina iskustva imaju svi ljudi ukupno.


function godineIskustva(ljudi, godine)
{
  var ukupnoGodina=[];
  var zbir = 0;
   for(var i = 0; i < ljudi.length; i++)
    {
      ukupnoGodina.push(ljudi[i][godine]);
    }
    
    for(var j = 0; j < ukupnoGodina.length; j++)
    {
      zbir += ukupnoGodina[j];
    }
  console.log(zbir);
}

godineIskustva(people, "yearsExperience");


// vezba V
// Dobili smo sirove podatke i zaduženje da izvučemo određenu statistiku.
//   Naš zadatak: Napraviti novi objekat koji će da sadrži zbir godina iskustva po departmentima, dakle:
//   {
//     Engineering: 20,
//     IT: 10,
//     Management: 11
//   }
 
 var result = {};
for(var i = 0; i < people.length; i++)
{
  
  var worker = people[i];
  var departman = worker.department;
  var workerExperience = worker.yearsExperience;

  if(result[departman] != null){
    result[departman] = result[departman] + workerExperience;
  } 
  else
  {
    result[departman] = workerExperience;
  }
 
  
}
  console.log(result);
