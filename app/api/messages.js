// pages/api/messages.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Ouvrir la base de données SQLite
const openDb = async () => {
  return open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Extraire les données du corps de la requête
    const { name, email, message } = req.body;

    // Vérifier que toutes les informations sont présentes
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    try {
      const db = await openDb();

      // Insérer le message dans la base de données
      await db.run('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)', [name, email, message]);

      // Répondre à la requête avec un message de succès
      return res.status(200).json({ message: 'Message envoyé avec succès' });
    } catch (error) {
      console.error('Erreur lors de l\'insertion dans la base de données', error);
      return res.status(500).json({ error: 'Erreur serveur, veuillez réessayer plus tard' });
    }
  } else {
    // Gérer les autres méthodes HTTP (par exemple, GET)
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
