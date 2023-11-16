import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Dandaly Morales',
//     email: 'dan.asda@asda.com'
// }

export const UserProvider = ( {children} ) => {

  const [user, setUser] = useState();

  // const LoginUser

  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
