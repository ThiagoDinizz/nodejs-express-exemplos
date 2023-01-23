import { Router } from 'express'

const router = Router ()

router.post('/',(req, res)=>{
  res.send('CREATE POST')
})

//:id? criado varável opcional. 
router.get('/:id?',(req, res)=>{
  //DUAS OPÇÕES: LISTAR TODOS OU CRIAR APENAS UM  
  res.send('GET POST')
})

export default router