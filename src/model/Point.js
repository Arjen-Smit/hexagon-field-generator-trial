function Point(x, y) {
    this.x = x;
    this.y = y;

    this.setX = function(x) {
        this.x = x;
    };

    this.getX = function() {
        return this.x;
    };

    this.setY = function(y) {
        this.y = y;
    };

    this.getY = function() {
        return this.y;
    };

    this.setCoords = function(x,y) {
        this.setX(x);
        this.setY(y);
    }

    this.equalTo = function(point) {
        return (this.x === point.getX() && this.y === point.getY());
    }
};

module.exports = Point;
