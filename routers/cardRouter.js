const express = require(`express`)
const router = express.Router();
const cardsController = require('../controllers/cardsController.js');

router.get("/", cardsController.index);
router.get("/products/:productSlug", cardsController.show);
router.post("/products", cardsController.productStore);
router.post("/orders", cardsController.orderStore);
router.post("/conditions", cardsController.conditionsStore);
router.post("/gametype", cardsController.gameTypeStore);
router.post("/rarity", cardsController.rarityStore)
router.put("/:productSlug", cardsController.update);
router.delete("/:productSlug", cardsController.destroy);

module.exports = router;