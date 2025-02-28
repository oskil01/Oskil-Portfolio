import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Important pour Render
  },
});

// Connexion à PostgreSQL
pool.connect()
  .then(() => console.log("✅ Connexion à PostgreSQL réussie !"))
  .catch(err => console.error("❌ Erreur de connexion PostgreSQL :", err));

// Création de la table messages
const createMessagesTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,       -- Utilisation de SERIAL pour la clé primaire auto-incrémentée
        name TEXT NOT NULL,
        lastname TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        service TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Définit la date de création automatiquement
        response TEXT
      );
    `);
    console.log("✅ Table 'messages' créée avec succès !");
  } catch (err) {
    console.error("❌ Erreur lors de la création de la table 'messages' :", err);
  }
};

// Appeler la fonction pour créer la table lors du démarrage
createMessagesTable();

// Export de la connexion PostgreSQL
export default pool;

// CONFIG AVEC SQLITE

// import sqlite3 from "sqlite3";

// 📌 Initialisation de la base de données SQLite
// const db = new sqlite3.Database("./backend/database.js", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
//     if (err) {
//         console.error("Erreur lors de la connexion à SQLite :", err.message);
//     } else {
//         console.log("Connexion à SQLite réussie !");
//     }
// });

// 📌 Création de la table si elle n'existe pas encore
// db.run(`CREATE TABLE IF NOT EXISTS messages (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     lastname TEXT NOT NULL,
//     email TEXT NOT NULL,
//     phone TEXT NOT NULL,
//     service TEXT,
//     message TEXT NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     response TEXT
// )`);

// export default db;
