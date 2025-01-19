/* -- Rotate a Linked List --
Given the head of a singly linked list, your task is to left rotate the linked list k times.
  Input: head = 10 -> 20 -> 30 -> 40 -> 50, k = 4
  Output: 50 -> 10 -> 20 -> 30 -> 40
  Explanation:
   Rotate 1: 20 -> 30 -> 40 -> 50 -> 10
   Rotate 2: 30 -> 40 -> 50 -> 10 -> 20
   Rotate 3: 40 -> 50 -> 10 -> 20 -> 30
   Rotate 4: 50 -> 10 -> 20 -> 30 -> 40
  Input: head = 10 -> 20 -> 30 -> 40, k = 6
  Output: 30 -> 40 -> 10 -> 20 */

Node* rotate(Node* head, int k) {
    if(!head || !head->next || !k) return head;
    int len = 1;
    Node *tail = head;
    while(tail -> next) {
        len++;
        tail = tail->next;
    }
    k %= len;
    if(!k) return head;
    Node *temp = head;
    for(int i=0; i<k-1; i++) {
        temp = temp->next;
    }
    Node *newHead = temp->next;
    temp->next = NULL;
    tail->next = head;
    
    return newHead;
}
