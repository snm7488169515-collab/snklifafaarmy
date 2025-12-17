
const router = require('express').Router();

router.get('/analytics',(req,res)=>{
  res.json({
    users: 1200,
    platformEarnings: 5400,
    pendingWithdrawals: 12
  });
});

module.exports = router;
