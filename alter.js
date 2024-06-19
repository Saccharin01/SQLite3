const alterTable = (tableName, colName,schema)=>{
  `ALTER TABLE ${tableName} ADD COLUMN ${colName} ${schema}`
}
module.exports = alterTable