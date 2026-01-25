import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import tareasRA from '../mocks/mock-tareasRA';

function SelectorTareaRA(props) {

    const [tareaId, settareaId] = useState('');

    const handleChange = (event) => {
        const idSeleccionado = event.target.value;
        settareaId(idSeleccionado);

        const tareaSeleccionada = tareasRA.lista.find(tarea => tarea.id === idSeleccionado);
        props.manejarSelectorTareaRA(tareaSeleccionada);
    };
    function renderizarTareas(tarea) {
        return <MenuItem key={tarea.id} value={tarea.id}>{tarea.observaciones}</MenuItem>
    }
    return (
        <>
            <FormControl fullWidth margin="normal">
                <InputLabel id="selectTareasLabel">Selecciona Una Tarea</InputLabel>
                <Select
                    labelId="selectTareasLabel"
                    id="selectTareas"
                    value={tareaId}
                    label="Selecciona Una Tarea"
                    onChange={handleChange}
                >
                    {tareasRA.lista.map(renderizarTareas)}
                </Select>

            </FormControl>
        </>
    );
}

export default SelectorTareaRA;