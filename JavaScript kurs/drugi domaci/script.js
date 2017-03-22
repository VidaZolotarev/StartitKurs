//Napisati funkciju koja računa sumu prvih N prirodnih brojeva

var suma = function(broj)
{	
	var sum = 0;
	for (var i = 0; i<=broj; i++)
	{
	sum = sum + i;
	}
		return sum;

}
document.write("Rezultat prve funkcije je:  " + suma(5) + "</br>");


function izracunajSumu(broj)
{
	if(typeof broj === "number" && broj > 0 && broj % 1 === 0)
	{
		var suma = 0;
		for(var i = 0; i <=broj; i++)
		{
			suma+= i
		}
		return suma;
	}

	return "Unesi ceo ne negativan broj"
}

console.log(izracunajSumu(5));

//Napisati funkciju koja računa faktorijel zadatog broja

var proizvod = function(i)
	{
		if (i === 0)
			{
				return 1;
			}
		
		return i * proizvod(i-1);

	}
	
document.write("Rezultat druge funkcije je: " + proizvod(5) + "</br>");

// II resenje

var multi = function(number)
	{	
		var proiz = 1;
		for (var i = 1; i <=number; i++)
			{
				proiz = proiz * i;
			}
		
		return proiz;
	}
	
document.write("Rezultat druge funkcije je: " + multi(3) + "</br>");


// Napisati funkciju koja izračunava koliko komada proizvoda možemo da kupimo ako znamo koliko para imamo na računu i koliko košta jedan proizvod

var kupovina = function(novac, cena)
{
	var broj = novac/cena;
	return Math.round(broj);
	// return Math.floor(novac/cena);
}

document.write("Rezultat trece funkcije je: " + kupovina(1000, 89.99) + "</br>");

// Napisati funkciju koja izračunava zbir svih celih brojeva u zadatom opsegu N i K, pri čemu je N uvek manje od K. N i K mogu biti i negativni

var zbir = function(n,k)
{
	var sum = 0;
	for(var i = n; i <= k; i++)
	{
		sum = sum + i;
	}	

	return sum;
}
document.write("Rezultat cetvrte funkcije je: " + zbir(-3, 2) + "</br>");


function sumaZadatogOpsega(n,k)
{
	var suma = 0;
	var rezultat;

	if(typeof n !== "number" || typeof k !== "number")
	{
		rezultat = "Oba parametra treba da budu brojevi";
	}
	else if( n < k)
	{
		for( var i = n; i <= k; i++)
		{
			sum +=i
		}
		rezultat = "suma brojeva od" + n + " do " + k + " je " suma;
	}
	else
	{
		rezultat = "prvi parametar treba da bude manji od drugog"
	}

	return rezultat;

}

console.log(sumaZadatogOpsega( 3, 6));
console.log(sumaZadatogOpsega(3, "foo"));
console.log(sumaZadatogOpsega(4, 4))
console.log(sumaZadatogOpsega(14, 4))
// umesto varijable rezultat moze da ide i return