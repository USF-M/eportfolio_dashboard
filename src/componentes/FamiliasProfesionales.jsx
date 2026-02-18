import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function FamiliasProfesionales(props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="basic table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Código</TableCell>
                        <TableCell>Nombre</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.lista.map((familiaProfesional) => (
                        <TableRow key={familiaProfesional.id}>
                            <TableCell>{familiaProfesional.id}</TableCell>
                            <TableCell>{familiaProfesional.codigo}</TableCell>
                            <TableCell>{familiaProfesional.nombre}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}