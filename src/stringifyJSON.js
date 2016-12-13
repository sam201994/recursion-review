// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  // your code goes here
  if(typeof obj === "string"){
    return '"' + obj + '"';
  }
  if(typeof obj === "number" || typeof obj === "boolean"){
   // console.log("number");
    return obj + "";
  }
  if(typeof obj === "function" || obj === undefined || obj == null){
    return "null";
  }

 var arr = [];  
  if(Array.isArray(obj)){

    obj.forEach(function(curr){
      arr.push(stringifyJSON(curr));
    });
    return "[" + arr + "]";
  }

  var object = "";
  if(typeof obj==="object")
  {
  var count = 0;
 

  for(var prop in obj){
    if(typeof obj[prop] !== "function" && obj[prop] !== undefined) {
      
      if(!count) 
        object += '"'+prop+ '":' + stringifyJSON(obj[prop]);
      else
       object += ',"'+prop+ '":' + stringifyJSON(obj[prop]);
      
      count++;
    }  
  }
  return "{" + object + "}";
}


};
console.log(JSON.stringify([1,undefined,2]));

