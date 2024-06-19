const sqlite3 = require('sqlite3').verbose()
// const db = new sqlite3.Database()



const create = (db,tableName)=>{
  db.run(`CREATE TABLE IF NOT EXISTS ${tableName} (
    ${tableName}_id integer primary Key
   )`)

}


module.exports = create