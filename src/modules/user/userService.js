let users = []

const getUSerByEmail = (serchEmail)  => users.find(({email})=> email === serchEmail)

export const signup = (data) =>{
  if(getUSerByEmail(data.email)){
    console.log("Existe o email")
  } else{
    users.push(data)
  }
  return true
}