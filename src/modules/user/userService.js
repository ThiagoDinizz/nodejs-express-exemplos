let users = []

const getUSerByEmail = (serchEmail)  => users.find(({email})=> email === serchEmail)

export const signup = (data) =>{
  if(getUSerByEmail(data.email)) throw new Error('email_existente')

    users.push(data) 
    return true
}