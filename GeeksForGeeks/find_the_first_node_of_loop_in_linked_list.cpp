/* -- Find the first node of loop in linked list --
Given a head of the singly linked list. If a loop is present in the list then return the first node of the loop else return NULL.
  Input: 1 -> 3 -> 2 -> 4 -> 5
              ^--------------|
  Output: 3
  Explanation: We can see that there exists a loop in the given linked list and the first node of the loop is 3.
  Input: 1 -> 3 -> 2 -> 1
  Output: -1
  Explanation: No loop exists in the above linked list. So the output is -1. */

Node* findFirstNode(Node* head) {
    if(!head or !head->next)
        return nullptr;
    Node *slow=head, *fast=head;
    while(fast and fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if(slow == fast)
            break;
    }
    if(!fast or !fast->next)
        return nullptr;
    slow = head;
    while(slow != fast) {
        slow = slow->next;
        fast = fast->next;
    }
    return slow;
}
