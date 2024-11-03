/* -- Queues and Stacks --
Task: First we have to take each character in s, enqueue it in a queue, and also push that same character onto a stack. Once that's done, we must dequeue the first character from the queue and pop the top character off the stack, then compare the two characters to see if they are the same; as long as the characters match, we continue dequeueing, popping, and comparing each character until our containers are empty (a non-match means s isn't a palindrome).
Write the following declarations and implementations:
 1. Two instance variables: one for your stack, and one for your queue.
 2. A void pushCharacter(char ch) method that pushes a character onto a stack.
 3. A void enqueueCharacter(char ch) method that enqueues a character in the queue instance variable.
 4. A char popCharacter() method that pops and returns the character at the top of the stack  instance variable.
 5. A char dequeueCharacter() method that dequeues and returns the first character in the queue instance variable. */

function Solution() {
  this.stack = new Array();
  this.queue = new Array();
  
  this.pushCharacter = (ch)=>{
      this.stack.push(ch);
  }
  this.popCharacter = ()=>{
      return this.stack.pop();
  }
  this.enqueueCharacter = (ch)=>{
      this.queue.push(ch);
  }
  this.dequeueCharacter = ()=>{
      return this.queue.shift();
  }
}

function main() {
    var s=readLine();
    var len=s.length;
    var obj=new Solution();
    for(var i=0;i<len;i++) {
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }
  
    var isPalindrome=true;
    for(var i=0;i<len/2;i++) {
        if(obj.popCharacter()!=obj.dequeueCharacter()) {
            isPalindrome=false;
          	break;
        }
    }
    if(isPalindrome)
        console.log("The word, "+s+", is a palindrome.");    
    else
        console.log("The word, "+s+", is not a palindrome.");
}
