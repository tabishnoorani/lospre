import express from 'express';

const router = express.Router();

router.get ('/contests', (req, res)=>{
    res.send ({"name": "Tabbish Noorani"});
});

export default router;