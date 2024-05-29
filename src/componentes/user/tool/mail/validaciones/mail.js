export const validateForm = (mailData) => {
    let errors = {};

    if (!mailData.nombre) {
        errors.nombre = "El nombre de la empresa es obligatorio.";
    }
    
    if (!mailData.email || !/^\S+@\S+\.\S+$/.test(mailData.email)) {
        errors.email = "Correo electrónico no válido.";
    }
    

    return errors;
};

export const isFormValid = (errors) => {
    return Object.values(errors).every(x => x === "");
};