const insertValue = (db, tableName, colName, values)=>{
  db.run(`INSERT INTO ${tableName} ( ${colName} ) VALUES (${values});`)


  console.log(values)
  }

  module.exports = insertValue