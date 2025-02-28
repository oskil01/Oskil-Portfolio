// CONFIG AVEC POSTGRESQL

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config(); // Charger les variables d'environnement
const { Pool } = pkg;

const app = express();
const PORT = process.env.PORT || 5000;

// 📌 Connexion à PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// 📌 Middlewares
app.use(cors());
app.use(express.json());

// 📌 Configuration de Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Vérification de la connexion SMTP
transporter.verify((error) => {
  if (error) {
    console.error("❌ Problème de connexion SMTP :", error);
  } else {
    console.log("✅ SMTP connecté avec succès !");
  }
});

// 📌 Création de la table si elle n'existe pas
tableInit();
async function tableInit() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        lastname TEXT,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        service TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ Table 'messages' prête à l'emploi");
  } catch (error) {
    console.error("❌ Erreur lors de la création de la table :", error.message);
  }
}

// 📌 Route pour envoyer un e-mail
app.post("/send-email", async (req, res) => {
  const { recipientEmail, subject, message } = req.body;

  if (!recipientEmail || !subject || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject,
      text: message,
    });
    res.status(200).json({ success: true, message: "E-mail envoyé avec succès !" });
  } catch (error) {
    console.error("❌ Erreur d'envoi d'email :", error);
    res.status(500).json({ success: false, message: "Erreur d'envoi d'email." });
  }
});

// 📌 Route pour enregistrer un message
app.post("/api/messages", async (req, res) => {
  const { name, lastname, email, phone, service, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "Tous les champs obligatoires doivent être remplis !" });
  }

  try {
    await pool.query(
      "INSERT INTO messages (name, lastname, email, phone, service, message) VALUES ($1, $2, $3, $4, $5, $6)",
      [name, lastname, email, phone, service, message]
    );
    res.status(201).json({ message: "Message enregistré avec succès !" });
  } catch (error) {
    console.error("❌ Erreur PostgreSQL :", error);
    res.status(500).json({ message: "Erreur serveur lors de l'insertion." });
  }
});

// 📌 Route pour récupérer tous les messages
app.get("/api/messages", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM messages ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (error) {
    console.error("❌ Erreur PostgreSQL :", error);
    res.status(500).json({ message: "Erreur serveur lors de la récupération." });
  }
});

// 📌 Route pour tester le serveur
app.get("/", (req, res) => {
  res.send("Le serveur fonctionne avec PostgreSQL !");
});

// 📌 Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur en écoute sur http://localhost:${PORT}`);
});


// CONFIG AVEC SQLITE

// import express from 'express';
// import nodemailer from 'nodemailer';
// // import sqlite3 from 'sqlite3';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config(); // Chargement les variables d'environnement
// const { Pool } = pkg;

// const app = express();
// // const PORT = 5000; port en local
// // port de production avec render
// const PORT = process.env.PORT || 5000; 

// // 📌 Middlewares
// app.use(cors());
// app.use(express.json()); // Parser les JSON des requêtes

// // 📌 Configuration de Nodemailer pour l'envoi des e-mails
// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_HOST, // Exemple : smtp-mail.outlook.com
//   port: parseInt(process.env.EMAIL_PORT) || 587, // 587 pour Outlook
//   secure: false, // false pour STARTTLS
//   auth: {
//     user: process.env.EMAIL_USER, // email Outlook
//     pass: process.env.EMAIL_PASS, // mot de passe (ou mot de passe d'application)
//   },
//   tls: {
//     rejectUnauthorized: false, // dtop erreurs SSL
//   }
// });

// // vérification de la connexion à nodemailer
// transporter.verify((error, success) => {
//   if (error) {
//     console.error("❌ Problème de connexion SMTP :", error);
//   } else {
//     console.log("✅ SMTP connecté avec succès !");
//   }
// });

// // 📌 Route pour envoyer un e-mail
// app.post("/send-email", async (req, res) => {
//   const { recipientEmail, subject, message } = req.body;

//   if (!recipientEmail || !subject || !message) {
//     return res.status(400).json({ error: "Tous les champs sont requis." });
//   }

//   // Envoie du mail
//   const mailOptions = {
//     from: process.env.EMAIL_USER, // Expéditeur
//     to: recipientEmail, // Destinataire
//     subject: subject, // Objet du mail
//     text: message, // Contenu du mail
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: "E-mail envoyé avec succès !" });
//   } catch (error) {
//     console.error("❌ Erreur lors de l'envoi de l'email :", error);
//     res.status(500).json({ success: false, message: "Erreur lors de l'envoi de l'email." });
//   }
// });

// // 📌 Connexion à SQLite
// // sqlite3.verbose();

// // connection à render
// const dbPath = process.env.DATABASE_PATH ||'./backend/database.sqlite';
// const db = new sqlite3.Database(dbPath, (err) => {
//   if (err) {
//     console.error("❌ Erreur de connexion SQLite :", err.message);
//   } else {
//     console.log("✅ Connexion à SQLite réussie !");
//   }
// });

// // 📌 Création de la table si elle n'existe pas
// db.serialize(() => {
//   db.run(`CREATE TABLE IF NOT EXISTS messages (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     lastname TEXT,
//     email TEXT NOT NULL,
//     phone TEXT NOT NULL,
//     service TEXT, 
//     message TEXT NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//   )`);
// });

// // 📌 Route pour tester le serveur
// app.get('/', (req, res) => {
//   res.send('Le serveur fonctionne avec SQLite !');
// });

// // 📌 Route pour enregistrer un message dans la base de données
// app.post('/api/messages', (req, res) => {
//   const { name, lastname, email, phone, service, message } = req.body;

//   if (!name || !email || !phone || !message) {
//     return res.status(400).json({ 
//       message: "Tous les champs obligatoires doivent être remplis !" 
//     });
//   }

//   const sql = `INSERT INTO messages (name, lastname, email, phone, service, message) VALUES (?, ?, ?, ?, ?, ?)`;
//   db.run(sql, [name, lastname, email, phone, service, message], function (err) {
//     if (err) {
//       console.error("❌ Erreur SQLite :", err.message);
//       return res.status(500).json({ message: "Erreur serveur lors de l'insertion." });
//     }
//     res.status(201).json({ message: "Message enregistré avec succès !" });
//   });
// });

// // 📌 Route pour récupérer tous les messages
// app.get('/api/messages', (req, res) => {
//   db.all("SELECT * FROM messages ORDER BY created_at DESC", [], (err, rows) => {
//     if (err) {
//       console.error("❌ Erreur SQLite :", err.message);
//       return res.status(500).json({ message: "Erreur serveur lors de la récupération." });
//     }
//     res.json(rows);
//   });
// });

// // 📌 Lancer le serveur
// app.listen(PORT, () => {
//   console.log(`🚀 Serveur en écoute sur http://localhost:${PORT}`);
// });
