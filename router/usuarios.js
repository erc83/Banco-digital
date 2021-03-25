const { Router } = require('express');
const router = Router();

//usuarios
router.get('/register', (req, res) => res.send("Hola register"));
router.get('/login', (req, res) => res.send("Hola login"));
router.get('/dashboard', (req, res) => res.send("Hola dashboard"));

module.exports = router;