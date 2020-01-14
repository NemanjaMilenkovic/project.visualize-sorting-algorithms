/* eslint-disable no-unused-expressions */
const Sort = require("../src/Sort");
const { expect } = require("chai");

let sortArray;
let arrayToSort = [2, 3, 1, 5, 8, 6, 4, 7];
describe("Sort", () => {
  beforeEach(() => {
    sortArray = new Sort(arrayToSort);
  });

  describe("The Sort constructor", () => {
    it("should have property array", () => {
      expect(sortArray.hasOwnProperty("array")).to.equal(true);
    });
    it("should be a function", () => {
      expect(typeof Sort).to.equal("function");
    });
  });

  describe("The sort method", () => {
    it("should exist on the Sort prototype", () => {
      expect(Sort.prototype.sort).to.exist;
      expect(typeof Sort.prototype.sort).to.equal("function");
    });
    it("should have property array", () => {
      expect(sortArray.hasOwnProperty("array")).to.equal(true);
    });
    it("should sort given numbers by value", () => {
      let sorted = [1, 2, 3, 4, 5, 6, 7, 8];
      let correctResult = JSON.stringify(sorted);
      let result = JSON.stringify(sortArray.sort());
      expect(result).to.equal(correctResult);
    });
  });
});
