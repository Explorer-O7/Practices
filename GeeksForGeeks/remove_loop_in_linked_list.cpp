/* -- Remove loop in Linked List --
Given the head of a linked list that may contain a loop.  A loop means that the last node of the linked list is connected back to a node in the same list. The task is to remove the loop from the linked list (if it exists).
  Input: head = 1 -> 3 -> 4, pos = 2
  Output: true
  Explanation: The linked list looks like
   1 -> 3 -> 4
        ^----|
   A loop is present in the list, and it is removed.
  Input: head = 1 -> 8 -> 3 -> 4, pos = 0
  Output: true
  Explanation: The linked list looks like
   1 -> 8 -> 3 -> 4
   The Linked list does not contains any loop. */

void removeLoop(Node* head) {
    if(!head or !head->next)
        return;
    Node *slow=head, *fast=head, *med=NULL;
    while(fast and fast->next) {
        slow = slow->next;
        med = fast->next;
        fast = fast->next->next;
        if(slow == fast)
            break;
    }
    if(!fast or !fast->next)
        return;
    slow = head;
    while(slow != fast) {
        slow = slow->next;
        fast = fast->next;
    }
    while(fast->next != slow) {
        fast = fast->next;
    }
    fast->next = NULL;
}
