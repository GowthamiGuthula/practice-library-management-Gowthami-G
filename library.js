class LibraryItem {
    constructor(title, id) {    
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }
    checkOut() {
        if (this.isAvailable) {
            this.isAvailable = false;
        } 
    }
    returnItem() {
        this.isAvailable = true;
    }
}

class Book extends LibraryItem {
    constructor(title, id, author, genre) {
        super(title, id);
        this.author = author;
        this.genre = genre;
    }
}

class DVD extends LibraryItem {
    constructor(title, id, director, duration) {
        super(title, id);
        this.director = director;
        this.duration = duration;
    }
}

class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher) {
        super(title, id);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}

const book1 = new Book("Book1", 1, "Author1", "History");
const dvd1 = new DVD("DVD1", 2, "Director1", 100);
const magazine1 = new Magazine("Magazine1", 3, 202, "publisher1");

book1.checkOut(); 
book1.returnItem(); 
dvd1.checkOut(); 

console.log(`Book Author: ${book1.author}`);
console.log(`Book Genre: ${book1.genre}`);

console.log(`DVD Director: ${dvd1.director}`);
console.log(`DVD Duration: ${dvd1.duration}`);

console.log(`Magazine Issue Number: ${magazine1.issueNumber}`);
console.log(`Magazine Publisher: ${magazine1.publisher}`);
