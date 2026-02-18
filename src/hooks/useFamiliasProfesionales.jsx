import { useEffect, useState } from "react";
import getFamiliasProfesionales from "../servicios/FamiliasProfesionales/getFamiliasProfesionales";

function useFamiliasProfesionales() {
    const [buscando] = useState(false);
    const [lista, setLista] = useState([]);

    const obtenerFamilias = () => {
        return getFamiliasProfesionales()
            .then((respuesta) => {
                const familias = Array.isArray(respuesta) ? respuesta : respuesta?.lista || [];
                setLista(familias);
            });
    }

    useEffect(() => {
        obtenerFamilias();
    }, []);

    return { buscando, lista, obtenerFamilias }
}

export default useFamiliasProfesionales;