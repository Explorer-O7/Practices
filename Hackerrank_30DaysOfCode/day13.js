/* -- Abstract Classes --
Task: Given a Book class and a Solution class, write a MyBook class that does the following:
 * Inherits from Book
 * Has a parameterized constructor taking these 3 parameters:
  1. string title
  2. string author
  3. int price
 * Implements the Book class' abstract display() method so it prints these 3 lines:
  1. Title:, a space, and then the current instance's title.
  2. Author:, a space, and then the current instance's author.
  3. Price:, a space, and then the current instance's price. */

class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
        } else {
            this.title = title;
            this.author = author;
        }
    }
    
    display() { console.log('Implement the \'display\' method!'); }
}

class MyBook {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    display() {
        console.log("Title: " + this.title);
        console.log("Author: " + this.author);
        console.log("Price: " + this.price);
    }   
}

function main() {
    let title = readLine();
    let author = readLine();
    let price = +readLine();

    let book = new MyBook(title, author, price);
    book.display();
}
