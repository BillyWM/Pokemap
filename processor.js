var fs = require('fs');

var lines = fs.readFileSync('pokemon.log').toString().split("\n");


var poke, lat, lng, line;
var parts = [];
var name;

var pokemon = [];

for (var i=0; i < lines.length; i++) {
	line = lines[i];

	parts = line.match(/([\w ]+) is visible at \(([\d\.\-]+), ([\d\.\-]+)/);
	
	if (parts === null) continue;
	
	//1,2,3 should be name, lat, lng
	
	name = parts[1];
	name = name.toLowerCase();
	name = name.trim();
	
	pokemon.push({
		name: name,
		lat: parseFloat(parts[2]),
		lng: parseFloat(parts[3])
	});
}

fs.writeFileSync('pokemonList.js', "pokemonList=" + JSON.stringify(pokemon));