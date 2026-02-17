import NuevaEvidenciaForm from "./NuevaEvidenciaForm";
import SelectorTareaRA from "./SelectorTareaRA";
import { Box } from '@mui/material';
import { useState } from 'react';

function NuevaEvidencia() {

    const [tarea, setTarea] = useState(null);

    function manejarSelectorTareaRA(tareaSeleccionada) {
        setTarea(tareaSeleccionada);
    }
    function manejarNuevaEvidencia(nuevaEvidencia) {
        console.log("nuevaEvidencia instada", nuevaEvidencia)
    }
    return (

        <Box sx={{ minWidth: 120, maxWidth: 600 }}>
            <SelectorTareaRA manejarSelectorTareaRA={manejarSelectorTareaRA}></SelectorTareaRA>
            <NuevaEvidenciaForm tarea={tarea} manejarNuevaEvidencia={manejarNuevaEvidencia} ></NuevaEvidenciaForm>
        </Box>
    )
}

export default NuevaEvidencia;