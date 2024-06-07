export const validateForm = (newuser, passConfirm, confirmTerm) => {
    const newErrors = {};

    // Username validation
    if (!newuser.nameUser.trim()) {
        newErrors.nameUser = "Por favor ingrese su nombre.";
    }

    // Last name validation
    if (!newuser.lastName.trim()) {
        newErrors.lastName = "Por favor ingrese sus apellidos.";
    }

    // Document type validation
    if (!newuser.typeDocument) {
        newErrors.typeDocument = "Por favor seleccione un tipo de documento.";
    }

    // Document number validation
    if (!newuser.dni.trim()) {
        newErrors.dni = "Por favor ingrese su número de documento.";
    }

    // Email validation
    if (!newuser.email.trim()) {
        newErrors.email = "Por favor ingrese su correo electrónico.";
    } else if (!/\S+@\S+\.\S+/.test(newuser.email.trim())) {
        newErrors.email = "Por favor ingrese un correo electrónico válido.";
    }

    // Username validation
    if (!newuser.login.trim()) {
        newErrors.login = "Por favor ingrese un nombre de usuario.";
    }

    // Password validation
    if (!newuser.password.trim()) {
        newErrors.password = "Por favor ingrese una contraseña.";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(newuser.password.trim())) {
        newErrors.password = "La contraseña debe tener al menos 8 caracteres, una letra y un número.";
    }

    // Password confirmation validation
    if (newuser.password !== passConfirm) {
        newErrors.passConfirm = "Las contraseñas no coinciden.";
    }

    // Terms and conditions validation
    if (!confirmTerm) {
        newErrors.confirmTerm = "Es necesario aceptar los términos y condiciones.";
    }

    // Return errors
    return newErrors;
};