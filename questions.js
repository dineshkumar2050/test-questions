// question 1
function deepClone(obj){
  return JSON.parse(JSON.stringify(obj))
};

// question 2 - use the function areAnagrams & run it to check the function
function areObjectsEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  let objectLength = Object.keys(obj1).length;
  let i = 1;
  for (let key in obj1) {
    if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false;
    } else if (objectLength === i) {
      return true;
    }
    i++;
  }
}

function areAnagrams(str1,str2){
  let obj1 = {};
  let obj2 = {};
  for(const key in str1){
    obj1[str1[key]] = (obj1[str1[key]] || 0) + 1;
  }
  for(const key in str2){
    obj2[str2[key]] = (obj2[str2[key]] || 0) + 1;
  }
  if(areObjectsEqual(obj1,obj2)){
    return true;
  }
  return false;
}
