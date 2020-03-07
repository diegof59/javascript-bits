var s = [23, 65, 98, 5];

// Implementation of filter()
Array.prototype.myFilter = function(callback){
  var newArray = [];

  for(let item of this){
    if(callback(item)){
      newArray.push(item)
    }
  }

  return newArray;

};

// Retorna un array con los elementos de s que son impares
var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_s)