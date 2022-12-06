const mysql = require("mysql2/promise");
require("dotenv").config();

async function getConnection() {
  return await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
  });
}

const userService = {
  getAllUsers: async function () {
    const connection = await getConnection();

    const [rows] = await connection.execute("SELECT * FROM usuarios");
    return rows;
  },

  getUserById: async function (id) {
    const connection = await getConnection();

    const [rows] = await connection.execute(
      "SELECT * FROM usuarios WHERE id = ?",
      [id]
    );
    console.log(rows[0]);
    return rows[0];
  },

  toggleVipUserStatus: async function (id) {
    const connection = await getConnection();

    const [rows, fields] = await connection.execute(
      "UPDATE usuarios SET vip = NOT vip WHERE id = ?",
      [id]
    );

    if (rows.affectedRows !== 0) {
      return await this.getUserById(id);
    } else {
      return undefined;
    }
  },
};

module.exports = userService;
