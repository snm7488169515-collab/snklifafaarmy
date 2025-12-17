
const router = require('express').Router();

router.post('/', (req,res)=>{
  res.json({ status:'pending' });
});

module.exports = router;
