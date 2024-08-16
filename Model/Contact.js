const {pool} = require('../Database/Config');

class Contact {
  static async getAll() {
    const result = await pool.query('SELECT * FROM message');
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query('SELECT * FROM message WHERE id = $1', [id]);
    return result.rows[0];
  }

  static  create({ name, age, email, phone, password }) {
    console.log('Received data model:', { name, age, email, phone, password });

    const result =  pool.query('INSERT INTO message (nom, age, email, phone, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',[name, age, email, phone, password]);
    return result.rows[0];
  }

  static async update(id, { editname, editage, editemail, editphone, editpassword }) {
    const result = await pool.query(
      'UPDATE message SET nom = $1, age = $2, email = $3, phone = $4, password= $5, WHERE id = $6 RETURNING *',
      [editname, editage, editemail, editphone, editpassword, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM message WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = Contact;
