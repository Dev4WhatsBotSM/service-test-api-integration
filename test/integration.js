import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';
import { Servicios } from '../src/configuraciones/consumo-servicios.js';
import { ConsumirServicio } from '../src/servicios/microservicios.js';



const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

describe('Servicios.order.ApiAgenteASO.ConsultaASO', () => {
    let response;
    let body;

    beforeAll(async () => {
        let url = Servicios.order.ApiAgenteASO.ConsultaASO
        url.url = url.url.replace(":idCategoria", 1)
        response = await ConsumirServicio(url, 'ConsultaASO')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado).toBeArray();
    });

   
});