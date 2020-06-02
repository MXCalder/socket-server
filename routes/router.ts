import { Router, Request, Response } from "express";

const router = Router();

router.get('/mensajes', (req, res)=>{
    res.json({
        ok: true,
        mensaje: 'Todo está bien!'
    })
});

router.post('/mensajes', (req, res)=>{
    res.json({
        ok: true,
        mensaje: 'POST - Listo'
    })
});

export default router;
