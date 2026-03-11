const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function inviaEmailConferma(clienteEmail, ordineId) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: clienteEmail,
    subject: "Conferma ordine",
    html: `
      <h2>Grazie per il tuo ordine!</h2>
      <p>Il tuo ordine numero <b>${ordineId}</b> è stato ricevuto.</p>
      <p>Ti avviseremo quando verrà spedito.</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email inviata a", clienteEmail);
  } catch (err) {
    console.error("Errore invio email:", err);
  }
}

module.exports = inviaEmailConferma;