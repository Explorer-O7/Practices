/* Task: Complete the insert function so that it creates a new Node (pass data as the Node constructor argument) and inserts it at the tail of the linked list referenced by the head parameter. Once the new node is added, return the reference to the head node.
Note: The head argument is null for an empty list. */

function Node(data){
    this.data=data;
    this.next=null;
}

function Solution(){
	this.insert=function(head,data){
          if(head == null) {
              head = new Node(data);
          } else {
            let curr = head;
            while(curr.next)
                curr = curr.next;
            curr.next = new Node(data);
          }
          return head;
    };

	this.display=function(head){
          var start=head;
          while(start){
            process.stdout.write(start.data+" ");
            start=start.next;
          }
    };
}

function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}
