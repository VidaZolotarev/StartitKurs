/*
  U nastavku su test podaci kao i potpisi funkcija. U komentarima je objašnjenje šta koja funkcija treba da uradi i šta treba da vrati kao rezultat izvršenja.
*/

var test_objekat1 = {
    ime: "Petar",
    prezime: "Petrovic",
    ocene: [1, 6, 2, 5, 7, 2, 8, 3]
};
    
var test_objekat2 = {
    ime: "Marko",
    prezime: "Markovic",
    ocene: [45, 62, 123, 63, 74, 85, 21, 77]
};

var test_objekat3 = {
    ime: "Jovan",
    prezime: "Jovanovic",
    ocene: [-6, 23, 10, 0, -22, 52, 86, 2]
};


// Najmanja ocena osobe, funkcija vraća broj
function getMinGrade(person) {
    var smallestNumber = person[0];
    for(var i = 0; i < person.length; i++)
    {
        if(person[i] < smallestNumber)
        {
            smallestNumber = person[i];
        }
    }
    console.log(smallestNumber);

}

console.log("Get Min Grade: ");
console.log(getMinGrade(test_objekat1.ocene));
console.log(getMinGrade(test_objekat2.ocene));
console.log(getMinGrade(test_objekat3.ocene));

// Najveća ocena osobe, funkcija vraća broj
function getMaxGrade(grades) {
var maxNumber = grades[0];
for(var i = 0; i < grades.length; i++)
{
    if(grades[i] > maxNumber)
    {
        maxNumber = grades[i];
    }
}
console.log(maxNumber);
}

console.log("Get Max Grade: -----------------");
console.log(getMaxGrade(test_objekat1.ocene)); // Oprez! Voditi računa šta se prosleđuje kao argument
console.log(getMaxGrade(test_objekat2.ocene)); // Oprez! Voditi računa šta se prosleđuje kao argument
console.log(getMaxGrade(test_objekat3.ocene)); // Oprez! Voditi računa šta se prosleđuje kao argument 

// Novi niz koji se sastoji od parnih ocena osobe, funkcija vraća niz
function getArrayOfEvenGrades(person) {
  var parniNiz=[];
  for(var i = 0; i < person.length; i++)
  {
    if (person[i] % 2 === 0)
    {
        parniNiz.push(person[i]);
    }
  }
  console.log(parniNiz);
}

console.log("Array of Even Grades: -----------------");
console.log(getArrayOfEvenGrades(test_objekat1.ocene));
console.log(getArrayOfEvenGrades(test_objekat2.ocene));
console.log(getArrayOfEvenGrades(test_objekat3.ocene));

// Novi niz koji se sastoji od neparnih ocena osobe, funkcija vraća niz
function getArrayOfOddGrades(grades) {
    var neparniNiz = [];
    for(var i = 0; i < grades.length; i++)
    {
        if(grades[i] % 2 != 0)
        {
            neparniNiz.push(grades[i]);
        }
    }
    console.log(neparniNiz);
  
}

console.log("Array of Odd Grades: -----------------");
console.log(getArrayOfOddGrades(test_objekat1.ocene)); // Oprez
console.log(getArrayOfOddGrades(test_objekat2.ocene)); // Oprez
console.log(getArrayOfOddGrades(test_objekat3.ocene)); // Oprez

// Suma svih ocena, funkcija vraća broj
function getSumOfGrades(grades) {
    var suma = 0;
    for(var i = 0; i < grades.length; i++)
    {
        suma += grades[i];
    }
  console.log(suma);
}

console.log("Sum of elements: -----------------");
console.log(getSumOfGrades(test_objekat1.ocene));
console.log(getSumOfGrades(test_objekat2.ocene));
console.log(getSumOfGrades(test_objekat3.ocene));

// Novi niz koji se dobija množenjem parnih ocena sa 3, a neparnih sa 4, funkcija vraća niz
function getMappedGrades(person) {
    var nizNovi = [];
  for(var i = 0; i< person.length; i++)
    {
      
      if(person[i] % 2 === 0)
      {
        nizNovi.push(person[i] *3);
      }
      else
      {
        nizNovi.push(person[i] * 4);
      }
      
    }
    
    console.log(nizNovi);

  
}

console.log("Mapped grades: -----------------");
console.log(getMappedGrades(test_objekat1.ocene));
console.log(getMappedGrades(test_objekat2.ocene));
console.log(getMappedGrades(test_objekat3.ocene));

// Novi niz koji se dobija stavljanjem parnih ocena na početak niza, a neparnih na kraj. Mogu se praviti pomoćni nizovi za parne i neparne pa da se na kraju spoje. Funkcija vraća niz
function reorderGrades(grades) {
    var nizParni = [];
    var nizNeparni = [];
    var velikiNiz = [];
    for(var i = 0; i < grades.length; i++)
    {
        if(grades[i] % 2 === 0)
        {
            nizParni.push(grades[i]);
        }
        else
        {
            nizNeparni.push(grades[i]);
        }

    }
    velikiNiz.push(nizParni + nizNeparni);
    console.log(velikiNiz); // vidi da li moze da bude number
}

console.log("Reordered array: -----------------");
console.log(reorderGrades(test_objekat1.ocene));
console.log(reorderGrades(test_objekat2.ocene));
console.log(reorderGrades(test_objekat3.ocene));

// Koliko je ocena veće od zadatog broja? Funkcija vraća broj.
function getNumberOfGradesGreaterThan(person, limit) {
    var noviNiz = [];
  for(var i = 0; i < person.length; i++)
  {
    if( person[i] > limit)
    {
      noviNiz.push(person[i]);
    }
    
  }
  console.log(noviNiz.length);
  
}

console.log("Grades greater than given number: -----------------");
console.log(getNumberOfGradesGreaterThan(test_objekat1.ocene, 5));
console.log(getNumberOfGradesGreaterThan(test_objekat2.ocene, 47));
console.log(getNumberOfGradesGreaterThan(test_objekat3.ocene, 3));

// Ako je treći argument true treba napraviti novi niz od ocena osobe koji su VEĆE ili JEDNAKE od zadatog broja. Ako je treći argument false treba napraviti novi niz od ocena osobe koji su MANJE od zadatog broja. Funkcija vraća niz
function filterOutGrades(array, limit, direction) {
  var trueNiz = [];
  var falseNiz = [];
  for(var i = 0; i < array.length; i++)
  {
    if (direction === true && array[i] >= limit)
    {
     trueNiz.push(array[i]);
    }
    else if(direction === false && array[i] < limit)
    {
         falseNiz.push(array[i]);
    }
    
    
  }
 console.log("niz je " + trueNiz + falseNiz);
 


  
}

console.log("Filtered grades: -----------------");
console.log(filterOutGrades(test_objekat1.ocene, 5, true)); //6,5,7,8
console.log(filterOutGrades(test_objekat1.ocene, 7, false)); // 1,6,2,5,2,3

console.log(filterOutGrades(test_objekat2.ocene, 47, false));
console.log(filterOutGrades(test_objekat2.ocene, 47, true));

console.log(filterOutGrades(test_objekat3.ocene, 1, true));
console.log(filterOutGrades(test_objekat3.ocene, 5, false));

    ocene: [1, 6, 2, 5, 7, 2, 8, 3]

    ocene: [45, 62, 123, 63, 74, 85, 21, 77]

    ocene: [-6, 23, 10, 0, -22, 52, 86, 2]