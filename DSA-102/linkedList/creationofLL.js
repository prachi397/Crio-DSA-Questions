//creation of a linked list

//start with a empty list
let head = null;

function addNode(value){
    //created the node 
    const newNode = {value,next:null};
    if(!head){
        // If list is empty, then new node itself will be head
        head = newNode;
    }else{
        let current = head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
}
function printList(){
    let current = head;
    const values = [];
    while(current){
        values.push(current.value);
        current = current.next;
    }
    return values.join("->");
}
addNode(10);
addNode(20);
addNode(30);
console.log(printList());