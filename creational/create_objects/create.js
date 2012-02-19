function Apple (type) {
    this.type = type;
    this.color = "red";
}

//Internal Methods
function Apple2 (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };
}

//Prototypal
function Apple3 (type) {
    this.type = type;
    this.color = "red";
}

Apple3.prototype.getInfo = function() {
    return this.color + ' ' + this.type + ' apple';
};

//Objects Literal

var apple4 = {
    type: "macintosh",
    color: "red",
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple';
    }
}



