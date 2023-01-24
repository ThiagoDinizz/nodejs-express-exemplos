import { Router } from 'express'

import { signup } from './userService'

const router = Router ()

router.post('/signup', function (req, res) {
  const answer = signup(req.body)
  res.send(answer)
})

router.post('/login', function (req, res) {
  res.send('LOGIN /')
})


export default router