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
}

const ll = new LinkedList();
console.log(ll);
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
console.log(ll.print());
ll.update(20,33);
console.log(ll.print());