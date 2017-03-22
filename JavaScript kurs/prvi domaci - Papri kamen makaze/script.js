var user = prompt("Izaberite: papir, kamen ili makaze???")
var userCase = user.toLowerCase().trim();
var computer = Math.random();


if(computer < 0.33)
{
	computer = "papir";
}
else if(computer <= 0.66)
{
	computer = "kamen";
}
else
{
	computer = "makaze";
}

var compare = function(userCase, computer){
	if( userCase == computer)
		{
			document.write("<h1>Nereseno! Pokusaj opet!</h1>");
	}
	else if((userCase == "papir" && computer == "makaze") || (userCase == "makaze" && computer == "kamen") || (userCase == "kamen" && computer == "papir"))
	{
			document.write("<h1>Izgubio si! Vise srece drugi put...</h1>");

	} 
	else
	{
			document.write("<h1>Cestitamo! Pobedio si!</h1>");
	}

}

if ((userCase != "papir" && userCase !="kamen" && userCase !="makaze") || userCase == "")
	{
		alert("Unesi ispravan naziv!");
	}else{
		document.write("<h4>Izbor kompjutera je: </h4>" + "<h2>" + computer + "</h2>" + "<br>");
		document.write("<h4>Tvoj izbor je: </h4>" + "<h2>" + userCase + "</h2>");
		compare(userCase, computer);
	}

