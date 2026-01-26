import React, { useContext, useState } from "react";
import modulosMatriculados from "../mocks/mock_matriculados";
import { UserContext } from "../contextos/UserContext"

function useMisModulosMatriculados() {
    const user = useContext(UserContext)
    const [buscando, setBuscando] = useState(false)
    const [lista, setlista] = useState(modulosMatriculados[user.name])

    return { buscando, lista }
}
export default useMisModulosMatriculados;