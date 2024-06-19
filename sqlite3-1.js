const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database("Music.db")
db.serialize(()=>{
  db.run(`CREATE TABLE IF NOT EXISTS music (
    Music_index integer primary key,
    title text not null unique,
    singer text,
    genre text,
    year text
\
  )`, (err)=>{
    if(err){
      console.error("Error Occur, process cancel : ", `${err}`)
    }
    // let stmt = db.prepare("INSERT INTO music (title, singer, genre, year) VALUES (?,?,?,?)");
    // stmt.run("끝났다는 것은 다시 시작된다는 것을" , "Warak", "Game",  "2023. 11. 29")
    // stmt.finalize()
    db.run(`SELECT * FROM music`, (err,row)=>{
      if(err){
        console.error("this Error Occur : ", err)
      } else {
        console.log(`title : ${row.title}, 가수 명 : ${row.singer}, 장르 : ${row.genre}, 연도 : ${row.year}`)
      }
    })
  })
})
// db.close();
