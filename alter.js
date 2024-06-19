const alterTable = (db, tableName, colName, condition)=>{
  db.run(`ALTER TABLE ${tableName} ADD COLUMN ${colName} ${condition}`)
}
module.exports = alterTable