import HttpClient from '../servicios/HttpClient';
import axios from 'axios';

const instance = axios.create();
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

//const token_seguridad = window.localStorage.getItem("token_id");

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
                        type: "INICIAR_SESION",
                        sesion: result.data,
                        autenticado: true
                    })
                } 
            } 
 
            
        }).catch(error => {
            resolve(error.response);
        })
    })
}
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
