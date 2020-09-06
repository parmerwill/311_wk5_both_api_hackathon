
const mysql = require('mysql')
const pool = require('../mysql/connection');


const getEmployees = (req, res) => {
  
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
    
  })
}

const getEmployeesById = (req, res) => {
  
  
  let sql = 'SELECT * FROM Empolyees WHERE id = ?';
  
  sql = mysql.format(sql, [req.params.id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}
const getEmployeesByFirstName = (req, res) => {
   
    
    let sql = 'SELECT * FROM Employees WHERE first_name  = ?';
    
    sql = mysql.format(sql, [req.params.first_name]);
  
    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

// const createUser = (req, res) => {
//   // INSERT INTO USERS FIRST AND LAST NAME 
//   let sql = 'INSERT INTO users (first_Name, last_Name) VALUES (?,?)'
//   sql = mysql.format(sql, ["bogus","user"])
  
//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ newId: results.insertId });
//   })
// }

// const updateUserById = (req, res) => {
//   // UPDATE USERS AND SET FIRST AND LAST NAME WHERE ID = <REQ PARAMS ID>
//   let sql = "UPDATE users SET first_name = ?, last_name = ? WHERE id = ?"
//   sql = mysql.format(sql, ['bogus','user',req.params.id])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.status(204).json();
//   })
// }

// const deleteUserByFirstName = (req, res) => {
//   // DELETE FROM USERS WHERE FIRST NAME = <REQ PARAMS FIRST_NAME>
//   let sql = "DELETE FROM users WHERE  first_name  = ?"
//   // WHAT GOES IN THE BRACKETS
//   sql = mysql.format(sql, [req.params.first_name])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
//   })
// }

module.exports = { getEmployees, 
                    getEmployeesById, 
                    getEmployeesByFirstName }