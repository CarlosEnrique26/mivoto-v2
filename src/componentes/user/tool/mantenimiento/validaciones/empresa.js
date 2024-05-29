export const validateForm = (empresaData) => {
    let errors = {};

    if (!empresaData.businessName) {
        errors.businessName = "El nombre de la empresa es obligatorio.";
    }
    if (!empresaData.representative) {
        errors.representative = "El nombre del representante es obligatorio.";
    }
    if (!empresaData.address) {
        errors.address = "La dirección es obligatoria.";
    }
    if (!empresaData.typeDocument) {
        errors.typeDocument = "El tipo de documento es obligatorio.";
    }
    if (!empresaData.addressEmail || !/^\S+@\S+\.\S+$/.test(empresaData.addressEmail)) {
        errors.addressEmail = "Correo electrónico no válido.";
    }
    if (!empresaData.phone || empresaData.phone.length < 9) {
        errors.phone = "El teléfono debe tener al menos 10 dígitos.";
    }
    if (!empresaData.documentNumber || !/^\d+$/.test(empresaData.documentNumber)) {
        errors.documentNumber = "El número de documento es obligatorio y debe ser un número válido.";
    }

    return errors;
};

export const isFormValid = (errors) => {
    return Object.values(errors).every(x => x === "");
};