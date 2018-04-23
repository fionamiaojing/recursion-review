// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var result =[];
  var searchNodes = function(nodes) {
    if (nodes.classList && nodes.classList.contains(className)) {
      result.push(nodes);
    };
    if (nodes.childNodes) {
      var children = nodes.childNodes;
      children.forEach(function(item) {
        console.log(item)
        searchNodes(item);
      });
    }
  };
  searchNodes(document.body);

  return result;

};
