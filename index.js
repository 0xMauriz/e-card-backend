const express = require('express');
const index = express();
const cors = require("cors");
const port = 3000;
const cardsRouter = require('./routers/cardRouter.js');

index.use(cors());
index.use(express.json());
index.use("/", cardsRouter)

index.listen(port, () => {
  console.log("Server running on port 3000");
});