const input = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }

  function myEach(collection, callback){
      const newCollection = input(collection)
      for (let i = 0; i < newCollection.length; i++){
          callback(newCollection[i])
      }
      return collection

  }

  const myMap = function(collection, callback) {
    const newCollection = input(collection);

    const newArr = [];

    for (let i = 0; i < newCollection.length; i++) {
      newArr.push(callback(newCollection[i]));
    }

    return newArr;
  }

  const myReduce = function(collection, callback, acc) {
    let newCollection = Object.values(collection);

    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }

    const len = newCollection.length;

    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }
  const myFind = function(collection, predicate) {
    const newCollection = input(collection);

    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) return newCollection[i];
    }

    return undefined;
  }

  const myFilter = function(collection, predicate) {
    const newCollection = input(collection);

    const newArr = [];

    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) newArr.push(newCollection[i]);
    }

    return newArr;
  }

  const mySize = function(collection) {
    const newCollection = input(collection);
    return newCollection.length;
  }

  const myFirst = function(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
  }

  const myLast = function(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  }

  const mySortBy = function(arr, callback) {
    const newArr = [...arr];
    return newArr.sort(function(a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  const unpack = function(receiver, arr) {
    for (let val of arr) {
      receiver.push(val);
    }
  }

  const myFlatten = function(collection, shallow, newArr=[]) {
    if (shallow) {
      for (let val of collection) {
        Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
      }
    } else {
      for (let val of collection) {
        if (Array.isArray(val)) {
          myFlatten(val, false, newArr);
        } else {
          newArr.push(val);
        }
      }
    }
    return newArr;
  }


  const myKeys = function(obj) {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }

  const myValues = function(obj) {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;

  }