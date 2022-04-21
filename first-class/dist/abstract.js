"use strict";
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
var MyAbClass = /** @class */ (function () {
    function MyAbClass(id) {
        this.id = id;
    }
    return MyAbClass;
}());
var InheritClass = /** @class */ (function (_super) {
    __extends(InheritClass, _super);
    function InheritClass(id) {
        return _super.call(this, id) || this;
    }
    InheritClass.prototype.describe = function () {
        console.log(this.id);
    };
    return InheritClass;
}(MyAbClass));
var inherit = new InheritClass('hello');
inherit.describe();
//# sourceMappingURL=abstract.js.map