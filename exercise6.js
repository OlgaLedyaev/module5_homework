let array = [5, 5, 5, "5", 5, 5, 5];
let check = true;
for (i = 0; i < array.length - 1; i++) {
  if (array[i] !== array[i + 1]) {
    check = false;
    break;
  }
}
console.log(check);
