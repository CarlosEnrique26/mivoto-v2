export const validateLogin = (usuario) => {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^[a-zA-Z0-9]+$/;
    //const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    if (!usuario.Login.trim()) {
      return "Por favor ingrese su nombre de usuario.";
    } else if (!usernameRegex.test(usuario.Login.trim())) {
      return "El nombre de usuario solo puede contener letras y números.";
    }
  
    if (!usuario.Password.trim()) {
      return "Por favor ingrese su contraseña.";
    } else if (!passwordRegex.test(usuario.Password.trim())) {
      return "La contraseña debe tener al menos ocho caracteres, una letra y un número.";
    }
  
    return null; // No errors
  };