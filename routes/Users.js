const express = require('express');
const router = express.Router()

// router.get('/',(req,res)=>{
//     res.send("you created a user!");
// })


const controller = require('../controllers/Usercontroller')
router.get("/",controller.get);

module.exports = router;