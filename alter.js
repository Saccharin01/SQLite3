const alterTable = (tableName, colName, condition)=>{
  return `ALTER TABLE ${tableName} ADD COLUMN ${colName} ${condition}`
}
module.exports = alterTable