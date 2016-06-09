var Tile = require('./Tile');

function Grid() {
    this.tiles = [];

    this.getTiles = function() {
        return this.tiles;
    }

    this.generateTiles = function(amount) {
        this.tiles = [];

        var tile = new Tile();
        this.addTile(tile);

        var neighbours = tile.getNeighbourCoords();
        this.generateNeighbours(neighbours, amount);
    }

    this.generateNeighbours = function(neighbours, depth) {
        depth--;

        for (point in neighbours) {
            tile = new Tile();
            tile.setPosition(neighbours[point]);

            this.addTile(tile);

            if (depth >= 1) {
                var neighbours = tile.getNeighbourCoords();
                this.generateNeighbours(neighbours, depth);
            }
        };
    }

    this.addTile = function(tile) {
        if (this.pointInGrid(tile.position) === false) {
            this.tiles.push(tile);
        }
    }

    this.pointInGrid = function(point) {
        var inGrid = false;
        this.tiles.forEach(function(tile) {
            if (tile.position.equalTo(point)) {
                inGrid = true;
            }
        });
        return inGrid;
    }
}

module.exports = Grid;