/* -- More Linked Lists --
Task: A Node class is provided for you. A Node object has an integer data field, data, and a Node instance pointer, next, pointing to another node (i.e.: the next node in a list).
A removeDuplicates function is declared, which takes a pointer to the head node of a linked list as a parameter. Complete removeDuplicates so that it deletes any duplicate nodes from the list and returns the head of the updated list. */

function Node(data) {
    this.data=data;
    this.next=null;
}

function Solution() {
    this.removeDuplicates=function(head) {
      if(head===null) return;
      let prev = head;
      while(prev) {
          let next = prev.next;
          (next && prev.data===next.data) ? (prev.next=next.next) : (prev=prev.next);
      }
      return head;
    }

	this.insert=function(head,data) {
        var p=new Node(data);
        if(head==null) {
            head=p;
        } else if(head.next==null) {
            head.next=p;
        } else {
            var start=head;
            while(start.next!=null)
                start=start.next;
            start.next=p;
        }
        return head;
    };

	this.display=function(head) {
        var start=head;
            while(start) {
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}

function main() {
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++) {
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    head=mylist.removeDuplicates(head);
    mylist.display(head);
}		
