export const validateForm = (mailData) => {
    let errors = {};

    if (!mailData.description) {
        errors.description = "El nombre de la empresa es obligatorio.";
    }
    
    if (!mailData.mail || !/^\S+@\S+\.\S+$/.test(mailData.mail)) {
        errors.mail = "Correo electrónico no válido.";
    }
    

    return errors;
};

export const isFormValid = (errors) => {
    return Object.values(errors).every(x => x === "");
};