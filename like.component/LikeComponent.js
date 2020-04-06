"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
    }
    LikeComponent.prototype.constructer = function (totallike, isSeleted) {
        this.totallike = totallike;
        this.isSeleted = isSeleted;
    };
    LikeComponent.prototype.onClick = function () {
        this.totallike = (this.isSeleted) ? -1 : +1;
        this.isSeleted = !this.isSeleted;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
