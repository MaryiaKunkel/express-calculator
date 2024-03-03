function findMean(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (val = sum / arr.length);
}

function findMedian(arr) {
  if (arr.length % 2 !== 0) {
    val = arr[Math.floor(arr.length / 2)];
  } else if (arr.length % 2 === 0) {
    val = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    console.log(val);
  }
  return val;
}

function findMode(arr) {
  const obj = {};
  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }

  let mode;
  let maxFrequency = 0;

  for (let key in obj) {
    if (obj[key] > maxFrequency) {
      mode = key;
      maxFrequency = obj[key];
    }
  }
  return parseInt(mode);
}

module.exports = {
  findMean,
  findMedian,
  findMode,
};
