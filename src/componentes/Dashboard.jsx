import { useContext } from "react"
import { TokenContext } from "../contextos/TokenContext"

function Dashboard(props) {

    const token = useContext(TokenContext)

    return (


        <>MAIN  ---  {props.usuario}  ---  {props.token}  ---  {props.menu} <br />  ******* {token} *******</>



    )



}

export default Dashboard