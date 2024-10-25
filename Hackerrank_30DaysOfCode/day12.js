/* Task: You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you. Observe that Student inherits all the properties of Person.

Complete the Student class by writing the following:
 * A Student class constructor, which has 4 parameters:
  1. A string, firstName.
  2. A string, lastName.
  3. An integer, idNumber.
  4. An integer array (or vector) of test scores, scores.
 * A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:
+--------------------+
| Grade | Average(a) |
|--------------------|
|   O   | 90<=a<=100 |
|   E   |  80<=a<90  |
|   A   |  70<=a<80  |
|   P   |  55<=a<70  |
|   D   |  40<=a<55  |
|   T   |    a<40    |
+--------------------+ */

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log("Name: " + this.lastName + ", " + this.firstName + "\nID: " + this.idNumber);
    }
}

class Student extends Person {
    scores;
    constructor(firstName, lastName, idNumber, scores) {
        super(firstName, lastName, idNumber);
        this.scores = scores;
    }
    
    calculate() {
        let sum = 0;
        for(let score of this.scores) {
            sum += score;
        }
        let avg = (sum/this.scores.length);
        if(avg>=90 && avg<=100)
            return 'O';
        else if(avg>=80 && avg<90)
            return 'E';
        else if(avg>=70 && avg<80)
            return 'A';
        else if(avg>=55 && avg<70)
            return 'P';
        else if(avg>=40 && avg<55)
            return 'D';
        else
            return 'T';
    }
}

function main() {
    let firstName = read();
    let lastName = read();
    let id = +read();
    let numScores = +read();
    let testScores = new Array(numScores);
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read();
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson();
    s.calculate();
    console.log('Grade: ' + s.calculate());
}
