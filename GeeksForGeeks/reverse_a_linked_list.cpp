/* -- Reverse a linked list --
Given the head of a linked list, the task is to reverse this list and return the reversed head.
  Input: head: 1 -> 2 -> 3 -> 4 -> NULL
  Output: head: 4 -> 3 -> 2 -> 1 -> NULL
  Input: head: 2 -> 7 -> 10 -> 9 -> 8 -> NULL
  Output: head: 8 -> 9 -> 10 -> 7 -> 2 -> NULL
  Input: head: 2 -> NULL
  Output: 2 -> NULL */

Node* reverseList(struct Node* head) {
    if(head->next == NULL) return head;
    Node *prev=NULL, *next=NULL, *curr=head;
    while(curr) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
