const create = require('./create.js')
const sqlite3 = require('sqlite3').verbose()
const alterTable = require('./alter.js')
const insertValue = require('./insert copy.js')
const db = new sqlite3.Database('item.db')
create(db, "item")
db.run(create("item"))
// console.dir(alterTable)
// console.log(alterTable)
// alterTable(db,"music", "Music_index", "primary key")

// insertValue("music","title, singer, genre","낙원, 정가이, game")

db.serialize(()=>{
  // db.run(alterTable("item", "name","text not null"))
  // db.run(alterTable("item", "price","text"))
  // db.run(alterTable("item", "isSell","integer"))
  // db.run(alterTable("item", "weight","integer"))
  // db.run(alterTable("item", "type","text"))
  let stmt = db.prepare(`INSERT INTO item (name, price, isSell, weight, type) VALUES (?,?,?,?,?);`)
  stmt.run("에어혼 (Airhorn)", 52, 0, 0, "toy")
  
})



