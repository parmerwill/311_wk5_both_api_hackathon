const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')
class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '35.192.117.101',
        user: 'root',
        password: 'Muhima0788$',
        database: 'admin'
      })


      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;