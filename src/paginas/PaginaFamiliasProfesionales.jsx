import FamiliasProfesionales from "../componentes/FamiliasProfesionales";
import useFamiliasProfesionales from "../hooks/useFamiliasProfesionales";

export default function PaginaFamiliasProfesionales() {
    const familias = useFamiliasProfesionales();
    return (
        <>
            <h2>Familias profesionales</h2>
            <FamiliasProfesionales lista={familias.lista}></FamiliasProfesionales>
        </>
    )
}