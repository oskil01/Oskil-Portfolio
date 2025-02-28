// CONFIG AVEC POSTGRESQL

import { NextResponse } from "next/server";
import { Pool } from "pg";

// Configuration de la connexion PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Utilisation de la variable d'environnement
});

// Gérer les requêtes POST (soumission du formulaire)
export async function POST(req) {
  try {
    const { name, lastname, email, phone, service, message } = await req.json();

    // Insérer les données dans la table "messages"
    const query = `
      INSERT INTO messages (name, lastname, email, phone, service, message) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
    `;
    
    const values = [name, lastname, email, phone, service, message];

    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();

    return NextResponse.json({ success: true, message: "Message envoyé !", data: result.rows[0] });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// CONFIG AVEC SQLITE

// import { NextResponse } from "next/server";
// import sqlite3 from "sqlite3";
// import open from "sqlite3";

// // Fonction pour ouvrir la base de données SQLite
// async function openDb() {
//   return open({
//     filename: "./backend/database.js", // Nom du fichier SQLite
//     driver: sqlite3.Database,
//   });
// }

// // Gérer les requêtes POST (soumission du formulaire)
// export async function POST(req) {
//   try {
//     const { name, lastname, email, phone, service, message } = await req.json();

//     // Ouvrir la base de données
//     const db = await openDb();

//     // Insérer les données dans la table "contact"
//     await db.run(
//       "INSERT INTO messages (name, lastname, email, phone, service, message) VALUES (?, ?, ?, ?, ?, ?)",
//       [name, lastname, email, phone, service, message]
//     );

//     return NextResponse.json({ success: true, message: "Message envoyé !" });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }
