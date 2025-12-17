
const router = require('express').Router();

router.post('/auto',(req,res)=>{
  res.json({ payout:'initiated' });
});

module.exports = router;
