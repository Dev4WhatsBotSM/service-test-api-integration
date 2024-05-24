import { logger } from '../funciones/utilerias/logger.js';
// import httpContext from 'express-http-context';
import axios from 'axios';


export const ConsumirServicio = async (url, name) => {
    // console.log('Request: ' + JSON.stringify(url));
    return axios
        .request(url)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(name + " | Error Response: ", err?.response?.status);
            logger.debug({
                "ERROR": true, stack: {
                    function: "ConsumirServicio ",
                    message: "falló al consumir servicio el :" + name,
                    detail: err?.response?.data
                }
            })
            return err?.response?.data;
        });
}
