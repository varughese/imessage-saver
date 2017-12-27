let sqlite3 = require('sqlite3').verbose();
let messagesPath = `${process.env.HOME}/Library/Messages`;

let db = new sqlite3.Database(`${messagesPath}/chat.db`);

let sql = `SELECT ROWID, text, datetime(message.date/1000000000 + strftime("%s", "2001-01-01") ,"unixepoch","localtime")  as date FROM message WHERE handle_id=1 LIMIT 10`;

db.all(sql, [], (err, row) => {
  if (err) {
    return console.error(err.message);
  }
  row.date = new Date(row.date) + "";
  console.log(row);

});

// close the database connection
db.close();
