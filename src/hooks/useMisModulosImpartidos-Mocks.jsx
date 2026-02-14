import React, { useContext, useState } from "react";
import impartidos from "../mocks/mock-impartidos";
import { UserContext } from "../contextos/UserContext"

function useMisModulosImpartidos() {
    const user = useContext(UserContext)
    const [buscando, setBuscando] = useState(false)
    const [listaImpartidos, setlistaImpartidos] = useState(impartidos[user.nombre])

    return { buscando, listaImpartidos }
}
export default useMisModulosImpartidos;