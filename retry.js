const insertValue = (tableName, colName, values)=>{
  console.log(values)
  let reFindValues = values.split(",").map((ele)=>{return `'${ele.trim()}'`}).join(',')

  // let test = `INSERT INTO ${tableName} (${colName}) VALUES (${values});`
  
  db.run(`INSERT INTO ${tableName} (${colName}) VALUES (${reFindValues});`)
}
 
 
 
 
   insertValue("music", "title, singer, genre, year", "낙원,정가이,game")
 
 
 
   
   
   
   
   module.exports = insertValue
 
 