import { generateAccessToken } from "../../utils/auth"

let users = []

const getUSerByEmail = (serchEmail) => users.find((obj)=> obj.email === serchEmail)

export const signup = (data) =>{
  if(getUSerByEmail(data.email)) throw new Error('email_existente')

    users.push(data) 
    return generateAccessToken({email: data.email})
}

export const login = (data)=> {
  const user = getUSerByEmail(data.email)
  if (!user) throw new Error('email_nao_encontrado')

  if(user.password !== data.password) throw new Error('senha_incorreta')

  return generateAccessToken ({email: data.email})
}