const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123456',
  port: 5000
});












const createTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS message (
      id SERIAL PRIMARY KEY,
      nom VARCHAR(150) NOT NULL,
      age VARCHAR(150) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      phone VARCHAR(20) NOT NULL,
      password VARCHAR(150) NOT NULL
    
    )`;

  try {
    await pool.query(createTableQuery);
    console.log('Table "message" créée avec succès');
  } catch (err) {
    console.error('Erreur lors de la création de la table:', err.message);
  }
};

const checkDatabaseConnection = async () => {
  try {
    await pool.query('SELECT 1');
    console.log('Database connection successful');
  } catch (err) {
    console.error('Database connection error:', err.message);
  }
};

module.exports = {
  pool,
  createTable,
  checkDatabaseConnection,
};
