import { Router } from 'express'
import { verifyAccessToken } from '../../utils/auth'

const router = Router ()

router.post('/',verifyAccessToken,(req, res)=>{
  res.send('CREATE POST')
})

//:id variável que só ocorrerá quuando tiver um id.":id? variávl facultativa, opcional vai entrar na rota!
router.get('/:id?',verifyAccessToken,(req, res)=>{
  res.send('GET POST')
})

export default router