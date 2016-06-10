var Grid = require('./model/Grid');

var myGrid = new Grid();

myGrid.generateTiles(3);

console.log(myGrid.getTiles().length);

var tiles = myGrid.getTiles();
var t = 0;

tiles.forEach(function (tile) {
    t++;
    tile.printPosition();
    var elemDiv = document.createElement('div');
    var color = 'rgb(255,0,' + Math.round((255/tiles.length) * t) + ')';
    elemDiv.style.cssText = 'position:absolute;top:' + ((tile.position.getY() * 20) + 200) + 'px;left:' + ((tile.position.getX() * 20) + 400) + 'px;width:30px;height:30px;line-height:30px;text-align:center;color:white;background:'+color+';';
    elemDiv.innerHTML = t;

    document.body.appendChild(elemDiv);
});