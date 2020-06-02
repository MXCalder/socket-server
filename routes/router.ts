import { Router, Request, Response } from "express";

const router = Router();

router.get('/mensajes', (req, res)=>{
    res.json({
        ok: true,
        mensaje: 'Todo está bien!'
    })
});
/*
router.post('/mensajes', (req, res)=>{
    res.json({
        ok: true,
        mensaje: 'POST - Listo'
    })
});*/

router.post('/mensajes', (req, res)=>{

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        cuerpo,
        de
    })
});

router.post('/mensajes/:id', (req, res)=>{

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    res.json({
        ok: true,
        cuerpo,
        de,
        id
    })
});

export default router;
