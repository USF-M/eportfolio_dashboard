import { useContext } from "react"
import { TokenContext } from "../contextos/TokenContext"

function Cabecera(props) {

    const token = useContext(TokenContext)

    return (


        <>
            HEADER  ---  {props.usuario}  ---  {props.token}  ---  {props.menu} <br />  ******** {token} ********
        </>



    )



}

export default Cabecera