import HttpClient from '../servicios/HttpClient';
import axios from 'axios';

const instance = axios.create();
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export const loginUser = (user, dispatch) => {
    console.log("Login:", user);
    return new Promise((resolve, reject) => {
        instance.get('/UserCredentialApi/Login', user).then(response => {
            let result = response.data;
            console.log(result);
            if (result.isSuccess && result.model) {
                dispatch({
                    type: "INICIAR_SESION",
                    usuario: result.model,
                    autenticado: true
                });
                resolve(result);
            } else {
                reject(result); // Manejo de errores
            }
        }).catch(error => {
           
            reject(error); // Manejo de errores
        });
    });
};
/*
import axios from 'axios';

const instance = axios.create();
instance.Canceltoken = axios.CancelToken;
instance.isCancel = axios.isCancel;



    export const loginUser = (user, dispatch,props) => {
        console.log("Login:", user);
        return new Promise((resolve, reject) => {
            instance.post('/UserCredentialApi/Login', user).then(response => {
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
    };
*/
