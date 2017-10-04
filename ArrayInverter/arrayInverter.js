var items = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 60, 40, 51],
  [9, 21, 32, 75],
  [10, 49, 12]
];

for (var i = 0; i < items.length; i++) {
	console.log(items[i]);
}
console.log('\n')

function transpose(array) {
    return Object.keys(array[0]).map(function(column) {
        return array.map(function(row) { return row[column]; });
    });
}

var remove = function (array) {
  var result = [];

  array.forEach(function (item) {
    if (Array.isArray(item) && item.length!=0) {
      // Item is a nested array, go one level deeper recursively
      result.push(remove(item));
    }
    else if (typeof item !== 'undefined') {
      result.push(item);
    }
  });

  return result;
};

items = transpose(items);

items = remove(items);


for (var i = 0; i < items.length; i++) {
	console.log(items[i]);
}