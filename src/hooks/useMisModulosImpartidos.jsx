import React, { useContext, useState } from "react";
import impartidos from "../mocks/mock_impartidos";
import { UserContext } from "../contextos/UserContext"

function useMisModulosImpartidos() {
    const user = useContext(UserContext)
    const [buscando, setBuscando] = useState(false)
    const [lista, setlista] = useState(impartidos[user.name])

    return { buscando, lista }
}
export default useMisModulosImpartidos;