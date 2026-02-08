import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import useRoles from '../hooks/useRoles';
import opcionesMenu from '../mocks/mock-administrador';

export default function Menu() {
    const { lista } = useRoles();
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
                return opcionesMenu?.administrador?.map((item) => (
                    <div key={item.ruta}>
                        <Button href={item.ruta}>{item.nombre}</Button>
                    </div>
                ));
            case 'docente':
                return "docente";
            case 'alumno':
                return "alumno";
            default:
                return "null";
        }
    }
    return (
        <div>
            {lista?.roles.map(generarAccordionRol)}
        </div>
    );
}
