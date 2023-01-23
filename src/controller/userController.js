import { Router } from 'express'

const router = Router ()

router.post('/signup', function (req, res) {
  res.send('SIGNUP /')
})

router.post('/login', function (req, res) {
  res.send('LOGIN /')
})


export default router