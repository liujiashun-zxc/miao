var liujiashun_zxc = {
  chunk: function(array, size) {
  
  },
  compact: function(array) {
    
  }
        function concat(arr,arg){
        let result = arr
        for(let item of arg){
          if(Array.isArray(item)){
            result.push(subitem)
          }
          else{
            retult.push(item)
          }
        }
        return retult
      }
      function difference(array,values){
        let iteratee = last(values)
        if(isArrayLikeObject(iteratee)){
          iteratee = undefined
        }
        return isArrayLikeObject(array)
        ? baseDifferemce(array,baseFlatten(values,1,isArrayLikeObject,true),iteratee)
        :[]
      }
     let_ = require("lodash"){
     let result = _.differenceBy([12, 3, 4], [3, 1], function (item) {
       return item - 3 > 0
     })
     console.log(result)
   }
function:differenceWith(comperator，values){
  for(let i = 0; i < values.length; i++){
     if(comparator(comuted,values[i])){
       return true
     }
     return false
   }
}
function drop(){
  
}








}
