import HttpClient from '../servicios/HttpClient';
import axios from 'axios';

const instance = axios.create();
instance.Canceltoken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export const SaveUserCredential = (model) => {
    console.log("model ", model);
    return new Promise((resolve, reject) => {
        HttpClient.post('/UserCredentialApi/Login', model)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
};
