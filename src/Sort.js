class Sort {
  constructor(array) {
    this.array = array;
  }

  sort() {
    function divide(unsortedArray) {
      const half = Math.floor(unsortedArray.length / 2);
      if (unsortedArray.length === 1) {
        return unsortedArray;
      }
      let unsorted2ndHalf = unsortedArray;
      let unsorted1stHalf = unsortedArray.splice(0, half);

      return merge(divide(unsorted1stHalf), divide(unsorted2ndHalf));
    }
    return divide(this.array);

    function merge(left, right) {
      let sorted = [];
      while (left && left.length > 0 && right && right.length > 0) {
        if (left[0] <= right[0]) sorted.push(left.shift());
        else sorted.push(right.shift());
      }
      let merged = sorted.concat(left, right);
      return merged;
    }
  }
}

module.exports = Sort;
