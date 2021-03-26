const { Router } = require('express');
const router = Router();

//usuarios
router.get('/login', (req, res) => {
    res.render("LoginU", { layout: "LoginU" })
});

router.get('/register', (req, res) => {
    res.render("RegisterU", { layout: "RegisterU" })
});

router.get('/dashboard', (req, res) => {
    res.render("DashboardU", { layout: "DashboardU" })
});


router.get("/dashboard/perfil", (req, res) => {
  res.render( "Profile", { layout: "Profile"})
})

router.get("/dashboard/transferencia", (req, res) => {
  res.render( "Transfer", { layout: "Transfer"})
})

router.get('/login', (req, res) => res.send("Hola login"));
router.get('/dashboard', (req, res) => res.send("Hola dashboard"));

module.exports = router;