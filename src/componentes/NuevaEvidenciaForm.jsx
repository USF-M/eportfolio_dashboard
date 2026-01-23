import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

function NuevaEvidenciaForm(props) {
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

    const manejarFormulario = handleSubmit((nuevaEvidencia) => {
        props.manejarNuevaEvidencia(nuevaEvidencia);
        reset();
    })

    return (
        <form onSubmit={manejarFormulario}>
            <div>
                <TextField
                    id={EVIDENCIA.TAREA_ID}
                    variant="outlined"
                    margin="normal"
                    value={props.tarea_id}
                    hidden
                    {...register(EVIDENCIA.TAREA_ID)}
                />
            </div>
            <div>
                <TextField
                    id={EVIDENCIA.ESTUDIANTE_ID}
                    variant="outlined"
                    margin="normal"
                    value={props.estudiante_id}
                    hidden
                    {...register(EVIDENCIA.ESTUDIANTE_ID)}
                />
            </div>
            <div>
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
            </div>

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
            <div>
                <TextField
                    id={EVIDENCIA.ESTADO_EVALUACION}
                    variant="outlined"
                    margin="normal"
                    value={ESTADO_EVALUACION.PENDIENTE}
                    hidden
                    {...register(EVIDENCIA.ESTADO_EVALUACION)}
                />
            </div>
            <div>
                <Button variant="contained">Añadir Evidencia</Button>
            </div>
        </form>
    );
}

export default NuevaEvidenciaForm;