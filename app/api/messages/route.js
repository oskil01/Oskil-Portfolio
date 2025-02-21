import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import open from "sqlite";

// Fonction pour ouvrir la base de données SQLite
async function openDb() {
  return open({
    filename: "./backend/database.js", // Nom du fichier SQLite
    driver: sqlite3.Database,
  });
}

// Gérer les requêtes POST (soumission du formulaire)
export async function POST(req) {
  try {
    const { name, lastname, email, phone, service, message } = await req.json();

    // Ouvrir la base de données
    const db = await openDb();

    // Insérer les données dans la table "contact"
    await db.run(
      "INSERT INTO contact (nom, email, phone, message) VALUES (?, ?, ?, ?, ?, ?)",
      [name, lastname, email, phone, service, message]
    );

    return NextResponse.json({ success: true, message: "Message envoyé !" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
