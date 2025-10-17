"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryBook = void 0;
class LibraryBook {
    constructor(info) {
        this.info = info;
    }
    borrow(userName) {
        console.log(`Книга "${this.info.title}" выдана пользователю ${userName}`);
    }
}
exports.LibraryBook = LibraryBook;
