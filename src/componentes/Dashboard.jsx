import { useContext } from "react"
import { TokenContext } from "../contextos/TokenContext"
import { UserContext } from "../contextos/UserContext"
import NuevaEvidencia from "./NuevaEvidencia"
import { Route, Routes } from "react-router-dom"
import Funcionalidaddocente from "../paginas/Funcionalidaddocente"
import Funcionalidadestudiante from "../paginas/Funcionalidadestudiante"
import PaginaFamiliasProfesionales from "../paginas/PaginaFamiliasProfesionales"

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

                <Route path="/funcionalidadestudiante/:modulo" element={<Funcionalidadestudiante />} />

                <Route path="/familiasprofesionales" element={<PaginaFamiliasProfesionales />} />

            </Routes>
            {/* <NuevaEvidencia></NuevaEvidencia> */}
        </>



    )



}

export default Dashboard