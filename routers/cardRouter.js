const express = require(`express`)
const router = express.Router();
const cardsController = require('../controllers/cardsController.js');

router.get("/products", cardsController.index);
router.get("/products/:productSlug", cardsController.show);
router.get("/orders", cardsController.orderIndex);
router.get("/orders/:orderSlug", cardsController.orderShow);
router.post("/orders", cardsController.orderStore);
router.post("/orderproduct", cardsController.orderProductStore);
router.put("/:productSlug", cardsController.update);
router.delete("/:productSlug", cardsController.destroy);

module.exports = router;