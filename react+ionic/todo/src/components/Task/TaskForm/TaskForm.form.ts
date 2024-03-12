import * as Yup from 'yup';

// Controla los estados iniciales
export function initialValues() {
    return {
        task: ""
    };
}

// Controla las validaciones (por ejemplo si hay errores)
export const validationSchema = () => {
    return Yup.object({
        task: Yup.string().required('danger')
    })
}