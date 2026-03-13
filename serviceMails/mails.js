const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function inviaEmailConferma(clienteEmail, ordineId, order, products) {
  // riepilogo dati dell'ordine prodotto
  const datiProdotti = products.map(p => `
      <tr>
        <td>${p.title}</td>
        <td>${p.quantity}</td>
        <td>${p.price} €</td>
      </tr>
  `).join("");

  // mail conferma ordine al cliente
  const totaleOrdine = products.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: clienteEmail,
    subject: "Conferma ordine",
    html: `
      <div class="mail-container">
       <p>Ciao ${order.customerName},</p>
       <p>ti confermiamo che il tuo ordine è stato ricevuto correttamente</p>
      
       <div class="order-info">
          <h3>Ecco i dettagli del tuo ordine</h3>

          <p>ID ordine: <b>#${ordineId}</b></p>
          <p>Email: ${order.customerMail}</p>
          <p>Telefono: ${order.phone}</p>

          <table>
            <thead>
              <tr>
                <th>Prodotto</th>
                <th>Quantità</th>
                <th>Prezzo</th>
              </tr>
            </thead>

            <tbody>
              ${datiProdotti}
            </tbody>
          </table>

        <div class="shipping-info">
          <h3>Indirizzo di spedizione</h3>

          <p>${order.streetName}</p>
          <p>${order.city}</p>
          <p>${order.postalCode}</p>
          <p>${order.province}</p>
          <p>${order.country}</p>
        </div>

        <div class="order-total">
          <h3>Totale ordine: ${totaleOrdine} €</h3>
        </div>

      </div>
    `
  };

  // mail conferma ordine al venditore
  const mailAdmin = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: "Nuovo ordine ricevuto",
    html: `
      <h2>Nuovo ordine ricevuto</h2>

      <p>ID ordine: <b>#${ordineId}</b></p>

      <h3>Dati cliente</h3>

      <p>Nome: ${order.customerName}</p>
      <p>Cognome: ${order.customerSurname}</p>
      <p>Email: ${order.customerMail}</p>
      <p>Telefono: ${order.phone}</p>

      <h3>Indirizzo</h3>

      <p>Via: ${order.streetName}</p>
      <p>Città: ${order.city}</p>
      <p>Codice Postale:${order.postalCode}</p>
      <p>Provincia: ${order.province}</p>
      <p>Paese: ${order.country}</p>

      <h3>Prodotti ordinati</h3>

      <table>
        <tbody>
          ${datiProdotti}
        </tbody>
      </table>

      <h3>Totale ordine: ${totaleOrdine} €</h3>
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