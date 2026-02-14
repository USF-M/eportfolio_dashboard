import { useContext, useState, useEffect } from "react";
import getModulosImpartidos from "../servicios/ModulosImpartidos/getModulosImpartidos"
import { UserContext } from "../contextos/UserContext";

function useMisModulosImpartidos() {
    const user = useContext(UserContext)
    const nombre = user.nombre

    const [buscando, setBuscando] = useState(false);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        obtenerModulosImpartidos();
    }, []);

    function obtenerModulosImpartidos() {

        return getModulosImpartidos().then((listaModulosImpartidos) => {

            setLista(listaModulosImpartidos[nombre]?.lista);

            console.log("lista modulos impartidos ", listaModulosImpartidos[nombre]?.lista)

        });
    }

    return { buscando, lista, obtenerModulosImpartidos }

}

export default useMisModulosImpartidos;