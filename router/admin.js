const { Router } = require('express');
const router = Router();

router.get('/login', (req, res) => res.send("admin login"));
router.get('/register', (req, res) => res.send("admin register"));
router.get('/dashboard', (req, res) => res.send("admin dash board"));



module.exports = router;