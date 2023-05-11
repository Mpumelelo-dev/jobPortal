
const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('./db/user.db');
let sql = 'INSERT INTO jobs (Job position,Company,salary) VALUES ("Web dev","digi","100-200")';
db.run(sql,[],function(err){
if(err) {return console.log(err.message) }
    console.log(`Row ready ${this.lastID}`);
}) 
db.close();

