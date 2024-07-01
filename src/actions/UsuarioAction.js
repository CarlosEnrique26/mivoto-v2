import HttpClient from '../servicios/HttpClient';
import axios from 'axios';

const instance = axios.create();
instance.Canceltoken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export const ObtenerUsuarioActual = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/UserCredentialApi/Login').then(response => {
            resolve(response.data);
        }).catch(error => {
            resolve(error.response);
        })
    })
}