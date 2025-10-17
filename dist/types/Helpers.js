"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = updateBook;
exports.getReadonlyBooks = getReadonlyBooks;
function updateBook(book, updates) {
    return { ...book, ...updates };
}
function getReadonlyBooks(repo) {
    return repo.getAll();
}
