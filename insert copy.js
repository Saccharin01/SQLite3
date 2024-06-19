const insertValue = (db, tableName, colName, values)=>{
  
  let splitValue = values.split(",")

  let process = splitValue.map((ele)=>{
    return `'${ele.trim()}'`
  })
  let result = process.join(",")

 return `INSERT INTO ${tableName} (${colName}) VALUES (${result});`
}
  module.exports = insertValue

