const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render("Home", {layout:"Home"})
});


module.exports = router;