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
  // mail conferma ordine al cliente
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

  // mail conferma ordine al venditore
  const mailAdmin = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: "Nuovo ordine ricevuto",
    html: `
      <h2>Nuovo ordine ricevuto</h2>
      <p>ID ordine: <b>${ordineId}</b></p>
      <p>Email cliente: ${clienteEmail}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailAdmin);

    console.log("email cliente inviata a:", clienteEmail)
    console.log("email venditore inviata a:", process.env.ADMIN_EMAIL)
    
  } catch (err) {
    console.error("Errore invio email:", err);
  }
}

module.exports = inviaEmailConferma;