"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor(initialItems = []) {
        this.items = initialItems;
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return [...this.items];
    }
}
exports.Repository = Repository;
