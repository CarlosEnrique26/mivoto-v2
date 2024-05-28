import HttpClient from '../servicios/HttpClient';
import axios from 'axios';

const instance = axios.create();
instance.Canceltoken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export const getEnterprises = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/EnterpriseApi/GetEnterprises').then(response => {
            resolve(response.data);
        }).catch(error => {
            resolve(error.response);
        })
    })
}

export const SaveEnterprise = (model) => {
      
    return new Promise((resolve, reject) => {
        instance.post('EnterpriseApi/SaveEnterprise', model)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
};

export const DeleteEnterprise = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/EnterpriseApi/DeleteEnterprise').then(response => {
            resolve(response.data);
        }).catch(error => {
            resolve(error.response);
        })
    })
}