export class LibraryBook {
    constructor(info) {
        this.info = info;
    }
    borrow(userName) {
        console.log(`Книга "${this.info.title}" выдана пользователю ${userName}`);
    }
}
