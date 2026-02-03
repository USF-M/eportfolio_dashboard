import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import useRoles from '../hooks/useRoles';

export default function Menu() {
    const { lista } = useRoles();
    function generarAccordionRol(rol) {
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon="^"
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">{rol}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>
        )
    }
    return (
        <div>
            {lista?.roles.map(generarAccordionRol)}
        </div>
    );
}
