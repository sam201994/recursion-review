// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
 /* if(json === '{}')
  {
    return {};
  }
  if(json === 'true')
  {
    return true;
  }
  if(json === 'false')
  {
    return false;
  }
  if(json=== 'null')
  {
    return null;
  }
*/

  if(json.charAt(1) === '"' && json.charAt(json.length - 1) === '"') return json.slice(1, json.length);
  if(!isNaN(json)) return parseFloat(json); 
  if(json === 'true') return true;
  if(json === 'false') return false;
  if(json === 'null') return null;
  var result=[];

  if(json.charAt(1) === "[" && json.charAt(json.length - 1) === "]")
  {

    var p=2;
    for(var i=2;i<json.length-2;i++)
    {
      if(json[i]===",")
      {
          result.push(parseJSON(json.slice(p,i)));
          p=i;
      }

    }
   result.push(parseJSON(json.slice(p,i)));
    return result;
   
 }
  if(json.charAt(1) === "{" && json.charAt(json.length - 1) === "}")
  {

  } 

}
