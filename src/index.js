
exports.min = function min (array) {

  if ((array == undefined) || (array.length === 0)) return [];

  let minValue = 0;
  for( i = 0; i < array.length; i++) if( array[i] < minValue) minValue = array[i];

  return minValue;
}

exports.max = function max (array) {

  if ((array == undefined) || (array.length === 0)) return [];

  let maxValue = 0;
  for( i = 0; i < array.length; i++) if( array[i] > maxValue) maxValue = array[i];

  return maxValue;
}

exports.avg = function avg (array) {

  if ((array == undefined) || (array.length === 0)) return [];

  let avgValue = array.reduce((a, b) => (a + b)) / array.length;

  return avgValue;
}
