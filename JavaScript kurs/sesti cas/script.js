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



// Vezba 1
// Stigli su nam podaci sa servera. Podaci su u vidu objekta koji čuva informacije o kursu i između ostalog niz ocena polaznika.

// Napisati funkciju koja će kao jedini parametar da prima objekat. Funkcija treba da vrati NOVI NIZ 
//čiji će elementi biti elementi niza sa ocenama unutar objekta plus sufiks "/10". Znači ako je ocena npr. 3 u novom nizu će biti string "3/10".
 
// Ispisati ocene u konzoli.
 
// ["3/10"," 2/10"," 7/10", "4/10"," 8/10", "1/10"," 9/10"....]

function niz(nizOcene)
{
	var noviNiz=[];
	
	nizOcene = testObjekat.ocenePolaznika;
	for(var i = 0; i < nizOcene.length; i++)
	{
		noviNiz.push(nizOcene[i] + "/10");
	}
	console.log(noviNiz);

}

niz();



// vezba II
// Stigli su nam podaci sa servera. Podaci su u vidu objekta koji čuva informacije o kursu i između ostalog niz ocena polaznika. 
// Želimo da izvučemo statistiku koliko ima koje ocene. Npr 5 osoba je dalo ocenu 3, 7 osoba je dalo ocenu 6, itd.
// Napisati funkciju koja će kao jedini parametar da prima objekat sa rezultatima. Funkcija treba da vrati NOVI NIZ čiji će elementi da
 // budu novi objekti za svaku ocenu 1-10 zasebno. Primer strukture i podataka:
// var rates_count = [
//     { rate_1: 4 }, // "rate_1" predstavlja ocenu "1", a 4 predstavlja
//     { rate_2: 2 }, // koliko puta se pojavljuje u ulaznom nizu






function kolikoOcena(ocene)
{
	for(var i = 0; i < ocene.length; i++)
	{
		var sveOcene=[];
		for(var x = i + 1; x < ocene.length; x++)
		{
			if(ocene[i] > ocene[x])
			{
				sveOcene = ocene[i];
				ocene[i] = ocene[x];
				ocene[x] = sveOcene;
			}
			
		}
	}
		var brojOcena=[];
		for(var i = 0; i < ocene.length; i++)
		{
			var count = 1;
			var kraj = true;
			for( k = 0; k < brojOcena.length; k++)
			{
				if(brojOcena[k] === ocene[i])
				{
					kraj = false;
					break;
				}
			}
				if(kraj === true)
				{
					for(var j = i + 1; j < ocene.length; j++)
					{
						if(ocene[i] == ocene[j])
						{
							count++;
						}
					}
						console.log("rate_" + ocene[i] + ": " + count);
						brojOcena.push(ocene[i]);
				}
		}	
}

kolikoOcena(testObjekat.ocenePolaznika);




// Vezba 3
// Stigli su nam podaci sa servera. Podaci su u vidu objekta koji čuva informacije o kursu i između ostalog niz ocena polaznika.
 
// Želimo da izračunamo prosečnu ocenu.
 
// Napisati funkciju koja će kao jedini parametar da prima objekat sa rezultatima. Funkcija treba da vrati prosečnu ocenu

function prosecnaOcena(sveOcene)
{
	
	var ocena = 0;
	for(var i = 0; i< sveOcene.length -1; i++)
	{
		ocena += sveOcene[i];
		

	}
console.log(ocena/sveOcene.length);
}

prosecnaOcena(testObjekat.ocenePolaznika);




