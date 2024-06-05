import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';
import { Servicios } from '../src/configuraciones/consumo-servicios.js';
import { ConsumirServicio } from '../src/servicios/microservicios.js';



const BEFORE_ALL_TIMEOUT = 30000; // 30 sec


describe('Servicios.discount.ApiDiscount.ConsApiDiscountGet', () => {
    let response;
    let body;
 
    beforeAll(async () => {
        let url = Servicios.discount.ApiDiscount.ConsApiDiscountGet
        url.url = url.url.replace(":id_descuento", 27)
        response = await ConsumirServicio(url, 'ConsApiDiscountGet')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado).toBeArray();
    });

   
});


describe('Servicios.discount.ApiDiscount.ConsApiDiscountPost', () => {
    let response;
    let body;
    

    beforeAll(async () => {
        let url = Servicios.discount.ApiDiscount.ConsApiDiscountPost
        url.data={
            "descount":{
                "id_client_admin_bot":1,
                "nombre":"Test",
                "descripcion":"Testing xd",
                "tipo_descuento":"Test",
                "valor":900,
                "fecha_inicio":"2024-06-07",
                "fecha_fin":"2024-06-07",
                "codigo":"BCECPN2024"
            }
        }
        response = await ConsumirServicio(url, 'ConsApiDiscountPost')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado);
    });

    

   
}
);

describe('Servicios.discount.ApiDiscount.ConsApiDiscountPut', () => {
    let response;
    let body;
    

    beforeAll(async () => {
        let url = Servicios.discount.ApiDiscount.ConsApiDiscountPut
        url.url = url.url.replace(":id_descuento", 29)
        url.data={
            "descount":{
                "id_client_admin_bot": 1,
                "idbot_control": 1,
                "nombre": "Test",
                "descripcion": "Descuento por Test",
                "tipo_descuento": "promocion",
                "valor": 1900,
                "codigo": "ICKKCK"
        }
        }
        response = await ConsumirServicio(url, 'ConsApiDiscountPut')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado);
    });

   
}
);