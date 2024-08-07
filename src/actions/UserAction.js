import HttpClient from '../servicios/HttpClient';
import axios from 'axios';

const instance = axios.create();
instance.Canceltoken = axios.CancelToken;
instance.isCancel = axios.isCancel;

const token_seguridad = window.localStorage.getItem("token_id");

export const SaveEnterprise = (user) => {
    return new Promise((resolve, reject) => {
        instance.post('EnterpriseApi/SaveEnterprise', user)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
};

export const UpdateEnterprise = (id, user) => {
    return new Promise((resolve, reject) => {
        instance.post(`/EnterpriseApi/SaveEnterprise/${id}`, user)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
};

export const DeleteEnterprise = (id) => {
    return new Promise((resolve, reject) => {
        instance.delete(`EnterpriseApi/DeleteEnterprise/${id}`)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
};
/*
export const UpdateEnterprise = (user) => {
    return instance.put(`/EnterpriseApi/UpdateEnterprise/${user.id}`, user)
        .then(response => response.data)
        .catch(error => { throw error });
};

export const DeleteEnterprise = (id) => {
    return instance.delete(`/EnterpriseApi/DeleteEnterprise/${id}`)
        .then(response => response.data)
        .catch(error => { throw error });
};
*/
// OTROS // ...............................................

export const SaveUserCredential = (user) => {
    return new Promise((resolve, reject) => {
        instance.post('UserCredentialApi/SaveUserCredential', user).then(response => {
            resolve(response.data);
        })
    })
}

export const loginUser = (user, dispatch,props) => {
    return new Promise((resolve, reject) => {
        HttpClient.post('/UserSystemApi/Login', user).then(response => {
            let result = response.data;  
            console.log(result);
            resolve(result); 

            if(result.isSuccess){
                if(result.isContent){
                    dispatch({
                        type: "SESSION_START",
                        session: result.response,
                        authenticated: true
                    })
                } 
            } 
 
            
        }).catch(error => {
            resolve(error.response);
        })
    })
}

export const getUserActuall = (dispatch) => { 
    console.log("token_seguridad ",token_seguridad);
    return new Promise((resolve, reject) => {
        HttpClient.get('/UserSystemApi/GetUserById?tokenid=' + token_seguridad).then(response => {
            let result = response.data;
            console.log("getUserActuall ", result);
            if(result.isSuccess){
                if(result.isContent){
                    dispatch({
                        type: "SESSION_START",
                        session: response.data.response,
                        authenticated: true
                    }) 
                }else{ 
                    dispatch({
                        type: "OPEN_SNACKBAR",
                        openMessage: {
                            open: true,
                            message: "Usuario no registrado"
                        }
                    })
                }
            }else{
                dispatch({
                    type: "OPEN_SNACKBAR",
                    openMessage: {
                        open: true,
                        message: "Usuario no registrado"
                    }
                })
            }
            resolve(result.response);
        }).catch(error => {
            resolve(error.response);
        })
    })
}

export const getUsersCredentials = (enterpriseid) => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/UserSystemApi/GetUsersCredentials?enterpriseid=' + enterpriseid).then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        })
    })
}

export const getUsersCredentialByEmail = (email) => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/UserSystemApi/PasswordRecovery?email=' + email).then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        })
    })
}

export const getUsersByKey = (key) => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/UserSystemApi/GetUserByCodeActive?codeconfirm=' + key).then(response => {
            resolve(response.data);
            console.log(response.data);
        }).catch(error => {
            resolve(error.response);
        })
    })
}
