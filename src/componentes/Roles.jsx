import { useContext } from "react"
import { TokenContext } from "../contextos/TokenContext"

function Roles(props) {

    const token = useContext(TokenContext)

    return (


        <>ROLES  ---  {props.usuario}  ---  {props.token}  ---  {props.menu} <br /> ******* {token} *******</>



    )



}

export default Roles