/* eslint-disable class-methods-use-this */
import bcrypt from 'bcrypt';
import config from '../config';
import db from '../database';

export type User = {
  id?: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

class UserModel {
  async create(user: User): Promise<User> {
    try {
      const { username, email, password, firstName, lastName } = user;

      const connection = await db.connect();
      const sql =
        'insert into users (first_name, last_name, username, email, password) values ($1, $2, $3, $4, $5) returning first_name, last_name, username, email';
      const hash = bcrypt.hashSync(
        `${password}${config.pepper}`,
        parseInt(config.salt as string, 10)
      );
      const result = await connection.query(sql, [firstName, lastName, username, email, hash]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Unable to create user (${user.username}): ${error.message}`);
    }
  }

  async authenticate(username: string, password: string): Promise<User | null> {
    try {
      const connection = await db.connect();
      const sql = 'select password from users where username=$1';
      const result = await connection.query(sql, [username]);

      if (result.rows.length) {
        const user = result.rows[0];
        const isPasswordValid = bcrypt.compareSync(`${password}${config.pepper}`, user.password);
        if (isPasswordValid) {
          return user;
        }
      }
      connection.release();
      return null;
    } catch (error) {
      throw new Error(`Unable to login: ${error.message}`);
    }
  }
}

export default UserModel;
