/* eslint-disable no-unused-vars */
class Sort {
  constructor(array) {
    this.array = array;
  }
  display() {
    let newSort = new Sort([8, 4, 1, 3, 2, 6, 5, 9]);
    // console.log(newSort.array.length/2);
    let visual = [];
  }
  sort() {
    let newSort = new Sort([8, 4, 1, 3, 2, 6, 5, 9]);
    let unsortedArray = newSort.array;
    let visualiseResult = [];
    let result;

    function divide(unsortedArray) {
      const half = Math.floor(unsortedArray.length / 2);
      if (unsortedArray.length === 1) {
        return unsortedArray;
      }

      let unsorted2ndHalf = unsortedArray;
      let unsorted1stHalf = unsortedArray.splice(0, half);

      let vis1 = divide(unsorted1stHalf);
      let vis2 = divide(unsorted2ndHalf);

      console.log("vis1:", vis1, "vis2", vis2);

      result = newSort.merge(vis1, vis2);
      visualiseResult.push(result);
      return result;
    }
    console.log(divide(unsortedArray));

    console.log(visualiseResult[1]);
  }

  /*
https://www.hackerearth.com/ja/practice/algorithms/sorting/merge-sort/visualize/
https://github.com/jcjohnson/sorting.js/blob/master/js/sorting.js
https://brilliant.org/wiki/merge/
https://www.chartjs.org/samples/latest/charts/bar/vertical.html
https://brilliant.org/wiki/recursion-problem-solving/
https://brilliant.org/wiki/sorting-algorithms/
https://www.toptal.com/developers/sorting-algorithms



  */

  merge(unsorted1stHalf, unsorted2ndHalf) {
    let resultArray = [];

    function helper(firstIndex, secondIndex) {
      if (
        firstIndex < unsorted1stHalf.length &&
        secondIndex < unsorted2ndHalf.length
      ) {
        if (unsorted1stHalf[firstIndex] < unsorted2ndHalf[secondIndex]) {
          resultArray.push(unsorted1stHalf[firstIndex]);
          // console.log("first one", unsorted1stHalf[firstIndex]);
          return helper(firstIndex + 1, secondIndex);
        } else {
          resultArray.push(unsorted2ndHalf[secondIndex]);
          // console.log("second one", unsorted2ndHalf[secondIndex]);
          return helper(firstIndex, secondIndex + 1);
        }
      }
      return resultArray
        .concat(unsorted1stHalf.slice(firstIndex))
        .concat(unsorted2ndHalf.slice(secondIndex));
    }
    return helper(0, 0);
  }
}

module.exports = Sort;
