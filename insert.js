const insertValue = (tableName, colName, values)=>{
 `INSERT INTO ${tableName} (${colName}) VALUES (${values});`

 console.log(values)
 console.log(typeof(values))
 console.dir(values)
  }




  insertValue("music", "title, singer, genre, year", "낙원, 정가이, game")



  
  
  
  
  // module.exports = insertValue

