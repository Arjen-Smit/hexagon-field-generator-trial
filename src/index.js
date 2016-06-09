var Grid = require('./model/Grid');

var myGrid = new Grid();

myGrid.generateTiles(2);

console.log(myGrid.getTiles().length);

myGrid.getTiles().forEach(function (tile) {
    tile.printPosition();
});