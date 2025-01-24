/* -- Detect Loop in linked list --
You are given the head of a singly linked list. Your task is to determine if the linked list contains a loop. A loop exists in a linked list if the next pointer of the last node points to any other node in the list (including itself), rather than being null.
  Input: head: 1 -> 3 -> 4, pos = 2
  Output: true
  Explanation: There exists a loop as last node is connected back to the second node.
  Input: head: 1 -> 8 -> 3 -> 4, pos = 0
  Output: false
  Explanation: There exists no loop in given linked list.
  Input: head: 1 -> 2 -> 3 -> 4, pos = 1
  Output: true
  Explanation: There exists a loop as last node is connected back to the first node. */

bool detectLoop(Node* head) {
    if(!head or !head->next)
        return false;
    Node *slow=head, *fast=head->next;
    while(fast and fast->next) {
        if(slow == fast)
            return true;
        slow = slow->next;
        fast = fast->next->next;
    }
    return false;
}
