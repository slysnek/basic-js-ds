class ListNode {
       constructor(x) {
         this.value = x;
         this.next = null;
       }
     }


function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
  
      return new ListNode(cur);
    }, null);
  }


const theList = convertArrayToList([3, 1, 2, 3, 4, 5]);

function removeKFromList(list, valueToDelete) {

    while (list && list.value === valueToDelete) {
      list = list.next
    }
  
    let currentNode = list;
  
    while (currentNode.next) {
  
      if (currentNode.next.value === valueToDelete) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
      
    }
    console.log(list);
    return list
  }
  
let result = removeKFromList(theList, 3);
console.log(result);