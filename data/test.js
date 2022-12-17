const fs = require('fs');

const jsonString = fs.readFileSync('db.json', 'utf8');
const json = JSON.parse(jsonString);

let id = 1;
const recipesWithIds = json.recipes.map(recipe => {
    return { ...recipe, id: id++ };
});

const updatedJson = { ...json, recipes: recipesWithIds };

fs.writeFileSync('new_file.json', JSON.stringify(updatedJson, null, 2));

// The code above reads the JSON file, parses it, adds an id property to each recipe, and writes the updated JSON to a new file.
