const alterTable = (db, tableName, colName,schema)=>{
  db.run(`ALTER TABLE ${tableName} ADD COLUMN ${colName} ${schema}`)
}
module.exports = alterTable