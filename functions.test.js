const { findMean, findMedian, findMode } = require("./functions");

describe("#findMean", () => {
  it("finds an average of a set of numbers", () => {
    expect(findMean([1, 2, 3, 4])).toEqual(2.5);
    expect(findMean([1, 2, 3, 4, 5])).toEqual(3);
    expect(findMean([1, -2, 3, 4])).toEqual(1.5);
    expect(findMean([1, 2, 3, -4, 5])).toEqual(1.4);
  });
});

describe("#findMedian", function () {
  it("finds a midpoint of a set of numbers", function () {
    expect(findMedian([1, 2, 3, 4])).toEqual(2.5);
    expect(findMedian([1, 2, 3, 4, 5])).toEqual(3);
    expect(findMedian([1, -2, 3, 4])).toEqual(0.5);
    expect(findMedian([1, 2, 3, -4, 5])).toEqual(3);
  });
});

describe("#findMode", function () {
  it("finds a most frequent number of a set of numbers", function () {
    expect(findMode([1, 2, 3, 4, 4])).toEqual(4);
    expect(findMode([1, 2, 3, 3, -3, 4, 4, 4])).toEqual(4);
    expect(findMode([1, -2, 3, 4, -2])).toEqual(-2);
  });
});
