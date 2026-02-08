import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import NuevaEvidencia from '../componentes/NuevaEvidencia';
import RevisionesPendientes from '../componentes/RevisionesPendientes';
import ProgresoCompletoAlumno from '../componentes/ProgresoCompletoAlumno';

export default function Funcionalidadestuiante() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="Pagina Estudiante">
                        <Tab label="Mi progreso completo" value="1" />
                        <Tab label="Subir nueva evidencia" value="2" />
                        <Tab label="Mis revisiones pendientes" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1"><ProgresoCompletoAlumno></ProgresoCompletoAlumno></TabPanel>
                <TabPanel value="2"><NuevaEvidencia></NuevaEvidencia></TabPanel>
                <TabPanel value="3"><RevisionesPendientes /></TabPanel>
            </TabContext>
        </Box>
    );
}