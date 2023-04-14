const { Router } = require("express");

const UsersDAO = require("../dao/Users.dao");

const Users = new UsersDAO()
const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await Users.getAll()
    res.json({ status: "success", message: users });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", message: "internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.getOne(id)
    res.json({ status: "success", message: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", message: "internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const userinfo = req.body 

    const newUser = await Users.create(userinfo)
    res.status(201).json({ status: "success", message: newUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", message: "internal server error" });
  }
});

module.exports = router;
