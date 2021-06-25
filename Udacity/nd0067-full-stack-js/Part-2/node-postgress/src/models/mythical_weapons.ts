import db from '../database';

interface Weapon {
  id: Number;
  name: string;
  type: string;
  weight: number;
}

class MythicalWeaponStore {
  static async index(): Promise<Weapon[]> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * FROM mythical_weapons';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Error acquiring client ${err.message}`);
    }
  }
}

export default MythicalWeaponStore;
