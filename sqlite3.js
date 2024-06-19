// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('index.db');
// // const db = new sqlite3.Database("");

// db.serialize(()=>{
//   // db.run("CREATE TABLE lorem (info TEXT)");
//   const stmt = db.prepare("INSERT INTO lorem VALUES (1123123123123123)");
//   // for(let i = 0; i < 10; i++){
//   //   stmt.run("Ipsum" + i);
//   // }
//   stmt.run()
//   stmt.finalize();
// });
// db.close();



















const sqlite3 =require("sqlite3").verbose();
// let db =new sqlite3.Database('index2.db');
let db =new sqlite3.Database('index2.db');
db.serialize(()=>{
  db.run(`CREATE TABLE IF NOT EXISTS student (
    student_id integer primary key,
    name TEXT NOT NULL UNIQUE,
    age integer,
    major text
    
  )`, (err)=>{
        if(err){
          console.log(`this error : ${err}`)
        } else {
          console.log("Job's done!")
        }
  })
  let statement = db.prepare("INSERT INTO student (name, age, major) VALUES (?, ?, ?)");
  statement.run("철수", 20, "컴공")
  statement.run("영희", 22, "경제")
  
  // db.serialize(()=>{
    db.each("SELECT student_id, name, age, major FROM student", (err,row)=>{
      if(err) {
        console.log(`This Error : ${err}`)
      } else {
        console.log(`ID : ${row.student_id}, 이름 : ${row.name}, 나이 ${row.age}, 전공 : ${row.major}`)
      }
    })
    db.run(`UPDATE student SET age = ? where name = ?`,[330,"철수"], (err)=>{
      if(err){
        console.log(`this error : ${err}`)
      } else {
        console.log("job's done!")
      }
    })
    statement.finalize()
  })

// db.run(
//   "CREATE TABLE student(id integer primary key)"
// );
// db.run(
//   "CREATE TABLE student(id integer primary key, name text not null, email text unique)"
// );

db.close()

