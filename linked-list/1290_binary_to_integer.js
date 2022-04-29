class ListNode {
  val;
  next;

  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

const node02 = new ListNode(1, undefined);
const node01 = new ListNode(0, node02);
const head = new ListNode(1, node01);

console.log(getDecimalValue(head));

function getDecimalValue(head) {
  let binStr = "";
  while (head !== null) {
    binStr += head.val;
    head = head.next;
  }
  const decVal = parseInt(binStr, 2);
  return decVal;
}

