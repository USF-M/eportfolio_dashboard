import React, { useContext, useState } from "react";
import roles from "../mocks/mock-roles";
import { UserContext } from "../contextos/UserContext";

function useRoles() {
    const user = useContext(UserContext)
    const [buscando, setBuscando] = useState(false);
    const [lista, setLista] = useState(roles[user.name]);

    return { buscando, lista }

}

export default useRoles;