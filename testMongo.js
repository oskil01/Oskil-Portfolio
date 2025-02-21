import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv:oskill:Dk4qswQbvJhj6gAB@cluster0.n8ipy.mongodb.net/nom_de_ta_db?retryWrites=true&w=majority";

async function testConnection() {
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ Connexion réussie !");
  } catch (error) {
    console.error("❌ Erreur de connexion :", error);
  } finally {
    mongoose.disconnect();
  }
}

testConnection();
