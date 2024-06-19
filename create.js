const sqlite3 = require('sqlite3').verbose()



const create = (fileName, tableName)=>{
  const db = new sqlite3.Database(fileName)
  db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
    ${tableName}_id integer primary Key,
  )`)

}


module.exports = create