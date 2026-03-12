const express = require('express');
const index = express();
const cors = require("cors");
const port = 3000;
const cardsRouter = require('./routers/cardRouter.js');
// variabile per inviare la mail di conferma in seguito al pagamento dell'ordine
const inviaEmailConferma = require("./serviceMails/mails.js");



index.use(cors({
  origin: "http://localhost:5173"
}));

index.use(express.json());

index.use("/", cardsRouter)

// gestione mails
index.post("/order", async (req, res) => {
  const customerMail = req.body.customerMail;
  if (!customerMail) {
    return res.status(400).json({ error: "Email cliente mancante" });
  }

  const ordineId = Math.floor(Math.random() * 100000000);

  try {
    await inviaEmailConferma(customerMail, ordineId);
    res.json({ 
      message: "Ordine ricevuto e email inviata!",
      ordineId: ordineId
    });
  } catch (err) {
    console.error("Errore invio email:", err);
    res.status(500).json({ error: "Errore nell'invio email" });
  }
});

index.listen(port, () => {
  console.log("Server running on port 3000");
});