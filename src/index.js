class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.compareFunction = function(a,b){
      return a - b;
    };
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
   return this.arr[index]; // your implementation
  }

  get length() {
    return this.arr.length;// your implementation
  }

  toArray() {
    return this.arr;// your implementation
  }

  sort(indices) {
    var tmpArray = [];
    indices.sort(function(a,b){
      return a-b;
    });
   for(var i = 0; i< indices.length; i++)
   {
     tmpArray[i] = this.arr[indices[i]];
   }
   tmpArray.sort(this.compareFunction);
   for(var i = 0; i< tmpArray.length; i++)
   {
     this.arr[indices[i]] = tmpArray[i];
   }

  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
