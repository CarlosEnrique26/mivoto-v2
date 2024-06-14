import HttpClient from '../servicios/HttpClient';
import axios from 'axios';

const instance = axios.create();
instance.Canceltoken = axios.CancelToken;
instance.isCancel = axios.isCancel;
/*
export const getUserCredential = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/UserCredentialApi/GetUserCredential').then(response => {
            resolve(response.data);
        }).catch(error => {
            resolve(error.response);
        })
    })
}
*/
export const SaveUserCredential = (model) => {
    console.log("model ", model);
    return new Promise((resolve, reject) => {
        instance.post('/UserCredentialApi/SaveUserCredential', model)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
};
/*
export const DeleteUserCredential = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/UserCredentialApi/DeleteUserCredential').then(response => {
            resolve(response.data);
        }).catch(error => {
            resolve(error.response);
        })
    })
}
*/