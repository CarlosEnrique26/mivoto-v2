import HttpClient from '../servicios/HttpClient';
import axios from 'axios';

const instance = axios.create();
instance.Canceltoken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export const getVotation = () => {
    return new Promise((resolve, reject) => {
        instance.get('/VotationApi/GetVotationsByEnterpriseId?enterpriseId=1').then(response => {
            resolve(response.data);
        }).catch(error => {
            resolve(error.response);
        })
    })
}

export const SaveVotation = (model) => {
    return new Promise((resolve, reject) => {
        instance.post('/VotationApi/SaveVotation', model)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
};

