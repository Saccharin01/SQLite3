const insertValue = (tableName, colName, values)=>{
 `INSERT INTO ${tableName} (${colName}) VALUES (${values});`

//  console.log(values)
//  console.log(typeof(values))
//  console.dir(values)

//  console.log(Array.isArray(values))
// let testing =  values.split(",")
// console.log(testing)
// let something = testing.map((ele)=>{
//   console.log(typeof(ele))
//   console.log(ele)
//   return ele.join(',')
// })
let something = testing.map((ele)=>{return `'${ele.trim()}'`}).join(',')

console.log(something)
console.log(typeof(something))

/**
 * join은 배열 메서드라 안 먹는 건 이해하겠음.
 * join과 비슷한 행동기저인 문자열 메서드 trim을 사용하는 것?
 * 기실, 입력된 값의 공백을 잘라내기 위해서 trim을 사용한 것이라고 생각되긴 하는데
 * !!! 얕은 복사 깊은 복사???
 */

  }




  insertValue("music", "title, singer, genre, year", "낙원,정가이,game")



  
  
  
  
  // module.exports = insertValue

