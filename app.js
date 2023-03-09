var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figure = /** @class */ (function () {
    function Figure(name, color, angles) {
        this.name = name;
        this.color = color;
        this.angles = angles;
    }
    Figure.prototype.setName = function (name) {
        this.name = name;
    };
    Figure.prototype.getName = function () {
        return this.name;
    };
    Figure.prototype.getColor = function () {
        return this.color;
    };
    Figure.prototype.getAngles = function () {
        return this.angles;
    };
    Figure.prototype.toString = function () {
        return "Name: ".concat(this.name, "\nColor: ").concat(this.color, "\nAngles: ").concat(this.angles);
    };
    return Figure;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(sideLength, name, color, angles) {
        var _this = _super.call(this, name, color, angles) || this;
        _this.sideLength = sideLength;
        return _this;
    }
    Square.prototype.getSideLength = function () {
        return this.sideLength;
    };
    Square.prototype.setSideLength = function (sideLength) {
        this.sideLength = sideLength;
    };
    Square.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), "\nsideLength: ").concat(this.getSideLength());
    };
    return Square;
}(Figure));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(Radius, name, color, angles) {
        var _this = _super.call(this, name, color, angles) || this;
        _this.Radius = Radius;
        return _this;
    }
    Circle.prototype.getRadius = function () {
        return this.Radius;
    };
    Circle.prototype.setRadius = function (Radius) {
        this.Radius = Radius;
    };
    Circle.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), "\nRadius: ").concat(this.getRadius());
    };
    return Circle;
}(Figure));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(type, name, color, angles) {
        var _this = _super.call(this, name, color, angles) || this;
        _this.type = type;
        return _this;
    }
    Triangle.prototype.getType = function () {
        return this.type;
    };
    Triangle.prototype.setType = function (type) {
        this.type = type;
    };
    Triangle.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), "\nType: ").concat(this.getType());
    };
    return Triangle;
}(Figure));
var square = new Square(14, "Square", "Black", 4);
console.log(square.toString());
console.log();
var circle = new Circle(5, "Circle", "Red", 0);
console.log(circle.toString());
console.log();
var triangle = new Triangle("Isosceles", "Triangle", "Blue", 3);
console.log(triangle.toString());
