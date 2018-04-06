// let setData = (data) => {
//     return new Promise((resolve) => {
//         resolve(data);
//     })
// }

// let getLog = () => {
//     let data = [
//         {id:1,title:'111',content:'222'},
//         {id:2,title:'222',content:'2256622'},
//         {id:3,title:'3333',content:'2522'},
//     ];
//     return setData(data);
// }

// let addLog = () => {
//     let data = 'sucess';
//     return setData(data);
// }

// let deleteLog = () => {
//     let data ='success'
//     return setData(data);
// }
// module.exports = {
//     getLog,
//     addLog,
//     deleteLog
// }
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '207.246.99.156',
  user     : 'loe_wen',
  password : 'wzw00069507',
  database : 'blog'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();