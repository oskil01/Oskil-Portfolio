export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        // Vérification des données
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Tous les champs sont obligatoires" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Simulation d'un envoi d'email (remplace par ton propre service)
        console.log(`Email envoyé par ${name} (${email}): ${message}`);

        return new Response(JSON.stringify({ success: true, message: "Email envoyé !" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Erreur serveur" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
