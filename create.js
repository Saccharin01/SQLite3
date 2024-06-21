const create = (tableName)=>{
  return `CREATE TABLE IF NOT EXISTS ${tableName} (
    ${tableName}_index integer primary Key
   )`

}


module.exports = create