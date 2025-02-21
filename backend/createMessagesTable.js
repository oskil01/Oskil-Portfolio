// script pour créer la table messages

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Ouvrir la base de données SQLite
const openDb = async () => {
  return open({
    filename: './database.js', // Remplace par le chemin de ta base de données
    driver: sqlite3.Database,
  });
};

// Créer la table messages si elle n'existe pas
const createTable = async () => {
  try {
    const db = await openDb();
    await db.run(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Table "messages" créée ou déjà existante.');
  } catch (error) {
    console.error('Erreur lors de la création de la table', error);
  }
};

// Exécuter le script
createTable();
