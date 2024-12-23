//CRUD operations over linked List

//creating a node
class Node{
    constructor(num){
        this.val = num;
        this.next = null;
    }
}

//creating linked list
class LinkedList{
    constructor(){
        //initially head is null that means there is no node in linked list
        this.head = null;
    }
    //C - linked list creation
    add(val){  //TC- O(n)
        //create new node
        const temp = new Node(val);
        //when head is null make the node itself head
        if(this.head === null){
            this.head = temp;
        }
        //if head is not null that means some values are present, so traverse till the last ndoe and 
        //add the new node in the end
        else{
            let curr = this.head;  //created copy of head node
            //iterate till the last node
            while(curr.next !== null){
                curr = curr.next;
            }
            //add the node in curr.next (after current)
            curr.next = temp;
        }
    }
    //R - read a linked list
    print(){
        let curr = this.head;
        let result = [];
        while(curr !== null){
            //console.log(curr.val);
            result.push(curr.val);
            curr = curr.next;
        }
        return result;
    }
    //U - updating a node
    update(n,newVal){
        let curr = this.head;
        //traverse till the node that has value n
        while(curr!== null){
           if(curr.val === n){
            curr.val = newVal;
            return;
           }
           curr = curr.next;
        }
    }
    //reverse the linked list
    reverseLinkedList(){
        //take 3 pointers to keep track
        let trail = null, mid = null, curr= this.head;
        while(curr !== null){
            //increment all 3 pointers to one position ahead
            trail = mid;
            mid = curr;
            curr = curr.next;
            //lastly point the mid to the trail to reverse it
            mid.next = trail;
        }
        // return mid;
        this.head = mid;  //now our mid became head
    }
    //make middle node head of the linked list
    moveMiddleToHead(){
        //if list is empty or having only one element 
        if(this.head === null || this.head.next === null){
            return this.head;
        }
        //take slow, one before slow and fast pointer
        let slow = this.head, fast = this.head, prevSlow = slow;
        //untill we reached 2nd last element
        while(fast !== null && fast.next !== null){
            fast = fast.next.next; //move fast 2 position
            prevSlow = slow; 
            slow = slow.next; //move slow to 1 position
        }
        //at the end of the while loop slow will be at middle position
        prevSlow.next = slow.next;
        slow.next = this.head;
        //return slow
        this.head = slow;
    }
}

const ll = new LinkedList();
console.log(ll);
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
console.log("Linked list is :", ll.print());
ll.update(20,33);
console.log("Updated Linked list is :", ll.print());
ll.reverseLinkedList();
console.log("Reversed Linked list is :", ll.print());
ll.moveMiddleToHead();
console.log("Linked list after moving middle to head :", ll.print());