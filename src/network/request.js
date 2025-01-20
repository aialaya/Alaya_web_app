import axios from 'axios';

const service = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 60000,
    headers: { "Content-Type": "application/json" },
});

let api= {};

api.get = function (url,param) {
    return new Promise((resolve, reject) => {
        service
            .request({
                url: url,
                method: "GET",
                params: param,
            })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
api.post = function (url, data) {
    return new Promise((resolve, reject) => {
        service
            .post(url, data)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
api.upload = function (url, data) {
    return new Promise((resolve, reject) => {
        service
            .post(url, data,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default api;