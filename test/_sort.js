/* eslint-disable no-unused-expressions */
const Sort = require("../src/Sort");
const { expect } = require("chai");

let sortArray;
const arrayToSort = [2, 3, 5, 7, 8, 3, 11, 3];
describe("Sort", () => {
  beforeEach(() => {
    sortArray = new Sort(arrayToSort);
  });

  describe("The MergeSort constructor", () => {
    it("should be an ES6 class", () => {
      sortArray = new Sort(arrayToSort);
      expect(Sort).to.be.true;
    });
  });

  describe("The sort method", () => {
    it("should exist on the Tree prototype", () => {
      expect(Sort.prototype.insert).to.exist;
      expect(typeof Sort.prototype.insert).to.equal("function");
    });
    it("should have a sort method", () => {
      expect(typeof Sort.prototype.sort).to.equal("function");
    });
    it("should sort given numbers by value", () => {
      expect(Sort.prototype.sort()).to.equal([2, 3, 3, 3, 5, 7, 8, 11]);
    });
  });
});
