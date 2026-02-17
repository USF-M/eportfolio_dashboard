import { useState, useEffect } from 'react';
import getTareasPorRA from '../servicios/TareasRA/getTareasPorRA';

function useTareasPorRA() {
    const [buscando, setBuscando] = useState(false);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        obtenerTareasPorRA();
    }, []);

    function obtenerTareasPorRA() {
        setBuscando(true);

        return getTareasPorRA()
            .then((tareas) => {
                setLista(tareas);
            })
            .finally(() => {
                setBuscando(false);
            });
    }

    return { buscando, lista, obtenerTareasPorRA };
}

export default useTareasPorRA;