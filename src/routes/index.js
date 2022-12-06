const express = require("express");
const serverController = require("../controllers/serverController");
const router = express.Router();

router.get("/", serverController.home);
router.get("/users", serverController.listAllUsers);
router.get("/users/:id", serverController.getUser);
router.get("/users/:id/toggle-vip", serverController.toggleUserVipStatus);
router.get("*", serverController.notFound);

module.exports = router;
