// You are given the head of a linked list. Delete the middle node, and return the head of the modified 
// linked list.
// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, 
// where ⌊x⌋ denotes the largest integer less than or equal to x.
// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 
// Example 1:
// Input: head = [1,3,4,7,1,2,6]
// Output: [1,3,4,1,2,6]
// Explanation:
// The above figure represents the given linked list. The indices of the nodes are written below.
// Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
// We return the new list after removing this node. 
// Example 2:
// Input: head = [1,2,3,4]
// Output: [1,2,4]
// Explanation:
// The above figure represents the given linked list.
// For n = 4, node 2 with value 3 is the middle node, which is marked in red.
// Example 3:
// Input: head = [2,1]
// Output: [2]
// Explanation:
// The above figure represents the given linked list.
// For n = 2, node 1 with value 1 is the middle node, which is marked in red.
// Node 0 with value 2 is the only node remaining after removing node 1.

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}
const head = new ListNode(1);
head.next = new ListNode(3);
head.next.next = new ListNode(4);
head.next.next.next = new ListNode(7);
head.next.next.next.next = new ListNode(1);
head.next.next.next.next.next = new ListNode(2);
head.next.next.next.next.next.next = new ListNode(6);

function deleteMiddle(head){
    if(!head || !head.next){
        return null;
    }
    let slow = head, fast = head, prev = null;
    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = slow.next;
    return head;
}
const mdofiedList = deleteMiddle(head);
function printLinkedList(head){
    let result = [];
    while(head){
        result.push(head.value);
        head = head.next;
    }
    return result;
}
console.log(printLinkedList(head));

// Odd Even Linked List
// Given the head of a singly linked list, group all the nodes with odd indices together followed by 
// the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

function oddEvenList(head){
    if(!head || !head.next){
        return head;
    }
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while(even && even.next){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
}

oddEvenList(head);
console.log(printLinkedList(head));