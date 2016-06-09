var Point = require('./Point');

function Tile() {
    this.position = new Point(0,0);
    this.neighbourCoords = {};

    this.setPosition = function(point) {
        this.position = point;
    }

    this.printPosition = function() {
        console.log("Tile @ x:" + this.position.getX() + " y:" + this.position.getY());
    }

    this.generateNeighbourCoords = function() {
        this.neighbourCoords = {
            tl: new Point(this.position.getX()-2, this.position.getY()-1),
            tr: new Point(this.position.getX()-2, this.position.getY()+1),
            sl: new Point(this.position.getX(), this.position.getY()-2),
            sr: new Point(this.position.getX(), this.position.getY()+2),
            bl: new Point(this.position.getX()+2, this.position.getY()-1),
            br: new Point(this.position.getX()+2, this.position.getY()+1),
        };
    };

    this.getNeighbourCoords = function() {
        if (this.neighbourCoords.length != 6) {
            this.generateNeighbourCoords();
        }
        return this.neighbourCoords;
    };
}

module.exports = Tile;
