// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return `${obj}`;
  } else if (obj === null) {
    return 'null';
  } else if(typeof obj  === 'string') {
    return `"${obj}"`;
  } else if(Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));    
    }
    return '[' + result.join(',') + ']';
  } else if(typeof obj === 'object') {
    var result = [];
    for(var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      } else {
        result.push(stringifyJSON(key)+':'+stringifyJSON(obj[key]));
      }
      
    }

    return `{${result.join(',')}}`;
  } else if (typeof obj === 'function') {
    return {};
  }

};
  