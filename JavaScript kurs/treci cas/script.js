// var niz = [];
// for (var i = 0; i < 100; i++){
// 	// niz[i] = i + 1;
// 	niz.push(i);
// }

// console.log(niz);


// najveci element niza [23, 43, -8, 77, 0, 23, 15]
// for loop
// if


// var niz = [23, 43, -8, 77, 0, 23, 15];
// var najveciBroj = 0;

// for(var i = 0; i < niz.length; i++) 
// {
// 	if(niz[i] > najveciBroj )
// 	{
// 		najveciBroj = niz[i];
// 	}

// }
// 	console.log(najveciBroj);

var niz = [53, 63, -4, 67, 0, 23, 13];
var maxElement = niz[0];// bolje resenje jer 0 ne bi radila za negativne brojeve
for(var i = 0; i < niz.length; i++)
{
	if(niz[i] > maxElement)
	{
		maxElement = niz[i];
	}
}

console.log("najveci element niza je: " + maxElement);




// 	dupiliranjem elemenata niza napravi drugi niz

// 	var obicniNiz = [7, 15, 45, 78, 20, 9];
// 	var dupliNiz = [];

// 	for(var i = 0; i < obicniNiz.length; i++)
// 	{
// 		dupliNiz[i] = obicniNiz[i] * 2;
// 	}

// 	console.log(dupliNiz);

var prviNiz = [2, 5, 45, 78, 23, 9]
var drugiNiz = [];
 for(var i=0; i< prviNiz.length; i++)
 {
 	drugiNiz.push(prviNiz[i] * 2);
 }

 console.log(drugiNiz);

// razvrstati elemente niza prema parnosti;
// var nizParnosti = [16, 23, 3, 78, 9, 14, 17];

// var paranNiz = [];
// var neparanNiz = [];

// for(var i = 0; i < nizParnosti.length; i++)
// {
// 	if(nizParnosti[i] % 2 === 0)
// 	{
// 		paranNiz.push(nizParnosti[i]);
// 	}
// 	else
// 	{neparanNiz.push(nizParnosti[i]);
// 	}

// }
// console.log(paranNiz)
// console.log(neparanNiz)

var niz = [ 43, 5, 3, 78, 9, 12, 11];
var  parni = [];
var neparni = [];
for (var i = 0; i< niz.length; i += 1)
{
	if( niz[i] % 2 == 0)
	{
		parni.push(niz[i]);
	}
	else
	{
		neparni.push(niz[i]);
	}
}

console.log("parni: " + parni);
console.log("neparni: " + neparni);

// Cene različitih proizvoda su zadate u vidu niza. Za proizvode čija je 
//cena manja od 50 dodati porez od 18% u suprotnom porez od 8%. 
//Izračunati krajnji trošak (sabrati cene i njihov porez). 

// var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];

// var minTrosak = []
// var maxTrosak = [];
// for( var i = 0; i < cene.length; i++)
// {
// 	if(cene[i] < 50)
// 	{
// 		maxTrosak.push((cene[i] * (18/100)) + cene[i]);
// 	}
// 		else
// 		{
// 			minTrosak.push((cene[i] * (8/100)) + cene[i]);
// 		}
// }
// console.log(maxTrosak);
// console.log(minTrosak);

//Napisati program koji će za unetu reč proveriti da li je palindrom. 
//Palindromi su reči koje se mogu čitati i sa leva na desno i sa desna na levo sa istim značenjem. 
// Npr: ana - anna - anana  - anavolimilovana

// var niz = ["ana", "anavolimilovana"];
// console.log(palindrom(niz));

// function palindrom(rec){
	
// 	for(var i=0; i< rec.length; i++)
// 	{
// 		if(rec[i] == rec[i-1])
// 		{

// 		}
// 	}

// }


// function palindrom(rec)
// {
// 	var niz = [];
// 	for(var i = 0; i < rec.length; i++)
// 	{
// 		if (rec[i] !== " ")
// 		{
// 			niz.push(rec[i]);
// 		}
		
// 	}
// 	return niz;

// 	for(var i=0; i < niz.length; i++)
// 		debugger

// 	{
// 		if(niz[i] == (niz.length - 1)-i)
// 		{
// 			console.log("This is palindrom."); 
// 		}
// 		else
// 		{
// 			console.log("This is not palindrom.");
// 		}
		
//	}
 //}

//  console.log(palindrom("ana voli milovana"));

// var niz = ["a", "n", "a", "v", "o","l", "i", "m", "i", "l", "o", "V", "a", "n"];
// var polaNiza = Math.floor(niz.length/2);


// for(var i = 0; i < polaNiza; i++)
// {
// 	if( niz[i] == niz[niz.length-1-i] )
// 	{
// 		console.log("this is palindrom");
// 	}
// 	else
// 	{
// 		console.log("This is not palindrom");
// 	}
// }


// function palindrom(rec)
// {
// 	var niz = [];
	
// 	for(var i = 0; i < rec.length; i++)
// 	{
// 		if(rec[i] !== " ")
// 		{
// 			niz.push(rec[i]);
// 		}
// 	}
// 	var polaNiza = Math.floor(niz.length/2);
// 	for(var i=0; i<polaNiza; i++)
// 	{
// 		if (rec[i] == rec[niz.length-1-i]) 
// 		{
// 			return rec + " is palindrom.";
// 		}
// 		return rec + " is not palindrom.";
// 	}
	 
	 
// }

// console.log(palindrom("ana voli milovana"));
// console.log(palindrom("ana"));
// console.log(palindrom("milovan"));

// function palindrom(rec)
// {
// 	var slovo = rec.length;
// 	for( var i = 0; i < Math.floor(slovo/2); i++)
// 	{
// 		if(rec[i] === rec[slovo-1] )
// 		{
// 			return rec + " is palindrom.";
// 		}
// 			return rec + " is not palindrom.";
// 	}
// }

// console.log(palindrom("ana voli milovana"));
// console.log(palindrom("ana"));
// console.log(palindrom("milovan"));


//function statement function bar(){} bar()

//named function expression : var bar = function imeFunkcije(){}   poziva se bar()
// anonymus function expression var bar = function(){} bar()