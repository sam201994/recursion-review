var getElementsByClassName = function(className) {
  var arr= [];
  var node = document.body;
    var walkDom = function (node,func) {
        func(node);                     
        node = node.firstChild;
        while(node) {
            walkDom(node,func);
            node = node.nextSibling;
        }

    };
  var addToClass = function(node){
    if(node.classList != null){
      if(node.classList.contains(className)) arr.push(node);
    }
  }
  walkDom(node, addToClass);
  return arr;
}
