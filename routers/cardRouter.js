const express = require(`express`)
const router = express.Router();
const cardsController = require('../controllers/cardsController.js');

router.get("/", cardsController.index);          
router.get("/:id", cardsController.show);         
router.post("/", cardsController.store);          
router.put("/:id", cardsController.update);       
router.delete("/:id", cardsController.destroy);

module.exports = router;