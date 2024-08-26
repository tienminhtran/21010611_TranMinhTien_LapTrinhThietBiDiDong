//Kiểm tra xem tất cả các phần tử trong mảng có lớn hơn 10 hay không.

const isBigEnough = (element) => {
  return element >= 10;
};
console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// Kiểm tra kích thước của tất cả các phần tử mảng
const isBigEnough_1 = (element) => {
  return element.length >= 10;
};
console.log(["abc", "def", "ghi"].every(isBigEnough_1)); // false
console.log(["abc", "defghijklm", "ghi"].every(isBigEnough_1)); // true

//Kiểm tra xem một mảng có phải là tập hợp con của mảng khác không
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 3, 7])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [1, 3, 7])); // true