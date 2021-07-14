const express = require('express');

const router = express.Router();

// When using get, it matches the exact path, unlike the use method, which does begins with
router.get('/', (req, res, next) => {
    res.send('<h1>Hello from express!</h1>');
});

module.exports = router;
