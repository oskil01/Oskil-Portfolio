import sqlite3 from "sqlite3";

// 📌 Initialisation de la base de données SQLite
const db = new sqlite3.Database("./backend/database.js", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error("Erreur lors de la connexion à SQLite :", err.message);
    } else {
        console.log("Connexion à SQLite réussie !");
    }
});

// 📌 Création de la table si elle n'existe pas encore
db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    response TEXT
)`);

export default db;
