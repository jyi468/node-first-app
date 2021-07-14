const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// When using get, it matches the exact path, unlike the use method, which does begins with
router.get('/', (req, res, next) => {
    // __dirname holds absolute path to the folder of the file of which it is called in
    // path.join will automatically create paths that work on windows and linux (forward vs back slashes)
    // .. means go up one level
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
