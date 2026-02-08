import { useContext } from "react"
import { TokenContext } from "../contextos/TokenContext"
import { UserContext } from "../contextos/UserContext"
import NuevaEvidencia from "./NuevaEvidencia"
import { Route, Routes } from "react-router-dom"
import Funcionalidaddocente from "../paginas/Funcionalidaddocente"
import Funcionalidadestuiante from "../paginas/Funcionalidadestuiante"

function Dashboard(props) {

    const token = useContext(TokenContext)
    const user = useContext(UserContext)

    return (


        <>
            MAIN  ---  {props.usuario}  ---  {props.token}  ---  {props.menu}
            <br />
            ******* {token} ******* usuario: {user.nombre}
            <Routes>

                <Route path="/funcionalidaddocente/:modulo" element={<Funcionalidaddocente />} />

                <Route path="/funcionalidadestuiante/:modulo" element={<Funcionalidadestuiante />} />

            </Routes>
            {/* <NuevaEvidencia></NuevaEvidencia> */}
        </>



    )



}

export default Dashboard