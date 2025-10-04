"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryBook = void 0;
var LibraryBook = /** @class */ (function () {
    function LibraryBook(info) {
        this.info = info;
    }
    LibraryBook.prototype.borrow = function (userName) {
        console.log("\u041A\u043D\u0438\u0433\u0430 \"".concat(this.info.title, "\" \u0432\u044B\u0434\u0430\u043D\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E ").concat(userName));
    };
    return LibraryBook;
}());
exports.LibraryBook = LibraryBook;
