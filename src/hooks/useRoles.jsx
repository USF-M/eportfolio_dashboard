import React, { useContext, useState, useEffect } from "react";
// import roles from "../mocks/mock-roles";
import getAllRoles from "../servicios/Roles/getAllRoles"
import { UserContext } from "../contextos/UserContext";

function useRoles() {
    const user = useContext(UserContext)
    const nombre = user.nombre

    const [buscando, setBuscando] = useState(false);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        obtenerRoles();
    }, []);

    function obtenerRoles() {

        return getAllRoles().then((listaRoles) => {

            setLista(listaRoles);

            console.log("lista roles ", listaRoles)

        });
    }

    return { buscando, lista, obtenerRoles }

}

export default useRoles;