const create = require('./create.js')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('test.db')
create(db, "music")
