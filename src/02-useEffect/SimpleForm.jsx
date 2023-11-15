import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'strider',
        email: 'strider@gms.com'
    })

    const { username, email } = formState

    const onInputChange = ( {target} ) => {
        const { name, value } = target;

        setformState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('hey');
    }, [])

    useEffect(() => {
        // console.log('formState cambió');        
    }, [formState])


    useEffect(() => {
        // console.log('email cambió');        
    }, [email])

    
    
    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            { (username === 'strider2') && <Message />}
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="correo@correo.com"
                name="email"
                value={ email }
                onChange={ onInputChange}
            />

        </>
    )
}
