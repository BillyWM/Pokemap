var fs = require('fs');

var lines = fs.readFileSync('pokemon.log').toString().split("\n");


var poke, lat, lng, line;
var parts = [];

var pokemon = [];

for (var i=0; i < lines.length; i++) {
	line = lines[i];

	parts = line.match(/(\w+) is visible at \(([\d\.\-]+), ([\d\.\-]+)/);
	
	if (parts === null) continue;
	
	//1,2,3 should be name, lat, lng
	
	pokemon.push({
		name: parts[1].toLowerCase(),
		lat: parseFloat(parts[2]),
		lng: parseFloat(parts[3])
	});
}

fs.writeFileSync('pokemonList.js', "pokemonList=" + JSON.stringify(pokemon));