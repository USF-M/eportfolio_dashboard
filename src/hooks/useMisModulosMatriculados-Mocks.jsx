import React, { useContext, useState } from "react";
import modulosMatriculados from "../mocks/mock-matriculados";
import { UserContext } from "../contextos/UserContext"

function useMisModulosMatriculados() {
    const user = useContext(UserContext)
    const [buscando, setBuscando] = useState(false)
    const [listaMatriculados, setlistaMatriculados] = useState(modulosMatriculados[user.nombre])

    return { buscando, listaMatriculados }
}
export default useMisModulosMatriculados;