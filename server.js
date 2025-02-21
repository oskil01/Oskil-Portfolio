import express from 'express';
import nodemailer from 'nodemailer';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 5000;

// 📌 Middlewares
app.use(cors()); // Autoriser les requêtes cross-origin
app.use(express.json()); // Parser les JSON des requêtes

// 📌 Configuration de Nodemailer pour l'envoi des e-mails
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // Exemple : smtp-mail.outlook.com
  port: parseInt(process.env.EMAIL_PORT) || 587, // 587 pour Outlook
  secure: false, // false pour STARTTLS
  auth: {
    user: process.env.EMAIL_USER, // Ton email Outlook
    pass: process.env.EMAIL_PASS, // Ton mot de passe (ou mot de passe d'application)
  },
  tls: {
    rejectUnauthorized: false, // Ajouté pour éviter des erreurs SSL
  }
});

// 📌 Route pour envoyer un e-mail
app.post("/send-email", async (req, res) => {
  const { recipientEmail, subject, message } = req.body;

  if (!recipientEmail || !subject || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, // Expéditeur
    to: recipientEmail, // Destinataire
    subject: subject, // Objet du mail
    text: message, // Contenu du mail
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "E-mail envoyé avec succès !" });
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi de l'email :", error);
    res.status(500).json({ success: false, message: "Erreur lors de l'envoi de l'email." });
  }
});

// 📌 Connexion à SQLite
sqlite3.verbose();
const db = new sqlite3.Database('./backend/database.sqlite', (err) => {
  if (err) {
    console.error("❌ Erreur de connexion SQLite :", err.message);
  } else {
    console.log("✅ Connexion à SQLite réussie !");
  }
});

// 📌 Création de la table si elle n'existe pas
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    lastname TEXT,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service TEXT, 
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);
});

// route pour tester si service existe deja dans la table
db.run(`ALTER TABLE messages ADD COLUMN service TEXT;`, (err) => {
  if (err) {
    console.log("❌ Erreur lors de l'ajout de la colonne 'service' :", err);
  } else {
    console.log("✅ Colonne 'service' ajoutée avec succès.");
  }
});

// 📌 Route pour tester le serveur
app.get('/', (req, res) => {
  res.send('Le serveur fonctionne avec SQLite !');
});

// 📌 Route pour enregistrer un message dans la base de données
app.post('/api/messages', (req, res) => {
  const { name, lastname, email, phone, service, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "Tous les champs obligatoires doivent être remplis !" });
  }

  const sql = `INSERT INTO messages (name, lastname, email, phone, service, message) VALUES (?, ?, ?, ?, ?, ?)`;
  db.run(sql, [name, lastname, email, phone, service, message], function (err) {
    if (err) {
      console.error("❌ Erreur SQLite :", err.message);
      return res.status(500).json({ message: "Erreur serveur lors de l'insertion." });
    }
    res.status(201).json({ message: "Message enregistré avec succès !" });
  });
});

// 📌 Route pour récupérer tous les messages
app.get('/api/messages', (req, res) => {
  db.all("SELECT * FROM messages ORDER BY created_at DESC", [], (err, rows) => {
    if (err) {
      console.error("❌ Erreur SQLite :", err.message);
      return res.status(500).json({ message: "Erreur serveur lors de la récupération." });
    }
    res.json(rows);
  });
});

// 📌 Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur en écoute sur http://localhost:${PORT}`);
});
