const path = require("path");
const userService = require("../services/userService");

const serverController = {
  home: function (req, res) {
    res.sendFile(path.join(__dirname, "../templates", "index.html"));
  },

  listAllUsers: async function (req, res) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  getUser: async function (req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (user) {
        res.json({ message: "user found", user });
      } else {
        res.status(404).json({ message: "user not found" });
      }
    } catch (err) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  toggleUserVipStatus: async function (req, res) {
    try {
      const user = await userService.toggleVipUserStatus(req.params.id);
      if (user) {
        res.json({ message: "user vip status toggled", user });
      } else {
        res.status(400).json({ message: "error updating vip status" });
      }
    } catch (err) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  notFound: function (req, res) {
    res.sendFile(path.join(__dirname, "../templates", "404.html"));
  },
};

module.exports = serverController;
