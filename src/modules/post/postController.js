import { Router } from 'express'

const router = Router ()

router.post('/',(req, res)=>{
  res.send('CREATE POST')
})

//:id variável que só ocorrerá quuando tiver um id.":id? variávl facultativa, opcional vai entrar na rota!
router.get('/:id?',(req, res)=>{
  res.send('GET POST')
})

export default router