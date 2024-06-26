export const initialState = {
    usuario: {
        id: 0,
        login: "",
        password: "",
        nameUser: "",
        lastName: "",
        typeDocument: "",
        dni: "",
        email: "",
        logoName: "",
        logoPath: "",
        isActive: true,
        profileId: 0
    },
    autenticado: false
};

const sesionUsuarioReducer = (state = initialState, action) => {

    switch(action.type) {
        case "INICIAR_SESION":
        return {
            ...state,
            usuario : action.sesion,
            autenticado : action.autenticado, 
        };
        case "SALIR_SESION":
            return {
                ...state, 
                usuario: action.nuevoUsuario,
                autenticado : action.autenticado
            };
        case "ACTUALIZAR_USUARIO":
            return {
                ...state,
                usuario: action.nuevoUsuario,
                autenticado : action.autenticado
            }
    }
};

export default sesionUsuarioReducer;