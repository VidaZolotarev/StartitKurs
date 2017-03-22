// paran i neparan broj
for (var i=0; i<=10; i++)
{
	if ( i % 2 == 0)
	{
		document.write(i + " number is even" + "<br>");
	}
	else
	{
		document.write(i + " number is odd" + "<br>");
	}
}

// zbir

var n = 5;
var suma = 0;
for(var i = 0; i <= n; i++)
{
	suma += i;
}

console.log ("Suma je " + suma);

// sve sto uneses kroz prompt je string
// implicintna konverzija

var zbir = function(i)
	{
		if (i === 0)
			{
				return 0;
			}
		
		return i + zbir(i-1);
	}
	
console.log(zbir(3));

// faktorijal

var proizvod = function(i)
	{
		if (i === 0)
			{
				return 1;
			}
		
		return i * proizvod(i-1);
	}
	
console.log(proizvod(5));

//Koliko komada proizvoda moze se kupiti za odradjenu sumu novca  325dinara i cena proizvoda je 14din

var kupovina = function(novac, cena)
{
	var broj = novac/cena;
	console.log(Math.round(broj));
}
kupovina(325, 14)


var balansNaracunu = 325;
var cenaProizvoda = 14;

// console.log(Math.floor(nalansNaracunu / cenaProizvoda));
var kupljenoKomada = 0;

while(balansNaracunu - cenaProizvoda >= 0)
{
	balansNaracunu -= cenaProizvoda;
	kupljenoKomada++;
}




