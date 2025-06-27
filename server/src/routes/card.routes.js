const router = require("express").Router();
const CardController = require("../controllers/Card.controller");

router.get("/", CardController.getAll);
router.get("/:id", CardController.getOne);
router.post("/", CardController.create);
router.put("/:id", CardController.update);
router.delete("/:id", CardController.delete);

module.exports = router;
