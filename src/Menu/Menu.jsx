import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import useRoles from '../hooks/useRoles';
import opcionesMenu from '../mocks/mock-administrador';
import useMisModulosImpartidos from '../hooks/useMisModulosImpartidos';
import useMisModulosMatriculados from '../hooks/useMisModulosMatriculados';
import { UserContext } from '../contextos/UserContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

export default function Menu() {
    const roles = useRoles();
    const listaImpartidos = useMisModulosImpartidos();
    const listaMatriculados = useMisModulosMatriculados();
    const user = useContext(UserContext)
    const nombre = user.nombre
    const navigate = useNavigate();
    console.log("listaImpartidos---------", listaImpartidos);
    function generarAccordionRol(rol) {
        return (
            <Accordion key={rol}>
                <AccordionSummary
                    expandIcon="^"
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">{rol}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    {generarMenu(rol)}
                </AccordionDetails>

            </Accordion>
        )
    }
    function generarMenu(rol) {
        switch (rol) {
            case 'administrador':
                return opcionesMenu?.administrador?.map((opcion) => (
                    <div key={opcion.ruta}>
                        <Button onClick={() => navigate(opcion.ruta)}>{opcion.nombre}</Button>
                    </div>
                ));
            case 'docente':
                return listaImpartidos?.lista?.map((opcion) => (
                    <div key={opcion.id}>
                        <Button onClick={() => navigate(`/funcionalidaddocente/${opcion.id}`)}>{opcion.nombre}</Button>
                    </div >
                ));
            case 'estudiante':
                return listaMatriculados?.lista?.map((opcion) => (
                    <div key={opcion.id}>
                        <Button onClick={() => navigate(`/funcionalidadestudiante/${opcion.id}`)}>{opcion.nombre}</Button>
                    </div>
                ));
            default:
                return null;
        }
    }
    return (
        <div>
            {console.log("roles", roles)}
            {console.log("roles por nombre: ", roles?.lista[nombre]?.roles)}
            {roles?.lista[nombre]?.roles?.map(generarAccordionRol)}
        </div>
    );
}
