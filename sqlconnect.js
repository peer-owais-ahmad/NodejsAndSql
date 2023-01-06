const mysql = require('mysql');
const { mysqlConnection } = require('./sqlconn');

exports.myconnect= function(){
    mysqlConnection.connect((err)=> {
if(!err)
console.log('Connection Established Successfully');
else
console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});
}

