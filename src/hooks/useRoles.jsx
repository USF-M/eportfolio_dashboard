import React, { useContext, useState } from "react";
import roles from "../mocks/mock-roles";
import { UserContext } from "../contextos/UserContext";

function useRoles() {
    const user = useContext(UserContext)
    const nombre = user.nombre
    console.log("nombre: ", nombre)
    console.log("roles: ", roles[nombre])
    const [buscando, setBuscando] = useState(false);
    const [lista, setLista] = useState(roles[nombre]);

    return { buscando, lista }

}

export default useRoles;