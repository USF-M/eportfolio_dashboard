import { useContext } from "react"
import { TokenContext } from "../contextos/TokenContext"
import { UserContext } from "../contextos/UserContext"

function Roles(props) {

    const token = useContext(TokenContext)
    const user = useContext(UserContext)

    return (


        <>
            ROLES  ---  {props.usuario}  ---  {props.token}  ---  {props.menu}
            <br />
            ******* {token} ******* usuario: {user.nombre}
        </>



    )



}

export default Roles