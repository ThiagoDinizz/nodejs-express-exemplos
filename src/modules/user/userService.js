import {sign} from 'jsonwebtoken'

let users = []

const generateAccessToken = (data) => sign(data, 'secret')

const getUSerByEmail = (serchEmail)  => users.find(({email})=> email === serchEmail)

export const signup = (data) =>{
  if(getUSerByEmail(data.email)) throw new Error('email_existente')

    users.push(data) 
    return generateAccessToken({email: data.email})
}

export const login = (data)=> {
  const user = getUSerByEmail(data.email)
  if (!user) throw new Error('email_nao_encontrado')

  if(user.password !== data.password) throw new Error('senha_inconrreta')

  return generateAccessToken ({email: data.email})
}