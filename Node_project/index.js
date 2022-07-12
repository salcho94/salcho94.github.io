const mysql = require("mysql");

let connection = mysql.createConnection({
    host     : '129.154.33.117', //실제로 연결할 데이터베이스의 위치
    user     : 'salcho',
    password : 'salcho1994',
    database : 'toyproject' //데이터베이스 이름
  });

  connection.connect();

  module.exports = connection;

connection.query('SELECT * from QUIZ', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();