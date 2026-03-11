const express = require(`express`)
const router = express.Router();
const cardsController = require('../controllers/cardsController.js');

router.get("/products", cardsController.index);
router.get("/products/:productSlug", cardsController.show);
router.post("/orders", cardsController.orderStore);
router.put("/:productSlug", cardsController.update);
router.delete("/:productSlug", cardsController.destroy);

module.exports = router;