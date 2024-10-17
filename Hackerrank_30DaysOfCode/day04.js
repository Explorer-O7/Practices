/* Task: Write a Person class with an instance variable, age, and a constructor that takes an integer, initialAge, as a parameter. The constructor must assign initialAge to age after confirming the argument passed as initialAge is not negative; if a negative argument is passed as initialAge, the constructor should set age to 0 and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:
 1. yearPasses() should increase the  instance variable by 1.
 2. amIOld() should perform the following conditional actions:
  * If , print You are young..
  * If  and , print You are a teenager..
  * Otherwise, print You are old.. */

class Person {
  age;
  constructor(initialAge){
    if(initialAge>=0) {
        this.age = initialAge;
    } else {
        this.age = 0;
        console.log("Age is not valid, setting age to 0.");
    }
  }
  
  amIOld() {
    if(this.age<13)
     console.log("You are young.");
    else if(this.age>=13 && this.age<18)
     console.log("You are a teenager.");
    else
     console.log("You are old.");
  }
  
  yearPasses() { this.age += 1; }
}

function main() {
var T=parseInt(readLine());
for(i=0;i<T;i++){
    var age=parseInt(readLine());
    var p=new Person(age);
    p.amIOld();
    for(j=0;j<3;j++){
        p.yearPasses();
    }
    p.amIOld();
    console.log("");   
    }
}
