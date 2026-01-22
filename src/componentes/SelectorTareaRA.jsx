import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import tareasRA from '../mocks/mock-tareasRA';

function SelectorTareaRA(props) {

    const [tareaRA, setTareaRA] = React.useState('');

    const handleChange = (event) => {
        setTareaRA(event.target.value);
        props.manejarSelectorTareaRA(event.target.value);
    };
    function renderizarTareas(tarea) {
        return <MenuItem value={tarea.id}>{tarea.observaciones}</MenuItem>
    }
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="selectTareasLabel">Selecciona Una Tarea</InputLabel>
                <Select
                    labelId="selectTareasLabel"
                    id="selectTareas"
                    value={tareaRA}
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