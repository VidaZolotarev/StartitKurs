// var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];
// var trazenaVrednost = 4;
// var vrednostZaZamenu = 25;
// for(var i = 0; i < niz.length; i++ )
// {
// 	if (niz[i] === trazenaVrednost)
// 	{
// 		niz[i] = vrednostZaZamenu;
// 	}
// }

// console.log(niz);

// Prvi zadatak

function noviNiz(ulazniNiz, trazenaVrednost, vrednostZaZamenu)
{
	for(var i = 0; i < ulazniNiz.length; i++)
	{
		if(ulazniNiz[i] === trazenaVrednost)
		{
			ulazniNiz[i] = vrednostZaZamenu;
		}
	}
	console.log(ulazniNiz);
}

noviNiz([7, 4, 52, 10, 4, 5, 12, 1, 3, 6], 4, 25);

// var niz = [3, 7, 6, 8];
// var niz = [1, 3, 1, 5];
 
 function duplaVrednost(niz)
 {
 	var help;
 	for(var i = 0; i < niz.length; i++)
 	{
 		for(var j = i +1; j< niz.length; j++)
 		{
 			if(niz[i] > niz[j])
 			{
 				help = niz[i];
 				niz[i] = niz[j];
 				niz[j]= help;
 			}
 		}
 	}

 	for(var i = 0; i < niz.length-1; i++)
 	{
 		if(niz[i] == niz[i + 1])
 		{
 			return "have two number " + true;
 		}
 	}
 	return  "don't have " + false;
 }


console.log(duplaVrednost([3, 6, 3, 8]));
console.log(duplaVrednost([3, 7, 6, 8]));

  // Pravila kojih se držimo i poruke koje vraćamo:
  //      zbir težina <= maxWeight : "nosimo oba"
  //      težina prvog je > maxWeight i takođe težina drugog > maxWeight : "ne možemo ni jedan da ponesemo"
  //      težina prvog je > maxWeight ali težina drugog je <= maxWeight : "možemo drugi"
  //      težina prvog je <= maxWeight, a težina drugog je > maxWeight : "možemo prvi"
  //      težina prvog je <= maxWeight, a isto tako težina drugog <= maxWeight, međutim njihov zbir je > maxWeight : "možemo da biramo koji ćemo ali ne možemo oba"


function izaberiPredmet(weight1, weight2, maxWeight)
{
	debugger
	if(weight1 + weight2 <= maxWeight)
	{
		console.log("nosi oba");
	}
	else if(weight1 > maxWeight && weight2 > maxWeight)
	{
		console.log("ne moze ni jedan");
	}
	else if(weight1 > maxWeight && weight2 <= maxWeight)
	{
		console.log("moze drugi predmet");
	}

	else if(weight1 <= maxWeight && weight2 > maxWeight)
	{
		console.log("moze prvi predmet")
	}
	else if(weight1 <= maxWeight && weight2 <= maxWeight && weight1 + weight2 > maxWeight)
	{
		console.log("mozete birati koji zelite, ali ne mogu oba");
	}
	

}
console.log(izaberiPredmet(20, 30, 40));