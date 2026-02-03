import { useContext } from "react"
import { TokenContext } from "../contextos/TokenContext"
import { UserContext } from "../contextos/UserContext"
import Menu from "../Menu/Menu"
function Roles(props) {

    const token = useContext(TokenContext)
    const user = useContext(UserContext)

    return (


        <>
            ROLES  ---  {props.usuario}  ---  {props.token}  ---  {props.menu}
            <br />
            ******* {token} ******* usuario: {user.nombre}
            <Menu />
        </>



    )



}

export default Roles