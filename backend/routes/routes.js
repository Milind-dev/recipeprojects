const express = require("express");
const {
  Recipectrl,
  localdatactrl,
  dashboardctrl,
  paginationctrl,
  register,
  login,
} = require("../controllers/Recipefoodctrl");
const router = express.Router();

router.route("/dashboard").get(dashboardctrl); 
router.route("/search").get(Recipectrl);  // query=yogurt&apiKey=API-KEY
router.route("/localdatas").get(localdatactrl); //local data
router.get('/pagination',paginationctrl)
router.post("/register", register);
router.post("/login", login)

module.exports = {
  dashboardRoute: router,
  RecipeRoute: router,
  localdatasRoute: router,
  paginationRoute:router,
  registerRouter:router,
  loginRouter:router
};


