// Cene različitih proizvoda su zadate u vidu niza. Za proizvode čija je 
//cena manja od 50 dodati porez od 18% u suprotnom porez od 8%. 
//Izračunati krajnji trošak (sabrati cene i njihov porez). 

var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];

var minTrosak = []
var maxTrosak = [];
for( var i = 0; i < cene.length; i++)
{
	if(cene[i] < 50)
	{
		maxTrosak.push((cene[i] * (18/100)) + cene[i]);
	}
	else
	{
		minTrosak.push((cene[i] * (8/100)) + cene[i]);
	}
}
console.log(maxTrosak);
console.log(minTrosak);

var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];

const POREZ1 = 0.18; //ranije je constanta pisana velikim slovom
const POREZ2 = 0.08;

var ukupniTrosak = 0;

for(var i = 0; i < cene.length; i++)
{
	if ( cene[i] < 50)
	{
		ukupniTrosak += cene[i] + (cene[i] * POREZ1);
	}
	else
	{
		ukupniTrosak += cene[i] + (cene[i] * POREZ2)
	}
}
console.log( "ukupni trosak iznosi: " + ukupniTrosak);

//Napisati program koji će za unetu reč proveriti da li je palindrom. 
//Palindromi su reči koje se mogu čitati i sa leva na desno i sa desna na levo sa istim značenjem. 
// Npr: ana - anna - anana  - anavolimilovana

function palindrom(rec)
{
	var niz = [];
	
	for(var i = 0; i < rec.length; i++)
	{
		if(rec[i] !== " ")
		{
			niz.push(rec[i]);
		}
	}
	var polaNiza = Math.floor(niz.length/2);
	
	for(var i=0; i<polaNiza; i++)
	{
		if (niz[i] !== niz[niz.length-1-i]) 
		{
			return rec + " is not palindrom.";
		}
		
	}
	 return rec + " is palindrom.";
	 
}

console.log(palindrom("ana voli milovana"));
console.log(palindrom("ana"));
console.log(palindrom("milovan"));


function daLiJePalindrom(rec)
{
	var isPalindrom = true;

	for(var i = 0, j = rec.length - 1; i < rec.length/2; i++, j--)
	{
		if ( rec[i] !== rec[j])
		{
			isPalindrom = false;
			break;
		}
	}
	return isPalindrom ? rec + " jeste palindrom" : rec + " nije palindrm"; //ternarni oparator
}

daLiJePalindrom("radar");
daLiJePalindrom("rakija");