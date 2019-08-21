define("index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = (function (time, callback, payload) {
        if (payload === void 0) { payload = []; }
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(callback && callback.apply(void 0, payload));
            }, time);
        });
    });
});
//# sourceMappingURL=index.js.map