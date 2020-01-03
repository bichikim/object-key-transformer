define("index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var isObject = function (value) {
        return value !== null && typeof value === 'object';
    };
    var arrayTransformer = function (value, func, deep) {
        if (deep === void 0) { deep = false; }
        return value.map(function (item) {
            if (isObject(item)) {
                return index(item, func, deep);
            }
            if (Array.isArray(item)) {
                return arrayTransformer(item, func, deep);
            }
            return item;
        });
    };
    var index = function (value, func, deep) {
        if (deep === void 0) { deep = false; }
        if (!isObject(value)) {
            return value;
        }
        return Object.keys(value).reduce(function (result, key) {
            var item = value[key];
            if (!deep) {
                result[func(key)] = item;
            }
            else if (Array.isArray(item)) {
                result[func(key)] = arrayTransformer(item, func, deep);
            }
            else if (isObject(item)) {
                result[func(key)] = index(item, func, deep);
            }
            else {
                result[func(key)] = item;
            }
            return result;
        }, {});
    };
    exports.default = index;
});
//# sourceMappingURL=index.js.map