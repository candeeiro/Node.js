var mysql = require('mysql');

var con = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: '$3nH@f@C1l',
    database: 'mydb'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Canal do Matuto', 'Recife-PE')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});