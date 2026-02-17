import { useState } from "react";
import insertNuevaEvidencia from "../servicios/Evidencias/insertNuevaEvidencia";

function useInsertNuevaEvidencia() {
    const [buscando, setBuscando] = useState(false);
    const [lista, setLista] = useState([]);

    function insertarEvidencia(evidencia) {
        setBuscando(true);

        return insertNuevaEvidencia(evidencia).then((evidenciaCreada) => {

            if (Object.keys(evidenciaCreada).length > 0)
                setLista([...lista, evidenciaCreada]);
            setBuscando(false);

            return evidenciaCreada;
        });

    }

    return { buscando, lista, insertarEvidencia }
}

export default useInsertNuevaEvidencia;