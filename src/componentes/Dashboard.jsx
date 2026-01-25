import { useContext } from "react"
import { TokenContext } from "../contextos/TokenContext"
import { UserContext } from "../contextos/UserContext"
import NuevaEvidencia from "./NuevaEvidencia"

function Dashboard(props) {

    const token = useContext(TokenContext)
    const user = useContext(UserContext)

    return (


        <>
            MAIN  ---  {props.usuario}  ---  {props.token}  ---  {props.menu}
            <br />
            ******* {token} ******* usuario: {user.nombre}
            <NuevaEvidencia></NuevaEvidencia>
        </>



    )



}

export default Dashboard