/* -- Merge two sorted linked lists --
Given the head of two sorted linked lists consisting of nodes respectively. The task is to merge both lists and return the head of the sorted merged list.
  Input: head1 = 5 -> 10 -> 15 -> 40, head2 = 2 -> 3 -> 20
  Output: 2 -> 3 -> 5 -> 10 -> 15 -> 20 -> 40
  Input: head1 = 1 -> 1, head2 = 2 -> 4
  Output: 1 -> 1 -> 2 -> 4 */

Node* sortedMerge(Node* head1, Node* head2) {
    Node *ptr1=head1, *ptr2=head2, *temp=new Node(-1), *head=temp;
    while(ptr1 and ptr2) {
        if(ptr1->data <= ptr2->data) {
            temp->next = ptr1;
            ptr1 = ptr1->next;
        } else {
            temp->next = ptr2;
            ptr2 = ptr2->next;
        }
        temp = temp->next;
    }
    temp->next = (ptr1) ? ptr1 : ptr2;
    return head->next;
}
