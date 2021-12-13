const connection = require("../config/connection");
class DB {
    constructor(connection) {
        this.connection = connection
    }
    getdepartment() {
        return this.connection.promise().query('SELECT * FROM department')
    }
}

module.exports = new DB(connection);