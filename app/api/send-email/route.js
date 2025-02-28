// CONFIG AVEC POSTGRESQL

import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Tous les champs sont obligatoires" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

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

        // 📌 Options de l'email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Tu peux changer ça pour envoyer à d'autres destinataires
            subject: `Message de ${name}`,
            text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // 📌 Envoi de l'e-mail
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true, message: "Email envoyé avec succès !" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("❌ Erreur lors de l'envoi de l'e-mail :", error);
        return new Response(JSON.stringify({ error: "Erreur serveur" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

// CONFIG AVEC SQLITE

// export async function POST(req) {
//     try {
//         const { name, email, message } = await req.json();

//         // Vérification des données
//         if (!name || !email || !message) {
//             return new Response(JSON.stringify({ error: "Tous les champs sont obligatoires" }), {
//                 status: 400,
//                 headers: { "Content-Type": "application/json" },
//             });
//         }

//         // Simulation d'un envoi d'email (remplace par ton propre service)
//         console.log(`Email envoyé par ${name} (${email}): ${message}`);

//         return new Response(JSON.stringify({ success: true, message: "Email envoyé !" }), {
//             status: 200,
//             headers: { "Content-Type": "application/json" },
//         });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: "Erreur serveur" }), {
//             status: 500,
//             headers: { "Content-Type": "application/json" },
//         });
//     }
// }
