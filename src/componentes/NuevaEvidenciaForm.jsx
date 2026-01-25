import { TextField, Button, FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useContext } from "react"
import { UserContext } from "../contextos/UserContext"

function NuevaEvidenciaForm(props) {
    const user = useContext(UserContext)
    const EVIDENCIA = {
        TAREA_ID: "tarea_id",
        ESTUDIANTE_ID: "estudiante_id",
        URL: "url",
        OBSERVACIONES: "observaciones",
        ESTADO_EVALUACION: "estado_validacion"
    }
    const ESTADO_EVALUACION = {
        PENDIENTE: "pendiente"
    }
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    const manejarFormulario = handleSubmit((datos) => {

        const nuevaEvidencia = {
            tarea_id: props.tarea.id,
            estudiante_id: user.id,
            url: datos.url,
            descripcion: datos.observaciones,
            estado_validacion: "pendiente"
        };

        props.manejarNuevaEvidencia(nuevaEvidencia);
        reset();
    })

    return (
        <form onSubmit={manejarFormulario}>
            <FormControl fullWidth margin="normal">
                <TextField
                    id={EVIDENCIA.URL}
                    label="URL"
                    error={errors.url}
                    helperText={errors.url?.message}
                    variant="outlined"
                    margin="normal"
                    {...register(EVIDENCIA.URL,
                        {
                            required: {
                                value: true,
                                message: "El enlace es obligatorio"
                            },
                            pattern: {
                                value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
                                message: "El formato del enlace no es correcto"
                            }
                        })
                    }

                />

                <TextField
                    id={EVIDENCIA.OBSERVACIONES}
                    label="Observaciones"
                    multiline
                    rows={4}
                    margin="normal"
                    error={errors.observaciones}
                    helperText={errors.observaciones?.message}
                    {...register(EVIDENCIA.OBSERVACIONES,
                        {
                            required: {
                                value: true,
                                message: "Observaciones son obligatorios"
                            }
                        })
                    }
                />
                <Button variant="contained" type='submit'>Añadir Evidencia</Button>
            </FormControl>
        </form>
    );
}

export default NuevaEvidenciaForm;