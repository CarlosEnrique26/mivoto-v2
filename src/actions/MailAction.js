import HttpClient from '../servicios/HttpClient';
import axios from 'axios';

const instance = axios.create();
instance.Canceltoken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export const getEnterpriseMail = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/EnterpriseApi/GetEnterpriseMail?enterpriseId=1').then(response => {
            resolve(response.data);
        }).catch(error => {
            resolve(error.response);
        })
    })
}

export const SaveEnterpriseMail = (model) => {
    console.log("model ", model);
    return new Promise((resolve, reject) => {
        instance.post('EnterpriseApi/SaveEnterpriseMail', model)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
};

export const DeleteEnterpriseMail = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/EnterpriseApi/DeleteEnterprise').then(response => {
            resolve(response.data);
        }).catch(error => {
            resolve(error.response);
        })
    })
}