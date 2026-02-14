import { useContext, useState, useEffect } from "react";
import getModulosMatriculados from "../servicios/ModulosMatriculados/getModulosMatriculados"
import { UserContext } from "../contextos/UserContext";

function useMisModulosMatriculados() {
    const user = useContext(UserContext)
    const nombre = user.nombre

    const [buscando, setBuscando] = useState(false);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        obtenerModulosMatriculados();
    }, []);

    function obtenerModulosMatriculados() {

        return getModulosMatriculados().then((listaModulosMatriculados) => {

            setLista(listaModulosMatriculados[nombre]?.lista);

            console.log("lista modulos matriculados ", listaModulosMatriculados[nombre]?.lista)

        });
    }

    return { buscando, lista, obtenerModulosMatriculados }

}

export default useMisModulosMatriculados;